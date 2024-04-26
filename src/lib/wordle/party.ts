import { WordCategories, WordleParty } from "../types/wordle.type";

export const getCategoryName = (category: WordCategories): string => {
  switch (category) {
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

export const getWinsCount = (parties: WordleParty[]): number => (parties ?? []).filter((party) => party.endStatus === "win").length;

export const getLosesCount = (parties: WordleParty[]): number => (parties ?? []).filter((party) => party.endStatus === "lose").length;

export const getPlayedCount = (parties: WordleParty[]): number => (parties ?? []).length;