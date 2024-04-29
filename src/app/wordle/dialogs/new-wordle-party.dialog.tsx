"use client";

import { Dialog, DialogContent, DialogTrigger } from "../../../lib/components/ui/dialog";
import { useState, type PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { NormalNewPartyContent } from "./new/normal";
import { RankedNewPartyContent } from "./new/ranked";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DailyNewPartyContent } from "./new/daily";
import { DuoNewPartyContent } from "./new/duo";

type NewWordlePartyDialogProps = {
  mode: "normal" | "ranked" | "daily" | "duo";
};

export const NewWordlePartyDialog: Component<PropsWithChildren & NewWordlePartyDialogProps> = ({ children, mode }) => {
  const [choose, setChoose] = useState<"normal" | "ranked" | "daily" | "duo">(mode);

  return (
    <Dialog onOpenChange={(open) => !open && setChoose("normal")}>
      <DialogTrigger>
        {children}
      </DialogTrigger>

      <DialogContent className={cn({
        "max-w-xl p-0 overflow-hidden": choose !== "normal",
      })}
        black={choose !== "normal"}
        hiddenX={choose === "normal"}>
        {choose !== "normal" && (
          <div className="aspect-video relative flex items-center -mb-5">
            <Image
              src={
                choose === "ranked"
                  ? "/_static/images/wordle_ranked.png"
                    : choose === "daily"
                      ? "/_static/images/wordle_daily.png"
                        : choose === "duo"
                          ? "/_static/images/wordle_duo.png"
                : ""
              }
              alt="Wordle Mode Picture"
              fill
              quality={100}
              objectFit="cover"
            />
          </div>
        )}

        <div className={cn({ "p-5": choose !== "normal" })}>
          {choose === "normal" ? (
            <NormalNewPartyContent />
          ) : choose === "ranked" ? (
            <RankedNewPartyContent />
          ) : choose === "daily" ? (
            <DailyNewPartyContent />
          ) : choose === "duo" ? (
            <DuoNewPartyContent />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};