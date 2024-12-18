"use client";

import { ReactElement } from "react";
import { BlackjackCardsStack } from "./blackjack-card";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackBalance, BlackjackStarting } from "./blackjack-balance";
import { BlackjackBet, BlackjackBets } from "./blackjack-bet";
import { handValue } from "../_lib/blackjack.utils";
import { BlackjackCard } from "./ui/blackjack-card";
import { BlackjackChoice } from "./blackjack-choice";

export const BlackjackBoard = (): ReactElement => {
  const { gameStatus, bet } = useBlackjack();

  if (gameStatus === "BALANCE_START") {
    return <BlackjackStarting />
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-green-900 dark:bg-green-950 relative">
      <div className="z-[2]">
        <div className="absolute top-5 right-5">
          <BlackjackBalance />
        </div>
        
        {/* DEALER */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-1.5">
          <BlackjackCard>
            <BlackjackCardsStack cards={[
              { rank: "10", suit: "Hearts", isHidden: false, owner: "DEALER" },
              { rank: "A", suit: "Spades", isHidden: true, owner: "DEALER" },
            ]} />
          </BlackjackCard>

          <BlackjackCard className="flex justify-center py-2">
            Total: {handValue([
              { rank: "10", suit: "Hearts", isHidden: false, owner: "DEALER" }
            ])}
          </BlackjackCard>
        </div>

        {/* PLAYER */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-1.5">
          <BlackjackCard className="flex justify-center py-2">
            Total: {handValue([
              { rank: "10", suit: "Hearts", isHidden: false },
              { rank: "A", suit: "Spades", isHidden: false },
            ])}
          </BlackjackCard>

          <BlackjackCard>
            <BlackjackCardsStack cards={[
              { rank: "10", suit: "Hearts", isHidden: false },
              { rank: "A", suit: "Spades", isHidden: false },
            ]} />
          </BlackjackCard>
        </div>

        {/* BUTTONS */}
        {/* <BlackjackBet /> */}
        <BlackjackChoice />

        {/* BETS */}
        <BlackjackCard className="absolute bottom-5 right-5">
          <BlackjackBets />
        </BlackjackCard>
      </div>

      <div className="absolute inset-0 [background-image:radial-gradient(circle,_rgba(255,255,255,0.1)_100%,_transparent_0%)] opacity-10 z-[1]"></div>
    </div>
  )
}