import { cn } from "@/lib/utils";
import { Component } from "../utils/component";
import { getTileColor } from "@/lib/2048.utlils";

type E2048_TileProps = {
  number: number;
  isHovered: boolean;
  isInfo?: boolean;

  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const E2048_Tile: Component<E2048_TileProps> = ({
  number, isHovered, isInfo = false,
  onMouseEnter, onMouseLeave
}) => {
  return (
    <div
      className={
        cn("flex items-center justify-center text-2xl font-bold rounded-sm transition-all duration-100 select-none",
          getTileColor(number), {
            "opacity-20": isHovered,
            "w-14 h-14": !isInfo,
            "sm:w-20 sm:h-20": !isInfo,
            "md:w-24 md:h-24": !isInfo,
            "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7": isInfo
          }
        )
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={cn(
        "text-3xl font-bold", {
          "hidden": number === 0,
          "text-sm": isInfo
        })}
      >
          {number}
      </span>
    </div>
  );
};