import { PartyDifficulty, WordCategories, WordleParty } from "../types/wordle.type";

export const getCategoryName = (category: WordCategories): {
  name: string;
  nameFr?: string;
  description?: string;
  descriptionFr?: string;
} => {
  switch (category) {
    case "random":
      return {
        name: "🎲 Random",
        nameFr: "🎲 Aléatoire",
        description: "A random word from any category",
        descriptionFr: "Un mot aléatoire de n'importe quelle catégorie"
      }
    case "school":
      return {
        name: "🏫 School",
        nameFr: "🏫 École",
        description: "School, class, instruction",
        descriptionFr: "École, classe, instruction"
      }
    case "landscape":
      return {
        name: "🏞️ Landscape",
        nameFr: "🏞️ Paysages",
        description: "Landscapes, climate, shapes",
        descriptionFr: "Paysages, climat, formes"
      }
    case "qualities":
      return {
        name: "🌟 Qualities",
        nameFr: "🌟 Qualités",
        description: "Qualities and defects",
        descriptionFr: "Qualités et défauts"
      }
    case "calculation":
      return {
        name: "🧮 Calculation",
        nameFr: "🧮 Calcul",
        description: "Calculation and measures",
        descriptionFr: "Calcul et mesures"
      }
    case "food":
      return {
        name: "🍔 Food",
        nameFr: "🍔 Aliments",
        description: "Food, drinks, meals",
        descriptionFr: "Aliments, boissons, repas"
      }
    case "human-body":
      return {
        name: "👤 Human Body",
        nameFr: "👤 Corps Humain",
        description: "Human body",
        descriptionFr: "Corps humain"
      };
    case "senses":
      return {
        name: "👁️ Senses",
        nameFr: "👁️ Sens",
        description: "Senses, will, intelligence",
        descriptionFr: "Sens, volonté, intelligence"
      }
    case "interior":
      return {
        name: "🏠 Interior",
        nameFr: "🏠 Intérieur",
        description: "Interior and furniture",
        descriptionFr: "Intérieur et mobilier"
      }
    case "industry":
      return {
        name: "🏭 Industry",
        nameFr: "🏭 Industrie",
        description: "Industry and work",
        descriptionFr: "Industrie et travail"
      }
    case "arts":
      return {
        name: "🎨 Arts",
      }
    case "agriculture":
      return {
        name: "🌾 Agriculture",
      }
    case "orchard":
      return {
        name: "🍎 Orchard",
        nameFr: "🍎 Verger",
        description: "Orchard, wood, hunting, fishing",
        descriptionFr: "Verger, bois, chasse, pêche"
      }
    case "gestures":
      return {
        name: "🤗 Gestures",
        nameFr: "🤗 Gestes",
        description: "Gestures and movements",
        descriptionFr: "Gestes et mouvements"
      }
    case "time":
      return {
        name: "⏰ Time",
        nameFr: "⏰ Époque",
        description: "Époque, temps, saisons",
        descriptionFr: "Époque, temps, saisons"
      }
    case "clothing":
      return {
        name: "👗 Clothing",
        nameFr: "👗 Vêtements",
        description: "Clothing, toilet, ornaments",
        descriptionFr: "Vêtements, toilette, parures"
      }
    case "sports":
      return {
        name: "⚽ Sports",
        nameFr: "⚽ Sports",
        description: "Sports and games",
        descriptionFr: "Sports et jeux"
      }
    case "house":
      return {
        name: "🏡 House",
        nameFr: "🏡 Maison",
        description: "House, building",
        descriptionFr: "Maison, bâtiment"
      }
    case "travels":
      return {
        name: "✈️ Travels",
        nameFr: "✈️ Voyages",
      }
    case "animals":
      return {
        name: "🐶 Animals",
        nameFr: "🐶 Animaux",
      }
    case "city":
      return {
        name: "🏙️ City",
        nameFr: "🏙️ Ville",
        description: "City, village, universe, dimensions",
        descriptionFr: "Ville, village, univers, dimensions"
      }
    case "water":
      return {
        name: "🌊 Water",
        nameFr: "🌊 Eaux",
        description: "Water, minerals, plants",
        descriptionFr: "Eaux, minéraux, végétaux"
      }
    case "commerce":
      return {
        name: "💼 Commerce",
      }
    case "communication":
      return {
        name: "📞 Communication",
      }
    case "emotions":
      return {
        name: "😊 Emotions",
        nameFr: "😊 Joies",
        description: "Joys and sorrows",
        descriptionFr: "Joies et peines"
      }
    case "government":
      return {
        name: "🏛️ Government",
        nameFr: "🏛️ Gouvernement",
        description: "Government and justice",
        descriptionFr: "Gouvernement et justice"
      }
    case "army":
      return {
        name: "🎖️ Army",
        nameFr: "🎖️ Armée",
      }
    case "human-life":
      return {
        name: "👪 Human Life",
        nameFr: "👪 Vie Humaine",
        description: "Human life, diseases, hygiene",
        descriptionFr: "Vie humaine, maladies, hygiène"
      };
    default:
      return {
        name: "📚 Unknown",
        nameFr: "📚 Inconnu"
      }
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

export const getWinsCount = (parties: WordleParty[]): number =>
  (parties ?? []).filter((party) => party.endStatus === "win").length;

export const getLosesCount = (parties: WordleParty[]): number =>
  (parties ?? []).filter((party) => party.endStatus === "lose").length;

export const getPlayedCount = (parties: WordleParty[]): number =>
  (parties ?? []).length;