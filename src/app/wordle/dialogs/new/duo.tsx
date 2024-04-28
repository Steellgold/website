"use client";

import type { PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";
import { Button } from "@/lib/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/lib/components/ui/badge";

export const DuoNewPartyContent: Component<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-5">
      <DialogHeader className="mb-3">
        <DialogTitle>Duo mode 🎭</DialogTitle>
        <DialogDescription>
          Guess the word faster than your partner to win!
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="mt-5">
        <Button disabled variant="duo">
          Play duo <Badge variant={"secondary"} className="ml-2">Coming soon</Badge>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogFooter>
    </div>
  );
};