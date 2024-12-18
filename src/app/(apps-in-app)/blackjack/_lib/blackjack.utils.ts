import { Card, Rank, Suit } from "./blackjack.types";

export const createDeck = (): Card[] => {
  const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const deck: Card[] = [];
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ rank, suit });
    });
  });

  return shuffle(deck);
}

const shuffle = (deck: Card[]): Card[] => {
  let currentIndex = deck.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

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