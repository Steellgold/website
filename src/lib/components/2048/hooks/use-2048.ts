import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Dayjs } from "dayjs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameState = {
  board: number[];

  score: number;
  bestScore: number;
  
  gridSize: number;
  startedTime: Dayjs | null;
  
  gameOver: boolean;
  
  history: GameHistory[];
  tiles: Record<number, number>;
  
  initializeBoard: (size?: number, force?: boolean) => void;
  handleMove: (direction: "up" | "down" | "left" | "right") => void;
  resetGame: () => void;
  getBestScore: () => number;
};

type GameHistory = {
  tiles: Record<number, number>;
  finalScore: number;
  startDate: Dayjs;
  endDate: Dayjs;
};

const initialBoard = (size: number) => {
  const board = Array(size * size).fill(0);
  addNewTile(board, 2);
  return board;
};

const addNewTile = (board: number[], count: number = 1, direction?: "up" | "down" | "left" | "right") => {
  const gridSize = Math.sqrt(board.length);
  const possiblePositions = [];
  const { tiles } = use2048.getState();

  if (!direction) {
    possiblePositions.push(...[...Array(gridSize)].map((_, i) => i)); // T
    possiblePositions.push(...[...Array(gridSize)].map((_, i) => (gridSize - 1) * gridSize + i)); // B
    possiblePositions.push(...[...Array(gridSize)].map((_, i) => i * gridSize)); // L
    possiblePositions.push(...[...Array(gridSize)].map((_, i) => i * gridSize + (gridSize - 1))); // R
  } else {
    switch (direction) {
      case "up":
        possiblePositions.push(...[...Array(gridSize)].map((_, i) => (gridSize - 1) * gridSize + i));
        break;
      case "down":
        possiblePositions.push(...[...Array(gridSize)].map((_, i) => i)); // T
        break;
      case "left":
        possiblePositions.push(...[...Array(gridSize)].map((_, i) => i * gridSize + (gridSize - 1))); // R
        break;
      case "right":
        possiblePositions.push(...[...Array(gridSize)].map((_, i) => i * gridSize)); // L
        break;
    }
  }

  const emptyTiles = possiblePositions.filter(index => board[index] === 0);

  for (let i = 0; i < count; i++) {
    if (emptyTiles.length > 0) {
      const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      const newValue = Math.random() < 0.9 ? 2 : 4;
      board[randomIndex] = newValue;

      tiles[newValue] = (tiles[newValue] || 0) + 1;
      emptyTiles.splice(emptyTiles.indexOf(randomIndex), 1);
    }
  }

  use2048.setState({ tiles });
};

