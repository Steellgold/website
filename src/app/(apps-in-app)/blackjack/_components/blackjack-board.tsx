import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { EmptyBlackjackCard } from "./blackjack-card";

export const BlackjackBoard = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <div className={cn(
        "relative",
        "bg-[#1c4719] border-[#381f09] border-[10px]",
        "rounded-b-[250px]",
        "h-[calc(100vh-4rem)] w-[calc(100vw-4rem)]",
      )}>
        {/* DECK in the bottom */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <EmptyBlackjackCard />
        </div>
      </div>
    </div>
  )
}