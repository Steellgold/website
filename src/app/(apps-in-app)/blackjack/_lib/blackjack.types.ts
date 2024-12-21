export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export type GameStatus =
  "BALANCE_START" |
  "BETTING" | "PLAYING" |
  "DEALER_TURN" |
  "DEALER_WIN" | "PLAYER_WIN" |
  "DEALER_BUST"| "PLAYER_BUST" |
  "DEALER_BLACKJACK" | "PLAYER_BLACKJACK" |
  "DRAW" | "DOUBLE_BUST";

export type ChipValue = 1 | 2 | 5 | 10 | 25 | 100 | 500 | 1000;

export const SEC_TO_BET = 3;

export type Card = {
  suit: Suit;
  rank: Rank;

  isReloadCard?: boolean;

  isStacked?: boolean;
  isStackedLast?: number;

  owner?: "DEALER" | "PLAYER";

  isHidden?: boolean;
}