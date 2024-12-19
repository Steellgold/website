"use client";

import { ReactElement } from "react"
import { BlackjackCard } from "./ui/blackjack-card"
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { useLang } from "@/lib/stores/lang.store";

export const BlackjackChoice = (): ReactElement => {
  const { hit, gameStatus, croupierCards, playerCards } = useBlackjack();
  const { lang } = useLang();

  if (gameStatus !== "PLAYING") return <></>;
  if (playerCards.length < 2 || croupierCards.length < 2) return <></>;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
      <BlackjackCard className="flex flex-col gap-4 items-center">
        <p className="text-lg">
          {lang == "fr" ? "Que voulez-vous faire ?" : "What do you want to do?"}
        </p>

        <div className="flex flex-col gap-2">
          <BlackjackCard className="bg-opacity-50 bg-green-600 hover:bg-opacity-20 p-3 rounded-md cursor-pointer duration-100" onClick={() => hit("player")}>
            <h1 className="text-lg">{lang == "fr" ? "Carte" : "Hit"}</h1>
            <p>{lang == "fr" ? "Demander une carte de plus." : "Ask for another card."}</p>
          </BlackjackCard>

          <BlackjackCard className="bg-opacity-50 bg-red-600 hover:bg-opacity-20 p-3 rounded-md cursor-pointer duration-100" onClick={() => hit("dealer")}>
            <h1 className="text-lg">{lang == "fr" ? "Rester" : "Stay"}</h1>
            <p>{lang == "fr" ? "Garder votre main actuelle." : "Keep your current hand."}</p>
          </BlackjackCard>
        </div>
      </BlackjackCard>
    </div>
  )
}