const moveBoard = (board: number[], direction: "up" | "down" | "left" | "right"): number[] => {
  const size = Math.sqrt(board.length);
  let score = 0;
  let newBoard = [...board];
  const { tiles } = use2048.getState();

  const move = (index: number) => {
    let currentIndex = index;
    let targetIndex = index;
    while (targetIndex % size > 0 && newBoard[targetIndex - 1] === 0) {
      targetIndex--;
    }
    if (targetIndex !== currentIndex) {
      newBoard[targetIndex] = newBoard[currentIndex];
      newBoard[currentIndex] = 0;
      currentIndex = targetIndex;
    }
    if (targetIndex % size > 0 && newBoard[targetIndex - 1] === newBoard[targetIndex]) {
      const newValue = newBoard[targetIndex - 1] * 2;
      newBoard[targetIndex - 1] = newValue;
      score += newValue;
      newBoard[targetIndex] = 0;

      tiles[newValue] = (tiles[newValue] || 0) + 1;
    }
  };

  if (direction === "left") {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] !== 0) move(i);
    }
  } else if (direction === "right") {
    for (let i = newBoard.length - 1; i >= 0; i--) {
      if (newBoard[i] !== 0) {
        let currentIndex = i;
        let targetIndex = i;
        while (targetIndex % size < size - 1 && newBoard[targetIndex + 1] === 0) {
          targetIndex++;
        }
        if (targetIndex !== currentIndex) {
          newBoard[targetIndex] = newBoard[currentIndex];
          newBoard[currentIndex] = 0;
          currentIndex = targetIndex;
        }
        if (targetIndex % size < size - 1 && newBoard[targetIndex + 1] === newBoard[targetIndex]) {
          newBoard[targetIndex + 1] *= 2;
          score += newBoard[targetIndex + 1];
          newBoard[targetIndex] = 0;
        }
      }
    }
  } else if (direction === "up") {
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] !== 0) {
        let currentIndex = i;
        let targetIndex = i;
        while (targetIndex >= size && newBoard[targetIndex - size] === 0) {
          targetIndex -= size;
        }
        if (targetIndex !== currentIndex) {
          newBoard[targetIndex] = newBoard[currentIndex];
          newBoard[currentIndex] = 0;
          currentIndex = targetIndex;
        }
        if (targetIndex >= size && newBoard[targetIndex - size] === newBoard[targetIndex]) {
          newBoard[targetIndex - size] *= 2;
          score += newBoard[targetIndex - size];
          newBoard[targetIndex] = 0;
        }
      }
    }
  } else if (direction === "down") {
    for (let i = newBoard.length - 1; i >= 0; i--) {
      if (newBoard[i] !== 0) {
        let currentIndex = i;
        let targetIndex = i;
        while (targetIndex < newBoard.length - size && newBoard[targetIndex + size] === 0) {
          targetIndex += size;
        }
        if (targetIndex !== currentIndex) {
          newBoard[targetIndex] = newBoard[currentIndex];
          newBoard[currentIndex] = 0;
          currentIndex = targetIndex;
        }
        if (targetIndex < newBoard.length - size && newBoard[targetIndex + size] === newBoard[targetIndex]) {
          newBoard[targetIndex + size] *= 2;
          score += newBoard[targetIndex + size];
          newBoard[targetIndex] = 0;
        }
      }
    }
  }

  use2048.setState({ tiles });
  addNewTile(newBoard, 1, direction);
  return newBoard;
};

export const use2048 = create<GameState>()(
  persist(
    (set, get) => ({
      board: [],
      score: 0,
      bestScore: 0,
      gridSize: 4,
      gameOver: false,
      startedTime: null,
      history: [],
      tiles: {},

      initializeBoard: (size = 4, force = false) => {
        if (force || get().board.every(tile => tile === 0)) {
          set({
            board: initialBoard(size),
            score: 0,
            gridSize: size,
            gameOver: false,
            startedTime: dayJS(),
          });
        }
      },

      handleMove: (direction: "up" | "down" | "left" | "right") => {
        const { board } = get();

        let newBoard: number[] = [...board];
        newBoard = moveBoard(
          newBoard, direction
        );

        const newScore = newBoard.reduce((acc, tile) => acc + tile, 0);

        set((state) => ({
          board: newBoard,
          score: newScore,
          bestScore: Math.max(newScore, state.bestScore),
          gameOver: !canMove(newBoard),
        }));
      },

      resetGame: () => {
        const { board, score, startedTime } = get();
        const endDate = dayJS();
        
        set((state) => ({
          history: [
            ...state.history,
            { finalScore: score, startDate: startedTime || dayJS(), endDate, tiles: state.tiles },
          ],
          board: initialBoard(state.gridSize),
          score: 0,
          gameOver: false,
          startedTime: dayJS(),
          tiles: {},
        }));
      },

      getBestScore: () => {
        const bestGame = get().history.reduce((best, game) => 
          game.finalScore > best.finalScore ? game : best,
        { finalScore: 0 });
        return bestGame.finalScore;
      }
    }),
    {
      name: '2048-game',
      partialize: (state) => ({
        board: state.board,
        score: state.score,
        gridSize: state.gridSize,
        gameOver: state.gameOver,
        startedTime: state.startedTime,
        history: state.history,
        bestScore: state.bestScore,
      }),
    }
  )
);

const canMove = (board: number[]): boolean => {
  const size = Math.sqrt(board.length);
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) return true;
    if (
      (i % size < size - 1 && board[i] === board[i + 1]) ||
      (i < board.length - size && board[i] === board[i + size])
    ) {
      return true;
    }
  }
  return false;
};