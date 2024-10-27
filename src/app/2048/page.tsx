"use client"

import { getTileColor } from "@/lib/2048.utlils";
import { E2048_StartButton } from "@/lib/components/2048/start-button";
import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { Button } from "@/lib/components/ui/button";
import useHover from "@/lib/hooks/use-hover";
import { cn } from "@/lib/utils";
import { ReactElement, useEffect, useRef, useState } from "react";

type Settings = {
  gridSize: number;
  score: number;
  gameOver: boolean;
  startedTime: number;
};

const ScoreCaseStyle = cn(
  "bg-[#e4e0d1]/50 dark:bg-gray-800/50 p-1",
  "border-[3px] border-[#e4e0d1] dark:border-gray-800 rounded-2xl",
  "flex flex-col items-center",
  "w-28 h-14 rounded-2xl"
);

const Page = (): ReactElement => {
  const [board, setBoard] = useState<number[]>(Array(16).fill(0));

  const gameRef = useRef(null);
  const gameHovered = useHover(gameRef);

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

  const initializeBoard = (size: number = 4) => {
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

  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeSwitcher />
      
      <div className={cn(
        "fixed top-0 left-0 right-0 flex justify-center items-center p-4 flex flex-row gap-2 transition-opacity duration-100", {
          "opacity-5": gameHovered
        }
      )}>
        <div className={ScoreCaseStyle}>
          <span className="text-sm font-extrabold opacity-65">SCORE</span>
          <span className="text-xl font-bold -mt-1">{settings.score}</span>
        </div>

        <div className={ScoreCaseStyle}>
          <span className="text-sm font-extrabold opacity-65">BEST</span>
          <span className="text-xl font-bold -mt-1">{settings.score}</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={cn(
            "p-3 rounded-2xl bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none transition-colors duration-100", {
              "border-2 border-[#000001]/30 dark:border-gray-600": gameHovered,
            }
          )} ref={gameRef}>
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

          {/* <div className="mt-4 flex flex-col justify-center items-center bg-[#e4e0d1] dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <E2048_StartButton
              initializeBoard={() => initializeBoard()}
              status={
                settings.gameOver
                  ? "gameOver"
                  : board.filter((tile) => tile === 0).length === 0
                  ? "notStarted"
                  : "started"
              }
            />
          </div>   */}
        </div>
      </div>

      {/* Start */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 transition-opacity duration-100", {
          "opacity-5": gameHovered
        }
      )}>
        <div className="flex flex-col items-center justify-center bg-[#e4e0d1] dark:bg-gray-800 p-2 rounded-xl shadow-lg">
          <E2048_StartButton
            initializeBoard={() => initializeBoard()}
            status={settings.gameOver ? "gameOver" : board.map((tile) => tile === 0).length === 0 ? "notStarted" : "started"}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;