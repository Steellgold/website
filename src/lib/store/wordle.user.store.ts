import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Line, PartyEndReason, WordleParty } from "../types/wordle.type";
import { dayJS } from "../utils/dayjs/day-js";
import { diffToNum } from "../wordle/utils";
import { WordleUser } from "../types/wordle.user.type";

type DataStore = {
  user: WordleUser | null;
  setUser: (user: WordleUser) => void;
};

export const useWordleUserStore = create(
  persist<DataStore>(
    (set) => ({
      user: null,
      setUser: (user: WordleUser) => set(() => ({ user })),
    }),
    { name: "wordle-visited-storage" },
  ),
);