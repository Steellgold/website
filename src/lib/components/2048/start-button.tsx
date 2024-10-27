"use client";

import { Button } from "@/lib/components/ui/button";
import { ReactElement, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { Component } from "../utils/component";
import { Grid3X3 } from "lucide-react";
import { use2048 } from "./hooks/use-2048";

type Status = "gameOver" | "started" | "notStarted";

export const E2048_StartButton = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { gameOver, board, initializeBoard } = use2048();

  const status: Status = gameOver ? "gameOver" : board.some((tile) => tile !== 0) ? "started" : "notStarted";

  if (status === "notStarted") {
    return (
      <Button onClick={() => initializeBoard()} className="w-40">
        Commencer
      </Button>
    );
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-40">
          {status === "gameOver" ? "Rejouer" : "Nouvelle partie"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {status === "gameOver" ? "Voulez-vous rejouer ?" : "Voulez-vous commencer une nouvelle partie ?"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {status === "gameOver"
              ? "Vous avez perdu étant donné que vous n'avez plus de mouvements possibles !"
              : "Êtes vous sûr de vouloir commencer une nouvelle partie ?"
            }
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button onClick={() => setIsOpen(false)}>
            No, I&apos;m good
          </Button>

          <Button onClick={() => {
            initializeBoard(4, true);
            setIsOpen(false);
          }}>
            <Grid3X3 className="w-4 h-4 mr-2" />
            Yes please
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};