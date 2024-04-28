"use client";

import { Dialog, DialogContent, DialogTrigger } from "../../../lib/components/ui/dialog";
import { useState, type PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs";
import { NormalNewPartyContent } from "./new/normal";
import { Separator } from "@/lib/components/ui/separator";
import { RankedNewPartyContent } from "./new/ranked";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DailyNewPartyContent } from "./new/daily";
import { DuoNewPartyContent } from "./new/duo";

export const NewWordlePartyDialog: Component<PropsWithChildren> = ({ children }) => {
  const [choose, setChoose] = useState<"normal" | "ranked" | "daily" | "duo">("normal");

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

        <div className={cn({
          "p-5": choose !== "normal",
        })}>
          <Tabs defaultValue="normal" onValueChange={(value) => setChoose(value as any)}>
            <TabsList>
              <TabsTrigger value="normal">Normal</TabsTrigger>
              <TabsTrigger value="ranked">Ranked</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="duo">Duo</TabsTrigger>
            </TabsList>

            <Separator className="my-3" />
            
            <TabsContent value="normal">
              <NormalNewPartyContent />
            </TabsContent>

            <TabsContent value="ranked">
              <RankedNewPartyContent />
            </TabsContent>

            <TabsContent value="daily">
              <DailyNewPartyContent />
            </TabsContent>

            <TabsContent value="duo">
              <DuoNewPartyContent />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};