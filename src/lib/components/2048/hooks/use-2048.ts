import { dayJS } from "@/lib/utils/dayjs/day-js";
import dayjs, { Dayjs } from "dayjs";
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

const addNewTile = (board: number[], count: number = 1) => {
  const emptyTiles = board.reduce((acc, tile, index) => {
    if (tile === 0) acc.push(index);
    return acc;
  }, [] as number[]);

  for (let i = 0; i < count; i++) {
    if (emptyTiles.length > 0) {
      const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[randomIndex] = Math.random() < 0.9 ? 2 : 4;
      emptyTiles.splice(emptyTiles.indexOf(randomIndex), 1);
    }
  }
};

const moveBoard = (board: number[], direction: "up" | "down" | "left" | "right"): [number[], number] => {
  const size = Math.sqrt(board.length);
  let score = 0;
  let newBoard = [...board];

  const moveInDirection = (row: number[]) => {
    let newRow = row.filter(tile => tile !== 0);
    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2;
        score += newRow[i];
        newRow.splice(i + 1, 1);
      }
    }
    while (newRow.length < size) {
      newRow.push(0);
    }
    return newRow;
  };

  if (direction === "left" || direction === "right") {
    for (let i = 0; i < size; i++) {
      let row = newBoard.slice(i * size, (i + 1) * size);
      if (direction === "right") row.reverse();
      row = moveInDirection(row);
      if (direction === "right") row.reverse();
      newBoard.splice(i * size, size, ...row);
    }
  } else {
    for (let i = 0; i < size; i++) {
      let column = [];
      for (let j = 0; j < size; j++) {
        column.push(newBoard[j * size + i]);
      }
      if (direction === "down") column.reverse();
      column = moveInDirection(column);
      if (direction === "down") column.reverse();
      for (let j = 0; j < size; j++) {
        newBoard[j * size + i] = column[j];
      }
    }
  }

  return [newBoard, score];
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
            startedTime: dayjs(),
            tiles: { 2: 2 },
          });
        }
      },

      handleMove: (direction: "up" | "down" | "left" | "right") => {
        const { board, score: currentScore } = get();
        const [newBoard, moveScore] = moveBoard(board, direction);

        if (JSON.stringify(board) !== JSON.stringify(newBoard)) {
          addNewTile(newBoard);
          const newScore = currentScore + moveScore;
          const newTiles = newBoard.reduce((acc, tile) => {
            if (tile !== 0) {
              acc[tile] = (acc[tile] || 0) + 1;
            }
            return acc;
          }, {} as Record<number, number>);

          set((state) => ({
            board: newBoard,
            score: newScore,
            bestScore: Math.max(newScore, state.bestScore),
            gameOver: !canMove(newBoard),
            tiles: newTiles,
          }));
        }
      },

      resetGame: () => {
        const { board, score, startedTime, gridSize } = get();
        const endDate = dayjs();
        
        set((state) => ({
          history: [
            ...state.history,
            { finalScore: score, startDate: startedTime || dayjs(), endDate, tiles: state.tiles },
          ],
          board: initialBoard(gridSize),
          score: 0,
          gameOver: false,
          startedTime: dayjs(),
          tiles: { 2: 2 },
        }));
      },

      getBestScore: () => {
        const { history, bestScore } = get();
        return Math.max(
          bestScore,
          history.reduce((max, game) => Math.max(max, game.finalScore), 0)
        );
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