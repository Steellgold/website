"use client";

import type { PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";
import { Button } from "@/lib/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/lib/components/ui/badge";
import { useWordleUserStore } from "@/lib/store/wordle.user.store";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Label } from "@/lib/components/ui/label";
import { Input } from "@/lib/components/ui/input";

export const RankedNewPartyContent: Component<PropsWithChildren> = ({ children }) => {
  const { user } = useWordleUserStore();

  return (
    <div className="mt-5">
      <DialogHeader className="mb-3">
        <DialogTitle>Ranked 🏆</DialogTitle>
        <DialogDescription>
          Be the fastest to guess the word and get on the leaderboard!
        </DialogDescription>
      </DialogHeader>

        {!user && (
          <Alert className="p-4">
            <AlertTitle className="text-lg">You are not identified</AlertTitle>
            <AlertDescription>
              Just enter your name to start playing ranked games.
            </AlertDescription>
            <div className="mt-5">
              <Label>Pseudonyme</Label>
              <Input placeholder="Enter your name" />
            </div>

            <div className="flex justify-end mt-5">
              <Button variant={"ranked"}>Sign in <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </Alert>
        )}

      {user && (
        <DialogFooter className="mt-5">
          <Button disabled variant="ranked">
            Play ranked <Badge variant={"secondary"} className="ml-2">Coming soon</Badge>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      )}
    </div>
  );
};