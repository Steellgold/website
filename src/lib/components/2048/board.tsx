"use client";

import { ReactElement, useEffect, useState } from "react";
import { use2048 } from "./hooks/use-2048";
import { cn } from "@/lib/utils";
import { ClientOnly } from "../client-only";
import useTouchScreenSwipe from "@/lib/hooks/use-touch-screen-wipe";
import { E2048_Tile } from "./tile";

const CaseSizeStyle = cn(
  "w-14 h-14",
  "sm:w-20 sm:h-20",
  "md:w-24 md:h-24"
);

export const E2048_Board = (): ReactElement => {
  const { board, gridSize, handleMove } = use2048();
  const [hoveredTileValue, setHoveredTileValue] = useState<number | null>(null);
  
  const handleMouseEnterTile = (value: number) => value !== 0 && setHoveredTileValue(value);
  const handleMouseLeaveTile = () => setHoveredTileValue(null);

  const value = useTouchScreenSwipe();

  useEffect(() => {
    if (value.direction) {
      switch (value.direction) {
        case "up":
          handleMove("up")
          break
        case "down":
          handleMove("down")
          break
        case "left":
          handleMove("left")
          break
        case "right":
          handleMove("right")
          break;
        default:
          break
      }

      console.log(value.direction)
    }
  }, [value, handleMove])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          console.log("up")
          handleMove("up");
          break;
        case "ArrowDown":
          handleMove("down");
          break;
        case "ArrowLeft":
          handleMove("left");
          break;
        case "ArrowRight":
          handleMove("right");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleMove]);

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
              "flex items-center justify-center text-2xl font-bold rounded-xl transition-all duration-100"
            )}>
              <span className="hidden">0</span>
            </div>
          ))}
        </>
      )}>
        {board.map((tile, index) => (
          <E2048_Tile
            key={index}
            isHovered={hoveredTileValue !== null && tile !== hoveredTileValue}
            number={tile}
            onMouseEnter={() => handleMouseEnterTile(tile)}
            onMouseLeave={handleMouseLeaveTile}
          />
        ))}
      </ClientOnly>
    </div>
  )
};