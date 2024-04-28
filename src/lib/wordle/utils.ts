import { LetterStatus, Line } from "../types/wordle.type";

type ValidPosition = {
  letter: string;
  status: LetterStatus;
};

export const isValidWord = (letterArray: Line[], targetWord: string, lineIndexToCheck: number): ValidPosition[] => {
  const word = letterArray[lineIndexToCheck].map((letter) => letter.letter.toLowerCase()).join("");
  const wordDecomposed = word.split("");
  const targetWordDecomposed = targetWord.split("");

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
      if (targetLetterCounts[letter] > 0) {
        positions[index].status = "misplaced";
        targetLetterCounts[letter]--;
      } else {
        positions[index].status = "not-present";
      }
    }
  });

  return positions;
}

export const joker = (letterArray: Line[], targetWord: string, lineIndexToCheck: number): Line => {
  const currentLine = letterArray[lineIndexToCheck];
  const lettersUsed = new Set<string>();
  let hintLetter: string | null = null;

  letterArray.forEach((line) => {
    line.forEach((entry) => {
      if (entry.status === 'well-placed') {
        lettersUsed.add(entry.letter.toLowerCase());
      }
    });
  });

  const targetWordDecomposed = targetWord.toLowerCase().split('');
  for (const letter of targetWordDecomposed) {
    if (!lettersUsed.has(letter)) {
      hintLetter = letter;
      break;
    }
  }

  if (!hintLetter) {
    return currentLine;
  }

  const hintLetterIndex = targetWordDecomposed.indexOf(hintLetter);
  const newLine = currentLine.map((entry, index) => {
    if (index === hintLetterIndex) {
      return { letter: hintLetter, status: 'hint' };
    }
    return entry;
  });

  return newLine as Line;
}

export const containsLetter = (letterArray: Line[], letter: string): boolean => {
  return letterArray.some((line) => line.some((data) => data.letter === letter));
}

export const normalizeText = (word: string): string => {
  return word
      .replace(/é/g, "e")
      .replace(/è/g, "e")
      .replace(/ê/g, "e")
      .replace(/ë/g, "e")
      .replace(/à/g, "a")
      .replace(/â/g, "a")
      .replace(/ä/g, "a")
      .replace(/ç/g, "c")
      .replace(/î/g, "i")
      .replace(/ï/g, "i")
      .replace(/ô/g, "o")
      .replace(/ö/g, "o")
      .replace(/ù/g, "u")
      .replace(/û/g, "u")
      .replace(/ü/g, "u")
      .replace(/ÿ/g, "y")
      .replace(/ñ/g, "n")
      .replace(/[^a-zA-Z0-9]/g, '');
}

export const diffToNum = (dif: string) => {
  switch (dif) {
    case "five": return 5;
    case "six": return 6;
    case "seven": return 7;
    case "eight": return 8;
    case "nine": return 9;
    case "ten": return 10;
    default: return 5;
  }
}