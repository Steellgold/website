"use client";

import { Button } from "@/lib/components/ui/button";
import { ReactElement, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { Component } from "../utils/component";
import { Grid3X3 } from "lucide-react";

type StartButtonProps = {
  status: "gameOver" | "started" | "notStarted";
  initializeBoard: () => void;
};

export const E2048_StartButton: Component<StartButtonProps> = ({ status, initializeBoard }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            initializeBoard();
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