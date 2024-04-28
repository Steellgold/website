"use client";

import type { PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { DialogDescription, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";

export const DailyNewPartyContent: Component<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <DialogHeader className="mb-3">
        <DialogTitle>Daily wordle ⌛</DialogTitle>
        <DialogDescription>
          Guess the word of the day!
        </DialogDescription>
      </DialogHeader>
    </>
  );
};