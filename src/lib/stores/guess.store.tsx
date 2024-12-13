import { create } from 'zustand';
import { useEffect } from 'react';

export type DifficultyLevel = "easy" | "medium" | "hard" | "god";

export const numMaxByDifficulty: Record<DifficultyLevel, number> = {
  easy: 100,
  medium: 500,
  hard: 1000,
  god: 10000,
};

type GuessRound = {
  secret: number;
  elapsed: number;

  attempts: number;
  difficulty: DifficultyLevel;
};

type GuessStore = {
  history: null | GuessRound[];
  addRound: (round: GuessRound) => void;
  clearHistory: () => void;

  guessRate: (difficulty: DifficultyLevel) => number | null;
  bestTime: (difficulty: DifficultyLevel) => number | null;
  played: (difficulty: DifficultyLevel) => number;
};

export const useGuess = create<GuessStore>((set, get) => ({
  history: null,
  addRound: (round) => set((state) => ({
    history: state.history ? [...state.history, round] : [round],
  })),
  clearHistory: () => set({ history: null }),
  
  guessRate: (difficulty) => {
    const rounds = get().history?.filter((round) => round.difficulty === difficulty);
    if (!rounds) return null;

    const total = rounds.reduce((acc, round) => acc + round.attempts, 0);
    const totalRounds = rounds.length;

    return total / totalRounds;
  },

  bestTime: (difficulty) => {
    const rounds = get().history?.filter((round) => round.difficulty === difficulty);
    if (!rounds) return null;

    return rounds.reduce((acc, round) => Math.min(acc, round.elapsed), Infinity);
  },

  played: (difficulty) => {
    const rounds = get().history?.filter((round) => round.difficulty === difficulty);
    return rounds ? rounds.length : 0;
  },
}));