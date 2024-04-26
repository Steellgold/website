export type LetterStatus = "well-placed" | "misplaced" | "not-present";
export type PartyDifficulty = "five" | "six" | "seven" | "eight" | "nine" | "ten";

export type WordCategories = 
  | "school" | "landscape" | "qualities" | "calculation" | "food" | "human-body" | "senses" | "interior" | "industry" | "arts" | "agriculture" | "orchard" | "gestures" | "time" | "clothing" | "sports" | "house" | "travels" | "animals" | "city" | "water" | "commerce" | "communication" | "emotions" | "government" | "army" | "human-life";

export const Categories: { [key in WordCategories]: number } = {
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

export type WordleParty = {
  id: string;
  word: string;
  startedAt: number;
  finishedAt: number;

  endStatus: "win" | "lose";

  lines: {
    [key: number]: {
      letter: string;
      status: LetterStatus;
    }[];
  }[]
};