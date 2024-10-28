"use client";

import { use2048 } from "./hooks/use-2048";
import { E2048_Tile } from "./tile";

export const E2048_GameInfo = () => {
  const { tiles } = use2048();

  const allTiles = Array.from({ length: 13 }, (_, i) => Math.pow(2, i + 1)).filter(tile => !tiles[tile]);

  return (
    <div className="ml-3 w-36 select-none">
      {Object.entries(tiles).map(([key, value]) => (
        <div key={key} className="flex flex-row items-center gap-2">
          <div className="w-8 h-8">
            <E2048_Tile
              number={parseInt(key)}
              isHovered={false}
              isInfo
            />
          </div>
          <span className="text-sm font-bold">{value}</span>
        </div>
      ))}

      {allTiles.map(tile => (
        <div key={tile} className="flex flex-row items-center gap-2 opacity-50">
          <div className="w-8 h-8">
            <E2048_Tile
              number={tile}
              isHovered={false}
              isInfo
            />
          </div>
          <span className="text-sm font-bold">0</span>
        </div>
      ))}
    </div>
  );
}