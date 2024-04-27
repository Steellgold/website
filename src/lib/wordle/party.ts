import { PartyDifficulty, WordCategories, WordleParty } from "../types/wordle.type";

export const getCategoryName = (category: WordCategories): string => {
  switch (category) {
    case "random":
      return "🎲 Random";
    case "school":
      return "🏫 School";
    case "landscape":
      return "🏞️ Landscape";
    case "qualities":
      return "🌟 Qualities";
    case "calculation":
      return "🧮 Calculation";
    case "food":
      return "🍔 Food";
    case "human-body":
      return "👤 Human Body";
    case "senses":
      return "👁️ Senses";
    case "interior":
      return "🏠 Interior";
    case "industry":
      return "🏭 Industry";
    case "arts":
      return "🎨 Arts";
    case "agriculture":
      return "🌾 Agriculture";
    case "orchard":
      return "🍎 Orchard";
    case "gestures":
      return "🤗 Gestures";
    case "time":
      return "⏰ Time";
    case "clothing":
      return "👗 Clothing";
    case "sports":
      return "⚽ Sports";
    case "house":
      return "🏡 House";
    case "travels":
      return "✈️ Travels";
    case "animals":
      return "🐶 Animals";
    case "city":
      return "🏙️ City";
    case "water":
      return "🌊 Water";
    case "commerce":
      return "💼 Commerce";
    case "communication":
      return "📞 Communication";
    case "emotions":
      return "😊 Emotions";
    case "government":
      return "🏛️ Government";
    case "army":
      return "🎖️ Army";
    case "human-life":
      return "👪 Human Life";
    default:
      return "📚 Unknown";
  }
}

export const getCategoryId = (category: WordCategories): number => {
  switch (category) {
    case "random":
      return 0;
    case "school":
      return 1;
    case "landscape":
      return 2;
    case "qualities":
      return 3;
    case "calculation":
      return 4;
    case "food":
      return 5;
    case "human-body":
      return 6;
    case "senses":
      return 7;
    case "interior":
      return 8;
    case "industry":
      return 9;
    case "arts":
      return 10;
    case "agriculture":
      return 11;
    case "orchard":
      return 12;
    case "gestures":
      return 13;
    case "time":
      return 14;
    case "clothing":
      return 15;
    case "sports":
      return 16;
    case "house":
      return 17;
    case "travels":
      return 18;
    case "animals":
      return 19;
    case "city":
      return 20;
    case "water":
      return 21;
    case "commerce":
      return 22;
    case "communication":
      return 23;
    case "emotions":
      return 24;
    case "government":
      return 25;
    case "army":
      return 26;
    case "human-life":
      return 27;
    default:
      return 0;
  }
}

export const difficultyToNumber = (difficulty: PartyDifficulty): number => {
  switch (difficulty) {
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    case "ten":
      return 10;
    default:
      return 5;
  }
}

export const getWinsCount = (parties: WordleParty[]): number => (parties ?? []).filter((party) => party.endStatus === "win").length;

export const getLosesCount = (parties: WordleParty[]): number => (parties ?? []).filter((party) => party.endStatus === "lose").length;

export const getPlayedCount = (parties: WordleParty[]): number => (parties ?? []).length;