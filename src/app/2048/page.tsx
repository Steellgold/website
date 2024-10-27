"use client"

import { getTileColor } from "@/lib/2048.utlils";
import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { Button } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactElement, useEffect, useState } from "react";

type Settings = {
  gridSize: number;
  score: number;
  gameOver: boolean;
  startedTime: number;
};

const Page = (): ReactElement => {
  const [board, setBoard] = useState<number[]>(Array(16).fill(0));

  const [settings, setSettings] = useState<Settings>({
    gridSize: 4,
    score: 0,
    gameOver: false,
    startedTime: Date.now(),
  });

  const addNewTile = (currentBoard: number[], count: number = 1) => {
    for (let i = 0; i < count; i++) {
      const emptyTiles = currentBoard.reduce((acc: number[], curr, index) => {
        if (curr === 0) acc.push(index)
        return acc
      }, [])

      if (emptyTiles.length > 0) {
        const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
        currentBoard[randomIndex] = Math.random() < 0.9 ? 2 : 4
      }
    }
  }

  const initializeBoard = (size: number = settings.gridSize) => {
    const cellCount = size * size
    const newBoard = Array(cellCount).fill(0)
    setBoard(newBoard)
    addNewTile(newBoard, 2)
    
    setSettings({
      gridSize: size,
      score: 0,
      gameOver: false,
      startedTime: Date.now()
    })
  }

  const startNewGame = () => {
    initializeBoard(4)
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeSwitcher />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={`p-3 rounded-2xl bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none`}>
            <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${settings.gridSize}, minmax(0, 1fr))` }}>
              {board.map((tile, index) => (
                <div
                  key={index}
                  className={
                    cn(
                      "w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom",
                      getTileColor(tile)
                    )
                  }
                >
                  <span className={cn("text-3xl font-bold", { "hidden": tile === 0 })}>{tile}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <Button onClick={startNewGame}>
              {settings.gameOver ? "Rejouer" : board.every(tile => tile === 0) ? "Commencer" : "Nouvelle partie"}
            </Button>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Page;