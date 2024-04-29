"use client";

import { Button } from "../../../lib/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "../../../lib/components/ui/dialog";
import { Component } from "@/lib/components/utils/component";
import { useState } from "react";
import { useWorldePartyStore } from "@/lib/store/wordle.store";

type WordleDialogProps = {
  endStatus: "win" | "lose" | "time";
  open: boolean;
};

export const EndedWordleDialog: Component<WordleDialogProps> = ({ endStatus, open }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(open);
  const { activePartyId, setLose, setWin, getParty, refresh } = useWorldePartyStore();

  if (!activePartyId) return <></>;

  const setStatus = () => {
    if (endStatus === "win") {
      setWin(activePartyId);
    } else {
      setLose(activePartyId, "missed");
    }
  }

  return (
    <>
      <Dialog defaultOpen={dialogOpen} open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
        <DialogContent className="max-w-xl p-0 overflow-hidden">
          <div className="p-5">
            <h2 className="text-2xl font-semibold">
              {endStatus === "win" ? "Congratulations!" : "Game Over"}
            </h2>
            <p className="text-muted-foreground mt-2">
              {endStatus === "win"
                ? <>You&apos;ve successfully guessed the word!</>
                : (
                  <>
                    <p>You&apos;ve run out of attempts. Better luck next time!</p>
                    <p>The word was <strong>{getParty(activePartyId)?.word}</strong>.</p>
                  </>
                )}
            </p>

            <DialogFooter className="mt-3">
              <Button variant={"outline"} size={"sm"} onClick={() => {
                setStatus();
              }}>
                Close
              </Button>

              <Button variant="default" size={"sm"} onClick={() => {
                setDialogOpen(false);
                refresh();
                setStatus();
              }}>
                Go again
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};