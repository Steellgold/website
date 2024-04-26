import { create } from "zustand";
import { persist } from "zustand/middleware";

type DataStore = {
  hasVisitedWordle: boolean;
  setHasVisitedWordle: () => void;
};

export const useWordleStore = create(
  persist<DataStore>(
    (set) => ({
      hasVisitedWordle: false,
      setHasVisitedWordle: () => set((state) => ({ hasVisitedWordle: true })),
    }),
    { name: "wordle-visited-storage" },
  ),
);