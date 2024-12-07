export type ClashRoyalAPIResponse = {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role: string;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  clan: {
      tag: string;
      name: string;
      badgeId: number;
  };
  arena: {
      id: number;
      name: string;
  };
  leagueStatistics: {
      currentSeason?: {
          trophies: number;
      };
      previousSeason?: {
          id: string;
          trophies: number;
          bestTrophies: number;
      };
      bestSeason?: {
          id: string;
          trophies: number;
      };
  };
  badges: Array<{
      name: string;
      level: number;
      maxLevel: number;
      progress: number;
      target: number;
      iconUrls: {
          large: string;
      };
  }>;
  achievements: Array<{
      name: string;
      stars: number;
      value: number;
      target: number;
      info: string;
      completionInfo?: string | null;
  }>;
  cards: Array<{
      name: string;
      id: number;
      level: number;
      starLevel?: number;
      maxLevel: number;
      rarity: string;
      count: number;
      elixirCost: number;
      iconUrls: {
          medium: string;
          evolutionMedium?: string;
      };
  }>;
  supportCards: Array<{
      name: string;
      id: number;
      level: number;
      maxLevel: number;
      rarity: string;
      count: number;
      iconUrls: {
          medium: string;
      };
  }>;
  currentDeck: Array<{
      name: string;
      id: number;
      level: number;
      starLevel?: number;
      evolutionLevel?: number;
      maxLevel: number;
      maxEvolutionLevel?: number;
      rarity: string;
      count: number;
      elixirCost: number;
      iconUrls: {
          medium: string;
          evolutionMedium?: string;
      };
  }>;
  currentDeckSupportCards: Array<{
      name: string;
      id: number;
      level: number;
      maxLevel: number;
      rarity: string;
      count: number;
      iconUrls: {
          medium: string;
      };
  }>;
  currentFavouriteCard: {
      name: string;
      id: number;
      maxLevel: number;
      maxEvolutionLevel?: number;
      elixirCost: number;
      iconUrls: {
          medium: string;
          evolutionMedium?: string;
      };
      rarity: string;
  };
  starPoints: number;
  expPoints: number;
  legacyTrophyRoadHighScore: number;
  currentPathOfLegendSeasonResult?: {
      leagueNumber: number;
      trophies: number;
      rank?: number | null;
  };
  lastPathOfLegendSeasonResult?: {
      leagueNumber: number;
      trophies: number;
      rank?: number | null;
  };
  bestPathOfLegendSeasonResult?: {
      leagueNumber: number;
      trophies: number;
      rank?: number | null;
  };
  progress: {
      [key: string]: {
          arena: {
              id: number;
              name: string;
          };
          trophies: number;
          bestTrophies: number;
      };
  };
  totalExpPoints: number;
};