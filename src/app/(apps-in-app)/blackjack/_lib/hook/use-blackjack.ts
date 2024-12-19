"use client";

import { create } from "zustand";
import { Card, GameStatus } from "../blackjack.types";
import { createDeck } from "../blackjack.utils";

type BlackjackState = {
  balance: number;
  bet: number;

  bets: number[];
  addBet: (bet: number) => void;
  removeBet: () => void;

  gameStatus: GameStatus;

  gameStartTimer: number;
  startGameTimer: () => void;

  distributeCards: () => void;

  playerCards: Card[];
  croupierCards: Card[];
  deck: Card[];

  setBalance: (balance: number) => void;
  setBet: (bet: number) => void;
  setGameStatus: (status: GameStatus) => void;
  setPlayerCards: (cards: Card[]) => void;
  setCroupierCards: (cards: Card[]) => void;
  setDeck: (cards: Card[]) => void;

  hit: (who: "player" | "dealer", isHidden?: boolean) => Card;
  reset: () => void;
};

export const useBlackjack = create<BlackjackState>((set, get) => ({
  balance: 0,
  bet: 0,
  bets: [],

  gameStatus: "BALANCE_START",

  distributeCards: () => {
    const { hit } = get();

    setTimeout(() => hit("player"), 500);
    setTimeout(() => hit("dealer"), 1000);
    setTimeout(() => hit("player"), 1500);
    setTimeout(() => hit("dealer", true), 2000);
  },

  gameStartTimer: 0,
  startGameTimer: () => {
    set({ gameStartTimer: 10 });
  
    const interval = setInterval(() => {
      const { bet, distributeCards } = get();
  
      if (bet === 0) {
        return;
      }
  
      set((state) => {
        if (state.gameStartTimer <= 1) {
          clearInterval(interval);
          set({ gameStatus: "PLAYING" });
  
          distributeCards();
          return { gameStartTimer: 0 };
        }
        return { gameStartTimer: state.gameStartTimer - 1 };
      });
    }, 1000);
  },  

  playerCards: [],
  croupierCards: [],
  deck: [],

  // addBet: (bet) => set((state) => ({ bets: [...state.bets, bet], balance: state.balance - bet })),
  // removeBet: () => set((state) => ({ bets: state.bets.slice(0, -1), balance: state.balance + state.bets[state.bets.length - 1] })),
  addBet: (bet) => set((state) => ({
    bets: [...state.bets, bet],
    balance: state.balance - bet,
    bet: state.bet + bet,
  })),

  removeBet: () => set((state) => ({
    bets: state.bets.slice(0, -1),
    balance: state.balance + state.bets[state.bets.length - 1],
    bet: state.bet - state.bets[state.bets.length - 1],
  })),

  setBalance: (balance) => set({ balance }),
  setBet: (bet) => set({ bet }),
  setGameStatus: (status) => set({ gameStatus: status }),
  setPlayerCards: (cards) => set({ playerCards: cards }),
  setCroupierCards: (cards) => set({ croupierCards: cards }),
  setDeck: (cards) => set({ deck: cards }),

  hit: (who: "player" | "dealer", isHidden: boolean = false) => {
    const { deck, playerCards, croupierCards } = get();
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

  reset: () =>
    set({
      balance: 0,
      bet: 0,
      bets: [],
      gameStatus: "BALANCE_START",

      deck: [],
      playerCards: [],
      croupierCards: [],
    }),
}));
