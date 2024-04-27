"use client";

import { Button } from "../../../lib/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "../../../lib/components/ui/dialog";
import type { ReactElement } from "react";
import Image from "next/image";
import { useWordleStore } from "../../../lib/store/wordle.store";
import { Alert, AlertDescription, AlertTitle } from "../../../lib/components/ui/alert";
import { Drum } from "lucide-react";

export const WordleDialog = (): ReactElement => {
  const { hasVisitedWordle, setHasVisitedWordle } = useWordleStore();

  return (
    <Dialog defaultOpen={!hasVisitedWordle} open={!hasVisitedWordle} onOpenChange={() => setHasVisitedWordle()}>
      <DialogContent className="max-w-xl p-0 overflow-hidden" black hiddenX>
        <div className="aspect-video relative flex items-center -mb-5">
          <Image
            src={"/_static/images/wordle.png"}
            alt="Wordle Picture"
            fill
            quality={100}
            objectFit="cover"
          />
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-semibold">Welcome to Wordle</h2>
          <p className="text-muted-foreground mt-2">
            Wordle is a word puzzle game that tests your vocabulary and word-guessing skills. The objective of the game is to guess a five-letter word by trying different words and receiving feedback on how close you are to the correct word.
          </p>

          <Alert className="mt-3">
            <Drum className="h-4 w-4"  />
            <AlertTitle>Settings</AlertTitle>
            <AlertDescription>
              You can choose different settings for the game, such as the number of attempts you have, the difficulty level (word length), categories, and more.
            </AlertDescription>
          </Alert>

          <DialogFooter className="mt-3">
            <Button onClick={() => setHasVisitedWordle()}>
              Got it!
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};