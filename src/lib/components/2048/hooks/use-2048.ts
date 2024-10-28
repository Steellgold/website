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
  for (let i = 0; i < count; i++) {
    const emptyTiles = board.reduce((acc: number[], curr, index) => {
      if (curr === 0) acc.push(index);
      return acc;
    }, []);
    if (emptyTiles.length > 0) {
      const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      board[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    }
  }
};

export const use2048 = create<GameState>()(
  persist(
    (set, get) => ({
      board: initialBoard(4),
      score: 0,
      bestScore: 0,
      gridSize: 4,
      gameOver: false,
      startedTime: null,
      history: [],

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
        const { board, gridSize, score } = get();
        if (board.every(tile => tile !== 0)) {
          set({ gameOver: true });
          return;
        }

        let newBoard: number[] = [...board];
        switch (direction) {
          case "up":
            newBoard = handleUpMove(newBoard, gridSize);
            break;
          case "down":
            newBoard = handleDownMove(newBoard, gridSize);
            break;
          case "left":
            newBoard = handleLeftMove(newBoard, gridSize);
            break;
          case "right":
            newBoard = handleRightMove(newBoard, gridSize);
            break;
          default:
            break;
        }

        const newScore = newBoard.reduce((acc, tile) => acc + tile, 0);
        set((state) => ({
          board: newBoard,
          score: newScore,
          bestScore: Math.max(newScore, state.bestScore),
        }));
      },

      resetGame: () => {
        const { board, score, startedTime } = get();
        const endDate = dayJS();
        const tilesCount = board.reduce((acc: Record<number, number>, tile) => {
          if (tile) acc[tile] = (acc[tile] || 0) + 1;
          return acc;
        }, {});
        
        set((state) => ({
          history: [
            ...state.history,
            { tiles: tilesCount, finalScore: score, startDate: startedTime || dayJS(), endDate },
          ],
          board: initialBoard(state.gridSize),
          score: 0,
          gameOver: false,
          startedTime: dayJS(),
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

const handleRightMove = (currentBoard: number[], gridSize: number): number[] => {
  let moved = false
  for (let i = 0; i < currentBoard.length; i += gridSize) {
    for (let j = i + gridSize - 2; j >= i; j--) {
      if (currentBoard[j] !== 0) {
        let col = j
        while (col < i + gridSize - 1 && currentBoard[col + 1] === 0) {
          currentBoard[col + 1] = currentBoard[col]
          currentBoard[col] = 0
          col++
          moved = true
        }
        if (col < i + gridSize - 1 && currentBoard[col + 1] === currentBoard[col]) {
          currentBoard[col + 1] *= 2
          currentBoard[col] = 0
          moved = true
        }
      }
    }
  }

  if (moved) addNewTile(currentBoard)
  return currentBoard;
}

const handleLeftMove = (currentBoard: number[], gridSize: number): number[] => {
  let moved = false
  for (let i = 0; i < currentBoard.length; i += gridSize) {
    for (let j = i + 1; j < i + gridSize; j++) {
      if (currentBoard[j] !== 0) {
        let col = j
        while (col > i && currentBoard[col - 1] === 0) {
          currentBoard[col - 1] = currentBoard[col]
          currentBoard[col] = 0
          col--
          moved = true
        }
        if (col > i && currentBoard[col - 1] === currentBoard[col]) {
          currentBoard[col - 1] *= 2
          currentBoard[col] = 0
          moved = true
        }
      }
    }
  }

  if (moved) addNewTile(currentBoard)
  return currentBoard;
}

const handleDownMove = (currentBoard: number[], gridSize: number): number[] => {
  let moved = false
  for (let i = 0; i < gridSize; i++) {
    for (let j = gridSize * (gridSize - 1) + i; j >= i; j -= gridSize) {
      if (currentBoard[j] !== 0) {
        let row = j
        while (row < gridSize * (gridSize - 1) && currentBoard[row + gridSize] === 0) {
          currentBoard[row + gridSize] = currentBoard[row]
          currentBoard[row] = 0
          row += gridSize
          moved = true
        }
        if (row < gridSize * (gridSize - 1) && currentBoard[row + gridSize] === currentBoard[row]) {
          currentBoard[row + gridSize] *= 2
          currentBoard[row] = 0
          moved = true
        }
      }
    }
  }

  if (moved) addNewTile(currentBoard)
  return currentBoard;
}

const handleUpMove = (currentBoard: number[], gridSize: number): number[] => {
  let moved = false
  for (let i = 0; i < gridSize; i++) {
    for (let j = i + gridSize; j < gridSize * gridSize; j += gridSize) {
      if (currentBoard[j] !== 0) {
        let row = j
        while (row > gridSize && currentBoard[row - gridSize] === 0) {
          currentBoard[row - gridSize] = currentBoard[row]
          currentBoard[row] = 0
          row -= gridSize
          moved = true
        }
        if (row > gridSize && currentBoard[row - gridSize] === currentBoard[row]) {
          currentBoard[row - gridSize] *= 2
          currentBoard[row] = 0
          moved = true
        }
      }
    }
  }

  if (moved) addNewTile(currentBoard)
  return currentBoard;
}