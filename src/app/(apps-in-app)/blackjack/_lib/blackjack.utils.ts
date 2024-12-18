import { Card } from "./blackjack.types";

export const createDeck = (): Card[] => {
  // TODO: Create a deck of 52 cards
  return [];
}

function shuffle(deck: Card[]): Card[] {
  // TODO: Shuffle the deck
  return deck;
}

export const handValue = (cards: Card[]): number => {
  const values = cards.map((card) => card.rank);
  let sum = values.reduce((acc, value) => {
    if (value === "A") return acc + 11;
    if (["J", "Q", "K"].includes(value)) return acc + 10;
    return acc + Number(value);
  }, 0);

  let aceCount = values.filter((value) => value === "A").length;
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount--;
  }

  return sum;
}