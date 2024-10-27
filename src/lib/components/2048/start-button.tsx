"use client";

import { Button } from "@/lib/components/ui/button";
import { ReactElement, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { Grid3X3 } from "lucide-react";
import { use2048 } from "./hooks/use-2048";
import { useLang } from "@/lib/stores/lang.store";

type Status = "gameOver" | "started" | "notStarted";

export const E2048_StartButton = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const { gameOver, board, initializeBoard } = use2048();
  const { lang } = useLang();

  const status: Status = gameOver ? "gameOver" : board.some((tile) => tile !== 0) ? "started" : "notStarted";

  if (status === "notStarted") {
    return (
      <Button onClick={() => initializeBoard()} className="w-40">
        {lang === "fr" ? "Commencer" : "Start"}
      </Button>
    );
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-40">
          {status === "gameOver"
            ? lang === "fr"
              ? "Rejouer"
              : "Play again"
            : lang === "fr"
              ? "Nouvelle partie"
              : "New game"
          }
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {status === "gameOver"
              ? lang === "fr"
                ? "Voulez-vous rejouer ?"
                : "Do you want to play again?"
              : lang === "fr"
                ? "Voulez-vous commencer une nouvelle partie ?"
                : "Do you want to start a new game?"
            }
          </AlertDialogTitle>

          <AlertDialogDescription>
            {status === "gameOver"
              ? lang === "fr"
                ? "Vous avez perdu étant donné que vous n'avez plus de mouvements possibles !" :
                "You lost because you have no more possible moves!"
              : lang === "fr"
                ? "Êtes vous sûr de vouloir commencer une nouvelle partie ?"
                : "Are you sure you want to start a new game?"
            }
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button onClick={() => setIsOpen(false)}>
            {lang === "en" ? "No thanks" : "Non merci"}
          </Button>

          <Button onClick={() => {
            initializeBoard(4, true);
            setIsOpen(false);
          }}>
            <Grid3X3 className="w-4 h-4 mr-2" />
            {lang === "en" ? "Yes please" : "Oui clairement"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};