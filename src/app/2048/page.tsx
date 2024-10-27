"use client"

import { getTileColor } from "@/lib/2048.utlils";
import { use2048 } from "@/lib/components/2048/hooks/use-2048";
import { E2048_StartButton } from "@/lib/components/2048/start-button";
import { E2048_StatsCard } from "@/lib/components/2048/stat-card";
import { ClientOnly } from "@/lib/components/client-only";
import { ThemeSwitcher } from "@/lib/components/theme-switcher";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { History, Undo } from "lucide-react";
import { ReactElement, useState } from "react";

const Page = (): ReactElement => {
  const {
    bestScore, board, gameOver, gridSize, score, startedTime,
    initializeBoard,
  } = use2048();

  const [hoveredTileValue, setHoveredTileValue] = useState<number | null>(null);

  const handleMouseEnterTile = (value: number) => value !== 0 && setHoveredTileValue(value);
  const handleMouseLeaveTile = () => setHoveredTileValue(null);

  return (
    <div className="flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ThemeSwitcher />
      <E2048_StatsCard score={score} bestScore={bestScore} startedTime={dayJS(startedTime)} />

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative">
          <div className={cn(
            "p-3 rounded-2xl bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none transition-colors duration-100", {
              // "border-2 border-[#000001]/30 dark:border-gray-600": gameHovered,
            }
          )}>
            <div className={cn("grid gap-2.5 transition-all duration-100")} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
              <ClientOnly fallback={
                <>
                  {(new Array(16)).fill(0).map((_, index) => (
                    <div key={index} className={cn("w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl")}>
                      <span className={cn("text-3xl font-bold hidden")}>0</span>
                    </div>
                  ))}
                </>
              }>
                {board.map((tile, index) => (
                  <div
                    key={index}
                    className={
                      cn(
                        "w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom",
                        getTileColor(tile), {
                          "opacity-20": hoveredTileValue !== null && tile !== hoveredTileValue
                        }
                      )
                    }
                    onMouseEnter={() => handleMouseEnterTile(tile)}
                    onMouseLeave={handleMouseLeaveTile}
                  >
                    <span className={cn("text-3xl font-bold", { "hidden": tile === 0 })}>{tile}</span>
                  </div>
                ))}
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 transition-opacity duration-100", {
          // "opacity-5": gameHovered
        }
      )}>
        <div className="flex flex-row items-center justify-center gap-2 bg-[#e4e0d1] dark:bg-gray-800 p-2 rounded-xl shadow-lg">
          <E2048_StartButton
            initializeBoard={() => initializeBoard(4, true)}
            status={
              gameOver
                ? "gameOver"
                : board.some((tile) => tile !== 0)
                ? "started"
                : "notStarted"
            }
          />


          <Separator orientation="vertical" className="bg-white/10 h-8" />

          <Button size={"icon"} className="p-2">
            <History />
          </Button>

          <Button size={"icon"} className="p-2">
            <Undo />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;