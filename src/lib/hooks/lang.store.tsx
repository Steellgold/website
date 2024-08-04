import { create } from 'zustand';

type Lang = "en" | "fr";

type LangStore = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangStore>((set, get) => ({
  lang: "en",
  setLang: (lang) => set(() => ({ lang: lang })),
}));