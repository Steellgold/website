"use client";

import { use2048 } from "@/lib/components/2048/hooks/use-2048";
import { Button } from "@/lib/components/ui/button";
import { Card, CardContent } from "@/lib/components/ui/card";
import { useLang } from "@/lib/stores/lang.store";
import { ReactElement } from "react";

export const HP2048 = (): ReactElement => {
  const { lang } = useLang();
  const { initializeBoard } = use2048();
  
  return (
    <div className="min-h-screen bg-[#faf8f0] dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold">2048</h1>
        <p className="mt-2 w-[80%] sm:w-[60%] md:w-[45%] mx-auto">
          {lang === "fr"
            ? "Un jeu réalisé pour le défi de Melvynx, basé sur le jeu 2048. Le but du jeu est de combiner les tuiles pour atteindre le nombre 2048. Utilisez les touches fléchées pour déplacer les tuiles dans la direction souhaitée. Bonne chance !"
            : "A game made for Melvynx's challenge, based on the game 2048. The goal of the game is to combine the tiles to reach the number 2048. Use the arrow keys to move the tiles in the desired direction. Good luck!"
          }
        </p>

        <p className="mt-4">
          {lang === "fr" ?
            "Appuyez sur le bouton ci-dessous pour commencer à jouer."
            : "Press the button below to start playing."
          }
        </p>

        <Button onClick={() => initializeBoard()} className="mt-4">
          {lang === "fr" ? "Démarrer une partie !" : "Start a game!"}
        </Button>
      </header>
    </div>
  );
};