export type LetterStatus = "well-placed" | "misplaced" | "not-present" | "unknown" | "hint";	
export type PartyEndReason = "abandon" | "missed";
export type PartyDifficulty = "five" | "six" | "seven" | "eight" | "nine" | "ten";
export type PartyType = "normal" | "ranked" | "duo" | "daily";

export type WordCategories = "random" | "school" | "landscape" | "qualities" | "calculation" | "food" | "human-body" | "senses" | "interior" | "industry" | "arts" | "agriculture" | "orchard" | "gestures" | "time" | "clothing" | "sports" | "house" | "travels" | "animals" | "city" | "water" | "commerce" | "communication" | "emotions" | "government" | "army" | "human-life";

export const Categories: {
  [key in WordCategories]: number
} = {
  random: 0,
  school: 1,
  landscape: 2,
  qualities: 3,
  calculation: 4,
  food: 5,
  "human-body": 6,
  senses: 7,
  interior: 8,
  industry: 9,
  arts: 10,
  agriculture: 11,
  orchard: 12,
  gestures: 13,
  time: 14,
  clothing: 15,
  sports: 16,
  house: 17,
  travels: 18,
  animals: 19,
  city: 20,
  water: 21,
  commerce: 22,
  communication: 23,
  emotions: 24,
  government: 25,
  army: 26,
  "human-life": 27,
};

export type Line = Letter[];

export type Letter = {
  letter: string;
  status: LetterStatus;
  isJoker?: boolean;
};

export type WordleParty = {
  id: string;
  activeLineIndex: number;
  
  word: string;
  startedAt: string;
  finishedAt?: string;

  endStatus?: "win" | "lose";
  endReason?: PartyEndReason;

  difficulty: PartyDifficulty;
  
  category: WordCategories;
  showCategory: boolean;

  attempts: number;
  
  jokerUsed?: boolean;
  joker?: {
    letter: string;
    lineIndex: number;
    letterIndex: number;
  }
  jokerEnabled: boolean;

  isReadOnly: boolean;
  lines?: Line[];
};