import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PartyType } from "../types/wordle.type";
import { Lang, WordleUser } from "../types/wordle.user.type";

type DataStore = {
  user: WordleUser | null;
  setUser: (user: WordleUser) => void;

  setInterfaceLang: (lang: Lang) => void;
  setDefaultGame: (game: Exclude<PartyType, "daily">) => void;
};

export const useWordleUserStore = create(
  persist<DataStore>(
    (set) => ({
      user: null,
      setUser: (user: WordleUser) => set(() => ({ user })),
      setInterfaceLang: (lang: Lang) =>
          set((state) => ({ user: { ...state.user!, preferences: { ...state.user!.preferences, interface: lang } } })),
      setDefaultGame: (game: Exclude<PartyType, "daily">) =>
          set((state) => ({ user: { ...state.user!, preferences: { ...state.user!.preferences, defaultGame: game } } })),
    }),
    { name: "wordle-visited-storage" },
  ),
);