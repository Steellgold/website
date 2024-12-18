import { create } from 'zustand';
import { Dayjs } from 'dayjs';
import { persist } from 'zustand/middleware';

export type DifficultyLevel = "easy" | "medium" | "hard" | "god";

export const numMaxByDifficulty: Record<DifficultyLevel, number> = {
  easy: 100,
  medium: 500,
  hard: 1000,
  god: 10000,
};

export type GuessRound = {
  secret: number;
  elapsed: number;
  
  start: Dayjs;
  end: Dayjs;

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

export const useGuess = create<GuessStore>()(
  persist(
    (set, get) => ({
      history: null,
      addRound: (round: GuessRound) =>
        set((state) => ({
          history: state.history ? [...state.history, round] : [round],
        })),
      clearHistory: () => set({ history: null }),

      guessRate: (difficulty: DifficultyLevel) => {
        const rounds = get().history?.filter((round) => round.difficulty === difficulty);
        if (!rounds) return null;

        const total = rounds.reduce((acc, round) => acc + round.attempts, 0);
        const totalRounds = rounds.length;

        return total / totalRounds;
      },

      bestTime: (difficulty: DifficultyLevel) => {
        const rounds = get().history?.filter((round) => round.difficulty === difficulty);
        if (!rounds) return null;

        return rounds.reduce((acc, round) => Math.min(acc, round.elapsed), Infinity);
      },

      played: (difficulty: DifficultyLevel) => {
        const rounds = get().history?.filter((round) => round.difficulty === difficulty);
        return rounds ? rounds.length : 0;
      },
    }),
    { name: "guess-storage", getStorage: () => localStorage }
  )
);