import { LetterStatus, Line } from "../types/wordle.type";

type ValidPosition = {
  letter: string;
  status: LetterStatus;
};

export const isValidWord = (letterArray: Line[], targetWord: string, lineIndexToCheck: number): ValidPosition[] => {
  const word = letterArray[lineIndexToCheck].map((letter) => letter.letter.toLowerCase()).join("");

  const wordDecomposed = word.split("");
  const targetWordDecomposed = targetWord.split("");

  if (word === targetWord) {
    return wordDecomposed.map((letter, index) => {
      if (index < targetWordDecomposed.length && letter === targetWordDecomposed[index]) {
      return { letter, status: "well-placed" };
      } else {
      return { letter, status: "unknown" };
      }
    });
  }

  let positions: ValidPosition[] = wordDecomposed.map((letter) => ({ letter, status: "unknown" }));


  let targetLetterCounts: Record<string, number> = {};

  targetWordDecomposed.forEach(letter => {
    targetLetterCounts[letter] = (targetLetterCounts[letter] || 0) + 1;
  });

  wordDecomposed.forEach((letter, index) => {
    if (letter === targetWordDecomposed[index]) {
      positions[index].status = "well-placed";
      targetLetterCounts[letter]--;
    }
  });

  wordDecomposed.forEach((letter, index) => {
    if (positions[index].status === "unknown") {
      if (targetWordDecomposed.includes(letter) && targetLetterCounts[letter] > 0) {
        positions[index].status = "misplaced";
        targetLetterCounts[letter]--;
      } else {
        positions[index].status = "not-present";
      }
    }
  });

  return positions;
}

export const containsLetter = (letterArray: Line[], letter: string): boolean => {
  return letterArray.some((line) => line.some((data) => data.letter === letter));
}