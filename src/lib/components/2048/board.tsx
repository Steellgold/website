"use client";

import { ReactElement, useState } from "react";
import { use2048 } from "./hooks/use-2048";
import { cn } from "@/lib/utils";
import { getTileColor } from "@/lib/2048.utlils";

export const E2048_Board = (): ReactElement => {
  const { board, gridSize } = use2048();
  const [hoveredTileValue, setHoveredTileValue] = useState<number | null>(null);

  const handleMouseEnterTile = (value: number) => value !== 0 && setHoveredTileValue(value);
  const handleMouseLeaveTile = () => setHoveredTileValue(null);

  return (
    <div className={cn("grid gap-2.5 transition-all duration-100")} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
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
    </div>
  )
};

export const E2048_SkeletonBard = (): ReactElement => {
  const { gridSize } = use2048();

  return (
    <div className={cn("grid gap-2.5 transition-all duration-100")} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
      <div className="grid gap-2.5 transition-all duration-100" style={{ gridTemplateColumns: `repeat(4, minmax(0, 1fr))` }}>
        {(new Array(16)).fill(0).map((_, index) => (
          <div key={index} className="w-24 h-24 flex items-center justify-center text-2xl font-bold rounded-xl">
            <span className="text-3xl font-bold hidden">0</span>
          </div>
        ))}
      </div>
    </div>
  );
};