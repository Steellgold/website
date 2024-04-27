"use client";

import { Button } from "../../../lib/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "../../../lib/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "../../../lib/components/ui/alert";
import { Drum } from "lucide-react";
import { Component } from "@/lib/components/utils/component";
import { useState } from "react";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { NewWordlePartyDialog } from "./new-wordle-party.dialog";

type WordleDialogProps = {
  endStatus: "win" | "lose";
  open: boolean;
};

export const EndedWordleDialog: Component<WordleDialogProps> = ({ endStatus, open }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(open);
  const { activePartyId, addParty, setLose, setWin } = useWorldePartyStore();
  if (!activePartyId) return <></>;

  return (
    <Dialog defaultOpen={dialogOpen} open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
      <DialogContent className="max-w-xl p-0 overflow-hidden">
        <div className="p-5">
          <h2 className="text-2xl font-semibold">
            {endStatus === "win" ? "Congratulations!" : "Game Over"}
          </h2>
          <p className="text-muted-foreground mt-2">
            {endStatus === "win"
              ? "You've successfully guessed the word!"
              : "You've run out of attempts. Better luck next time!"}
          </p>

          <DialogFooter className="mt-3">
            <Button onClick={() => {
              if (endStatus === "win") {
                setWin(activePartyId);
              } else {
                setLose(activePartyId, "missed");
              }
            }}>
              Close
            </Button>

            <NewWordlePartyDialog>
              <Button>
                Play again
              </Button>
            </NewWordlePartyDialog>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};