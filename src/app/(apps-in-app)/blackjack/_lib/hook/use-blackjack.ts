"use client";

import { create } from "zustand";
import { Card } from "../blackjack.types";

type GameStatus = "BALANCE_START" | "BETTING" | "PLAYING" | "DEALER_TURN" | "GAME_OVER";

type BlackjackState = {
  balance: number;
  bet: number;
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
  gameStatus: "BALANCE_START",
  playerCards: [],
  croupierCards: [],
  deck: [],

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
      bet: 0,
      gameStatus: "BALANCE_START",
      playerCards: [],
      croupierCards: [],
    }),
}));
