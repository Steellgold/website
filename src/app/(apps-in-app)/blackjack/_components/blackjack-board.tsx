"use client";

import { cn } from "@/lib/utils";
import { ReactElement } from "react";
import { BlackjackCardsStack } from "./blackjack-card";

export const BlackjackBoard = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "h-screen w-screen bg-green-900 relative overflow-hidden",
          "border-4 border-green-800",
          "rounded-b-[200px]",
          "h-[calc(60vh-4rem)] w-[calc(100vw-4rem)]",
        )}
      >
        <div className="absolute inset-0 [background-image:radial-gradient(circle,_rgba(255,255,255,0.1)_100%,_transparent_0%)] opacity-10" />
        {/* CROUPIER */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <BlackjackCardsStack cards={[]} />
        </div>

        {/* PLAYER */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
          <BlackjackCardsStack cards={[]} />

          <div className="text-white">
            {/* TEXT */}
          </div>
        </div>
      </div>
    </div>
  )
}