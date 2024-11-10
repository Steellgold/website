import { create } from "zustand";
import { persist } from "zustand/middleware";
import dayjs, { Dayjs } from "dayjs";

const MAX_UNDOS = 5;

type GameState = {
  board: number[];
  score: number;
  bestScore: number;
  gridSize: number;
  startedTime: Dayjs | null;
  gameOver: boolean;
  history: GameHistory[];
  tiles: Record<number, number>;
  moveHistory: { board: number[]; score: number }[];
  undosAvailable: number;
  tilesCreated: number;
  lastMoveTime: number;

  initializeBoard: (size?: number, force?: boolean) => void;
  handleMove: (direction: "up" | "down" | "left" | "right") => void;
  resetGame: (endType?: "restart" | "gameOver" | "win") => void;
  getBestScore: () => number;
  undoMove: () => void;
};

type GameHistory = {
  tiles: Record<number, number>;
  finalScore: number;
  startDate: Dayjs;
  endDate: Dayjs;
  tilesCreated: number;

  score: number;
  endType: "restart" | "gameOver" | "win";
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

const moveBoard = (board: number[], direction: "up" | "down" | "left" | "right"): [number[], number, boolean] => {
  const size = Math.sqrt(board.length);
  let score = 0;
  let newBoard = [...board];
  let changed = false;

  const moveAndMerge = (line: number[]) => {
    const movedLine = line.filter((cell) => cell !== 0);
    for (let i = 0; i < movedLine.length - 1; i++) {
      if (movedLine[i] === movedLine[i + 1]) {
        movedLine[i] *= 2;
        score += movedLine[i];
        movedLine.splice(i + 1, 1);
        changed = true;
      }
    }
    while (movedLine.length < size) {
      movedLine.push(0);
    }
    return movedLine;
  };

  if (direction === "left" || direction === "right") {
    for (let i = 0; i < size; i++) {
      const row = newBoard.slice(i * size, (i + 1) * size);
      const movedRow = direction === "left" ? moveAndMerge(row) : moveAndMerge(row.reverse()).reverse();
      if (JSON.stringify(row) !== JSON.stringify(movedRow)) {
        changed = true;
      }
      movedRow.forEach((cell, j) => {
        newBoard[i * size + j] = cell;
      });
    }
  } else {
    for (let i = 0; i < size; i++) {
      const column = [
        newBoard[i],
        newBoard[i + size],
        newBoard[i + size * 2],
        newBoard[i + size * 3],
      ];
      const movedColumn =
        direction === "up" ? moveAndMerge(column) : moveAndMerge(column.reverse()).reverse();
      if (JSON.stringify(column) !== JSON.stringify(movedColumn)) {
        changed = true;
      }
      movedColumn.forEach((cell, j) => {
        newBoard[i + j * size] = cell;
      });
    }
  }

  return [newBoard, score, changed];
};

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
      moveHistory: [],
      undosAvailable: 0,
      tilesCreated: 0,
      lastMoveTime: 0,

      initializeBoard: (size = 4, force = false) => {
        if (force || get().board.every(tile => tile === 0)) {
          const newBoard = initialBoard(size);
          set({
            board: newBoard,
            score: 0,
            gridSize: size,
            gameOver: false,
            startedTime: dayjs(),
            tiles: { 2: 2 },
            moveHistory: [],
            undosAvailable: 0,
            tilesCreated: 2,
            lastMoveTime: 0,
          });
        }
      },

      handleMove: (direction: "up" | "down" | "left" | "right") => {
        const { board, score: currentScore, lastMoveTime, moveHistory, undosAvailable, tilesCreated } = get();
        const now = Date.now();
        if (now - lastMoveTime < 100) return;

        const [newBoard, moveScore, changed] = moveBoard(board, direction);

        if (changed) {
          addNewTile(newBoard);
          const newScore = currentScore + moveScore;
          const newTiles = newBoard.reduce((acc, tile) => {
            if (tile !== 0) {
              acc[tile] = (acc[tile] || 0) + 1;
            }
            return acc;
          }, {} as Record<number, number>);

          const newUndosAvailable = moveScore >= 128 ? Math.min(undosAvailable + 1, MAX_UNDOS) : undosAvailable;

          set((state) => ({
            board: newBoard,
            score: newScore,
            bestScore: Math.max(newScore, state.bestScore),
            gameOver: !canMove(newBoard),
            tiles: newTiles,
            moveHistory: [...moveHistory, { board, score: currentScore }],
            undosAvailable: newUndosAvailable,
            tilesCreated: tilesCreated + 1,
            lastMoveTime: now,
          }));
        }
      },

      resetGame: (endType: "restart" | "gameOver" | "win" = "restart") => {
        const { score, startedTime, gridSize, tilesCreated } = get();
        const endDate = dayjs();
        
        set((state) => ({
          history: [
            ...state.history,
            { 
              finalScore: score, 
              startDate: startedTime || dayjs(), 
              endDate, 
              tiles: state.tiles,
              tilesCreated,
              score: state.score,
              endType: Object.keys(state.tiles).some((tile) => parseInt(tile) >= 2048) ? "win" : endType,
            },
          ],
          board: initialBoard(gridSize),
          score: 0,
          gameOver: false,
          startedTime: dayjs(),
          tiles: { 2: 2 },
          moveHistory: [],
          undosAvailable: 0,
          tilesCreated: 2,
          lastMoveTime: 0,
        }));
      },

      getBestScore: () => {
        const { history, bestScore } = get();
        return Math.max(
          bestScore,
          history.reduce((max, game) => Math.max(max, game.finalScore), 0)
        );
      },

      undoMove: () => {
        const { moveHistory, undosAvailable } = get();
        if (undosAvailable > 0 && moveHistory.length > 0) {
          const lastMove = moveHistory[moveHistory.length - 1];
          set((state) => ({
            board: lastMove.board,
            score: lastMove.score,
            moveHistory: state.moveHistory.slice(0, -1),
            undosAvailable: state.undosAvailable - 1,
            tilesCreated: state.tilesCreated - 1,
          }));
        }
      },
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
        undosAvailable: state.undosAvailable,
        tilesCreated: state.tilesCreated,
      }),
    }
  )
);