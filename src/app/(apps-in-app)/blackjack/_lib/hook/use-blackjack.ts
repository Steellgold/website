"use client";

import { create } from "zustand";
import { Card, GameStatus } from "../blackjack.types";

type BlackjackState = {
  balance: number;
  bet: number;

  bets: number[];
  addBet: (bet: number) => void;
  removeBet: () => void;

  gameStatus: GameStatus;
  playerCards: Card[];
  croupierCards: Card[];
  deck: Card[];

  setBalance: (balance: number) => void;
  setBet: (bet: number) => void;
  setGameStatus: (status: GameStatus) => void;
  setPlayerCards: (cards: Card[]) => void;
  setCroupierCards: (cards: Card[]) => void;
  setDeck: (cards: Card[]) => void;

  hit: (who: "player" | "dealer") => Card;
  reset: () => void;
};

export const useBlackjack = create<BlackjackState>((set, get) => ({
  balance: 0,
  bet: 0,
  bets: [],
  gameStatus: "BALANCE_START",
  playerCards: [],
  croupierCards: [],
  deck: [],

  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet], balance: state.balance - bet })),
  removeBet: () => set((state) => ({ bets: state.bets.slice(0, -1), balance: state.balance + state.bets[state.bets.length - 1] })),

  setBalance: (balance) => set({ balance }),
  setBet: (bet) => set({ bet }),
  setGameStatus: (status) => set({ gameStatus: status }),
  setPlayerCards: (cards) => set({ playerCards: cards }),
  setCroupierCards: (cards) => set({ croupierCards: cards }),
  setDeck: (cards) => set({ deck: cards }),

  hit: (who) => {
    const { deck, playerCards, croupierCards } = get();
    const card = deck.pop();
    if (!card) throw new Error("No more cards in the deck");

    if (who === "player") {
      set({ playerCards: [...playerCards, card] });
    } else {
      set({ croupierCards: [...croupierCards, card] });
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
