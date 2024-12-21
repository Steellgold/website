"use client";

import { useLang } from "@/lib/stores/lang.store";
import { ReactElement, useState } from "react";
import { useBlackjack } from "../_lib/hook/use-blackjack";
import { BlackjackCard } from "./ui/blackjack-card";
import { BlackjackButton } from "./ui/blackjack-button";
import { createDeck } from "../_lib/blackjack.utils";
import { BlackjackInput } from "./ui/blackjack-input";
import { BlackjackButtons } from "./blackjack-menu";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Badge } from "@/lib/components/ui/badge";

export const BlackjackStarting = (): ReactElement => {
  const { setBalance, setGameStatus, reset, setDeck, startGameTimer } = useBlackjack();
  const { lang } = useLang();

  const [gameCode, setGameCode] = useState("");

  const joinGame = () => {
    console.log("Nop, not yet implemented.");
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-green-900 relative p-3 sm:p-0">
      <BlackjackButtons />

      <div className="flex flex-col items-center gap-3">
        <BlackjackCard className="flex flex-col items-center gap-1 p-3 w-full">
          <h1 className="text-xl font-extrabold">Blackjack</h1>
          <p className="text-sm sm:w-[40vh] text-center">
            {lang === "fr"
              ? "Jouer contre l'ordinateur ou rejoindre une partie en ligne avec vos amis pour jouer ensemble sur la même table mais chaqu'un avec sa propre main."
              : "Play against the computer or join an online game with your friends to play together on the same table but each with their own hand."
            }
          </p>

          <hr />

          <div className="flex items-center gap-3">
            <BlackjackButton
              className="bg-white bg-opacity-10 text-white rounded-md px-3 py-1 text-sm"
              size="small"
              onClick={() => {
                reset();
                setDeck(createDeck())
                startGameTimer();
                setBalance(100);
                setGameStatus("BETTING");
              }}
            >
              {lang === "fr" ? "Jouer contre l'ordinateur" : "Play against the computer"}
            </BlackjackButton>
          </div>
        </BlackjackCard>

        <BlackjackCard className="flex flex-col sm:flex-row justify-between items-left gap-3 sm:gap-1 p-3 w-full">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-lg flex items-center gap-1.5">
              {lang === "fr" ? "Rejoindre une table" : "Join a table"}
              <Badge variant={"blackjack"}>
                {lang === "fr" ? "Bîentôt" : "Soon"}
              </Badge>
            </h1>
            <span className="text-xs sm:w-[25vh]">
              {lang === "fr"
                ? "Demandez le code de la partie à un ami pour le rejoindre sur la même table."
                : "Ask your friend for the game code to join them on the same table."}
              </span>
          </div>

          <div className="flex items-center justify-end gap-1">
            <BlackjackInput placeholder="Code de table" className="sm:w-32" inputSize="small" value={gameCode} onChange={(e) => setGameCode(e.target.value)} disabled />
            <BlackjackButton className="text-sm" size="small" onClick={joinGame} disabled>
              {lang === "fr" ? "Rejoindre" : "Join"}
            </BlackjackButton>
          </div>
        </BlackjackCard>

        <Link
          href="https://github.com/Steellgold/website/tree/stable/src/app/(apps-in-app)/blackjack"
          className="text-xs flex items-center gap-1 hover:underline"
        >
          <GitHubLogoIcon className="w-4 h-4" />
          View source code on GitHub
        </Link>
      </div>

      <p className={cn(
        "absolute bottom-5 left-5 text-xs text-white",
        "transition-opacity duration-300 ease-in-out",
        "opacity-50 hover:opacity-100"
      )}>
        * Balance fictive, aucune mise ou gain réel n'est effectué.
      </p>
    </div>
  )
}