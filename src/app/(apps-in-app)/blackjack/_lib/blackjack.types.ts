export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export type Card = {
  suit: Suit;
  rank: Rank;

  isStacked?: boolean;
  isStackedLast?: number;

  owner?: "DEALER" | "PLAYER";

  isHidden: boolean;
}