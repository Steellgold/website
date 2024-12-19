export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export type GameStatus = "BALANCE_START" | "BETTING" | "PLAYING" | "DEALER_TURN" | "GAME_OVER";

export type ChipValue = 1 | 2 | 5 | 10 | 25 | 100 | 500 | 1000;

export type Card = {
  suit: Suit;
  rank: Rank;

  isReloadCard?: boolean;

  isStacked?: boolean;
  isStackedLast?: number;

  owner?: "DEALER" | "PLAYER";

  isHidden?: boolean;
}