"use client";

import { create } from "zustand";
import { Card, GameStatus, SEC_TO_BET } from "../blackjack.types";
import { createDeck, getValueFromRank, shuffle } from "../blackjack.utils";

type BlackjackState = {
  balance: number;
  bet: number;

  bets: number[];
  addBet: (bet: number) => void;
  removeBet: () => void;

  gameStatus: GameStatus;

  gameStartTimer: number;
  setGameStartTimer: (timer: number) => void;
  startGameTimer: () => void;

  distributeCards: () => void;

  playerCards: Card[];
  croupierCards: Card[];
  deck: Card[];

  setBalance: (balance: number) => void;

  setBet: (bet: number) => void;
  setBets: (bets: number[]) => void;
  
  setGameStatus: (status: GameStatus) => void;
  setPlayerCards: (cards: Card[]) => void;
  setCroupierCards: (cards: Card[]) => void;
  setDeck: (cards: Card[]) => void;

  hit: (who: "player" | "dealer", isHidden?: boolean) => Card;
  stand: () => void;
  reset: () => void;

  timerId: NodeJS.Timeout | null;
  setTimerId: (id: NodeJS.Timeout | null) => void;
};

export const useBlackjack = create<BlackjackState>((set, get) => ({
  balance: 0,
  bet: 0,
  
  bets: [],
  setBets: (bets) => set({ bets }),

  gameStatus: "BALANCE_START",

  distributeCards: () => {
    const { hit, setGameStatus, playerCards, croupierCards, setBalance, balance, bet } = get();
  
    setTimeout(() => hit("player"), 500);
    setTimeout(() => hit("dealer"), 1000);
    setTimeout(() => hit("player"), 1500);
    setTimeout(() => {
      hit("dealer", true);
  
      const getHandValue = (cards: Card[]) => {
        let value = cards.reduce((sum, card) => sum + getValueFromRank(card.rank), 0);
        const hasAce = cards.some((card) => card.rank === "A");
        if (hasAce && value <= 11) value += 10;
        return value;
      };
  
      const playerValue = getHandValue(playerCards);
      const croupierValue = getHandValue(croupierCards);
  
      if (playerValue === 21 && croupierValue === 21) {
        setGameStatus("DRAW");
        setBalance(balance + bet);
      } else if (playerValue === 21) {
        setGameStatus("PLAYER_BLACKJACK");
        setBalance(balance + bet * 2.5);
      } else if (croupierValue === 21) {
        setGameStatus("DEALER_BLACKJACK");
      } else {
        setGameStatus("PLAYING");
      }
    }, 2000);
  },

  gameStartTimer: 0,
  setGameStartTimer: (timer) => set({ gameStartTimer: timer }),

  timerId: null,
  setTimerId: (id) => set({ timerId: id }),

  startGameTimer: () => {
    const { setGameStatus, setTimerId, gameStartTimer, gameStatus } = get();

    if (get().timerId) {
      clearInterval(get().timerId!);
      set({ timerId: null });
    }

    set({ gameStartTimer: SEC_TO_BET });
  
    const interval = setInterval(() => {
      const { bet, distributeCards, gameStatus: currentStatus } = get();

      if (currentStatus !== "PLAYING" && currentStatus !== "BETTING") {
        clearInterval(interval);
        set({ timerId: null });
        return;
      }
  
      if (bet === 0) {
        return;
      }
  
      set((state) => {
        if (state.gameStartTimer <= 1) {
          setGameStatus("PLAYING");
          clearInterval(interval);
          set({ timerId: null });

          distributeCards();
          return { gameStartTimer: 0 };
        }
        return { gameStartTimer: state.gameStartTimer - 1 };
      });
    }, 1000);

    setTimerId(interval);
  },

  playerCards: [],
  croupierCards: [],
  deck: [],

  addBet: (bet) => set((state) => ({
    bets: [...state.bets, bet],
    balance: state.balance - bet,
    bet: state.bet + bet,
  })),

  removeBet: () => set((state) => {
    if (state.bets.length === 0) return state;

    const lastBet = state.bets[state.bets.length - 1];
    return {
      bets: state.bets.slice(0, -1),
      balance: state.balance + lastBet,
      bet: state.bet - lastBet,
    };
  }),

  setBalance: (balance) => set({ balance }),
  setBet: (bet) => set({ bet }),
  setGameStatus: (status) => {
    console.log("Game status updated to:", status, "Stack trace:", new Error().stack);
    set({ gameStatus: status });
  },
  setPlayerCards: (cards) => set({ playerCards: cards }),
  setCroupierCards: (cards) => set({ croupierCards: cards }),
  setDeck: (cards) => set({ deck: cards }),

  hit: (who: "player" | "dealer", isHidden: boolean = false) => {
    const { deck, playerCards, croupierCards, setDeck } = get();

    const card = deck.pop();
    if (!card) throw new Error("No more cards in the deck");

    if (who === "player") {
      set({ playerCards: [...playerCards, { ...card, isHidden: false }] });
    } else {
      set({ croupierCards: [...croupierCards, { ...card, isHidden, owner: "DEALER" }] });
    }

    set({ deck });
    return card;
  },

  stand: () => {
    const {
      croupierCards, deck,
      setCroupierCards, setPlayerCards,
      setDeck,
      gameStatus, setGameStatus, setGameStartTimer,
      setBet, setBets,
      timerId, setTimerId,
      startGameTimer
    } = get();

    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }

    setGameStatus("DEALER_TURN");

    const revealedCards = croupierCards.map((card) => ({ ...card, isHidden: false }));
    setCroupierCards(revealedCards);

    let currentCards = revealedCards;
    let currentDeck = [...deck];

    const getHandValue = (cards: Card[]) => {
      let value = cards.reduce((sum, card) => sum + getValueFromRank(card.rank), 0);
      const hasAce = cards.some((card) => card.rank === "A");

      if (hasAce && value <= 11) {
        value += 10;
      }

      return value;
    };

    const endGame = () => {
      const { setBet, setBets, setGameStartTimer, setCroupierCards, setPlayerCards, deck, setDeck, startGameTimer } = get();
    
      setBet(0);
      setBets([]);
      setGameStartTimer(0);
      setCroupierCards([]);
      setPlayerCards([]);
    
      if (deck.length <= 10) {
        setDeck(shuffle(createDeck()));
      }
    
      setGameStatus("BETTING");
      startGameTimer();
    };

    const dealCards = () => {
      const { playerCards } = get();

      let dealerHandValue = getHandValue(currentCards);
      let playerHandValue = getHandValue(playerCards);

      if (dealerHandValue < 17) {
        const newCard = currentDeck.pop();
        if (!newCard) throw new Error("No more cards in the deck");

        currentCards = [...currentCards, { ...newCard, isHidden: false, owner: "DEALER" }];
        setCroupierCards([...currentCards]);
        setDeck(currentDeck);

        setTimeout(dealCards, 500);
      } else {
        if (dealerHandValue > 21 && playerHandValue > 21) {
          setGameStatus("DOUBLE_BUST");
        } else if (playerHandValue > 21) {
          setGameStatus("PLAYER_BUST");
        } else if (dealerHandValue > 21) {
          setGameStatus("DEALER_BUST");
        } else {
          if (playerHandValue > dealerHandValue) {
            setGameStatus("PLAYER_WIN");
          } else if (playerHandValue < dealerHandValue) {
            setGameStatus("DEALER_WIN");
          } else {
            setGameStatus("DRAW");
          }
        }

        setTimeout(() => {
          const { setBalance, balance, bet, gameStatus: finalStatus } = get();

          switch (finalStatus) {
            case "PLAYER_BLACKJACK":
              setBalance(balance + bet * 2.5);
              console.log("Player blackjack");
              break;
            case "DEALER_BLACKJACK":
              console.log("Dealer blackjack");
              break;
            case "DRAW":
              setBalance(balance + bet);
              console.log("Draw");
              break;
            case "PLAYER_WIN":
              setBalance(balance + bet * 2); 
              console.log("Player win");
              break;
            case "DEALER_WIN":
              console.log("Dealer win");
              break;
            case "DEALER_BUST":
              setBalance(balance + bet * 2);
              console.log("Dealer bust");
              break;
            case "DOUBLE_BUST":
              console.log("Double bust");
              break;
            default:
              console.log("Unhandled game status:", finalStatus);
          }

          endGame();
        }, 1200)
      }
    };

    dealCards();
  },

  reset: () => {
    const { timerId, setTimerId } = get();

    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }

    set({
      balance: 0,
      bet: 0,
      bets: [],
      gameStatus: "BALANCE_START",

      deck: [],
      playerCards: [],
      croupierCards: [],
      gameStartTimer: 0,
    });
  },
}));