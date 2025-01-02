"use client";

import { ReactElement } from "react"
import { BlackjackCard } from "./ui/blackjack-card"
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { useLang } from "@/lib/hooks/use-lang";
import { handValue } from "../_lib/blackjack.utils";
import { cn } from "@/lib/utils";

export const BlackjackChoice = (): ReactElement => {
  const { hit, stand, gameStatus, croupierCards, playerCards } = useBlackjack();
  const lang = useLang();

  if (gameStatus !== "PLAYING") return <></>;
  if (playerCards.length < 2 || croupierCards.length < 2) return <></>;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
      <BlackjackCard className="flex gap-4 items-center">
        <div className="flex flex-row gap-2">
          <BlackjackCard
            className={cn(
              "bg-opacity-50 bg-green-600 hover:bg-opacity-20 p-3 rounded-md select-none cursor-pointer duration-100", {
                "cursor-not-allowed opacity-70": handValue(playerCards) >= 21
              }
            )}
            onClick={() => {
              if (handValue(playerCards) >= 21) return;
              hit("player")
            }}
          >
            <h1 className="text-lg">{lang == "fr" ? "Tirer" : "Hit"}</h1>
          </BlackjackCard>

          <BlackjackCard
            className="bg-opacity-50 bg-red-600 hover:bg-opacity-20 p-3 rounded-md select-none cursor-pointer duration-100"
            onClick={() => stand()}
          >
            <h1 className="text-lg">{lang == "fr" ? "Garder" : "Stand"}</h1>
          </BlackjackCard>
        </div>
      </BlackjackCard>
    </div>
  )
}