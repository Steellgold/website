"use client";

import { ReactElement, useState } from "react";
import { use2048 } from "./hooks/use-2048";
import { cn } from "@/lib/utils";
import { getTileColor } from "@/lib/2048.utlils";
import { ClientOnly } from "../client-only";

const CaseSizeStyle = cn(
  "w-14 h-14",
  "sm:w-20 sm:h-20",
  "md:w-24 md:h-24"
);

export const E2048_Board = (): ReactElement => {
  const { board, gridSize } = use2048();
  const [hoveredTileValue, setHoveredTileValue] = useState<number | null>(null);

  const handleMouseEnterTile = (value: number) => value !== 0 && setHoveredTileValue(value);
  const handleMouseLeaveTile = () => setHoveredTileValue(null);

  return (
    <div className={cn(
      "gap-1",
      "sm:gap-2",
      "md:gap-2.5",
      "grid transition-all duration-100"
    )} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
      <ClientOnly fallback={(
        <>
          {(new Array(16)).fill(0).map((_, index) => (
            <div key={index} className={cn(
              CaseSizeStyle,
              "flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom"
            )}>
              <span className="text-3xl font-bold hidden">0</span>
            </div>
          ))}
        </>
      )}>
        {board.map((tile, index) => (
          <div
            key={index}
            className={
              cn(
                CaseSizeStyle,
                "flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100 cursor-zoom",
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
  )
};