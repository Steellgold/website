"use client";

import { ReactElement, useEffect } from "react";
import { BlackjackCardsStack } from "./blackjack-card";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackBalance, BlackjackStarting } from "./blackjack-balance";
import { BlackjackBet, BlackjackBets } from "./blackjack-bet";

export const BlackjackBoard = (): ReactElement => {
  const { gameStatus, bet } = useBlackjack();

  if (gameStatus === "BALANCE_START") {
    return <BlackjackStarting />
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-green-900 relative">
      <div className="z-[2]">
        <div className="absolute top-5 right-5">
          <BlackjackBalance />
        </div>
        
        {/* DEALER */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap- bg-white bg-opacity-10 p-3 rounded-md text-white border border-white border-opacity-203">
          <BlackjackCardsStack cards={[
            { rank: "10", suit: "Hearts", isHidden: false, owner: "DEALER" },
            { rank: "A", suit: "Spades", isHidden: true, owner: "DEALER" },
          ]} />
        </div>

        {/* PLAYER */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row items-center gap-3 bg-white bg-opacity-10 p-3 rounded-md text-white border border-white border-opacity-20">
          <BlackjackCardsStack cards={[
            { rank: "10", suit: "Hearts", isHidden: false },
            { rank: "A", suit: "Spades", isHidden: false },
          ]} />
        </div>

        {/* BUTTONS */}
        <BlackjackBet />

        {/* BETS */}
        <div className="absolute bottom-5 right-5 bg-white bg-opacity-10 p-3 rounded-md text-white border border-white border-opacity-20">
          <BlackjackBets />
        </div>
      </div>

      <div className="absolute inset-0 [background-image:radial-gradient(circle,_rgba(255,255,255,0.1)_100%,_transparent_0%)] opacity-10 z-[1]"></div>
    </div>
  )
}