import { WordCategories } from "./wordle.type";

export type WordleUser = {
  name: string;
  id: string;
  avatar?: string;

  isOnline?: boolean;
  isPlaying?: boolean;

  preferences: Preferences;
};

export type Lang = "FRENCH" | "ENGLISH";

export type Preferences = {
  interface: Lang;
  defaultGame: "normal" | "ranked" | "duo";
  defaultCategory: WordCategories;
};