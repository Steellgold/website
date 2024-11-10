"use client";

import { E2048_Board } from "@/lib/components/2048/board";
import { E2048_GameInfo } from "@/lib/components/2048/game-info";
import { E2048_History } from "@/lib/components/2048/history";
import { use2048 } from "@/lib/components/2048/hooks/use-2048";
import { E2048_StartButton } from "@/lib/components/2048/start-button";
import { E2048_StatsCard } from "@/lib/components/2048/stat-card";
import { E2048_TopButtons } from "@/lib/components/2048/top-buttons";
import { Button } from "@/lib/components/ui/button";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import { Book, BookX, Undo } from "lucide-react";
import { useState } from "react";
import { HP2048 } from "./hp";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip";
import { useLang } from "@/lib/stores/lang.store";

export const Content2048Page = () => {
  const { board, gameOver, resetGame, undoMove, undosAvailable } = use2048();
  const [showGameInfo, setShowGameInfo] = useState(false);
  const { lang } = useLang();

  if (board.length == 0) return <HP2048 />;

  return (   
    <div className="overflow-y-hidden flex min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <E2048_TopButtons />
      <E2048_StatsCard />

      <div className={cn("flex-grow flex flex-col items-center justify-center -mt-12 sm:-mt-24 md:-mt-36")}>
        <div className="relative flex flex-row gap-2">
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 dark:bg-black/50 z-10">
              <h1 className="text-4xl font-bold">Game Over</h1>
              <Button onClick={() => resetGame("gameOver")}>Try Again</Button>
            </div>
          )}
          <div className={cn(
            "p-3 rounded-lg bg-[#e4e0d1] dark:bg-gray-800 shadow-lg select-none transition-colors duration-100", {
              "opacity-30": gameOver
            }
          )}>
            <E2048_Board />
          </div>

          {showGameInfo && <E2048_GameInfo />}
        </div>
      </div>

      <div className={cn(
        "fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 transition-opacity duration-100", {
          // "opacity-5": gameHovered
        }
      )}>
        <div className="flex flex-row items-center justify-center gap-2 bg-[#e4e0d1] dark:bg-gray-800 p-2 rounded-xl shadow-lg">
          <E2048_StartButton />

          <Separator orientation="vertical" className="bg-white/10 h-8" />
          
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <Button size={"icon"} className="p-2">
                  <E2048_History />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {lang == "en" ? "Show game history" : "Afficher l'historique du jeu"}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button size={"icon"} className="p-2" onClick={() => setShowGameInfo(!showGameInfo)}>
                  {showGameInfo ? <BookX /> : <Book />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {lang == "en" ? "Show game info" : "Afficher les informations du jeu"}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button size={"icon"} className="p-2" disabled={undosAvailable === 0} onClick={undoMove}>
                  <Undo />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {undosAvailable === 0
                  ? lang == "en" ? "No more undos available, make a 128 tile to get one, maximum 5 undos" : "Plus d'annulations disponibles, créez une tuile 128 pour en obtenir une, maximum 5 annulations disponibles"
                  : lang == "en" ? "Undo last move" : "Annuler le dernier mouvement"
                }
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}