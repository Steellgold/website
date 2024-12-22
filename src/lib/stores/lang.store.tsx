import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Lang = "en" | "fr";

type LangStore = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang: Lang) => set({ lang }),
    }),
    { name: "lang-storage", getStorage: () => localStorage }
  )
);