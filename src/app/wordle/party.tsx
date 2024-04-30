"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { Separator } from "@/lib/components/ui/separator";
import { WordleInfoCards } from "./lib/party/wordle.info.cards";
import { WordleInfoActions } from "./lib/party/wordle.info.actions";
import { WordleBoard } from "./lib/party/wordle.board";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs";
import { PartyType } from "@/lib/types/wordle.type";
import { useState } from "react";
import { WordleLayout } from "./lib/party/wordle.layout";
import { WordleNormalHome } from "./lib/home/normal.home";
import { Settings } from "lucide-react";
import { WordleSettingsHome } from "./lib/home/settings.home";
import { WordleRankedHome } from "./lib/home/ranked.home";

type ExtraPartyType = PartyType | "settings"

export const WordleParty = () => {
  const { activePartyId, getParty } = useWorldePartyStore();
  const [choose, setChoose] = useState<ExtraPartyType>("normal");
  
  if (!activePartyId){
    return (
      <WordleLayout
        imageSrc={
          choose === "normal" ? "/_static/images/wordle_title.png"
              : choose === "ranked" ? "/_static/images/wordle_title_ranked.png"
                  : choose === "daily" ? "/_static/images/wordle_title_daily.png"
                      : choose === "duo" ? "/_static/images/wordle_title_duo.png"
                          : choose === "settings" ? "/_static/images/settings.png"
          : "/_static/images/wordle_title.png"
        }
        imageAlt={`Wordle ${choose}`}
      >
        <Tabs defaultValue="normal" onValueChange={(value) => setChoose(value as PartyType)}>
          <TabsList className="flex justify-center">
            <TabsTrigger value="normal">Normal</TabsTrigger>
            <TabsTrigger value="ranked">Ranked</TabsTrigger>
            <TabsTrigger value="daily" disabled>Daily</TabsTrigger>
            <TabsTrigger value="duo" disabled>Duo</TabsTrigger>
            <TabsTrigger value="settings">
              <Settings size={16} />&nbsp;
              Settings
            </TabsTrigger>
          </TabsList>

          <Separator className="my-3" />
          
          <TabsContent value="normal">
            <WordleNormalHome />
          </TabsContent>

          <TabsContent value="ranked">
            <WordleRankedHome />
          </TabsContent>

          <TabsContent value="daily">
          </TabsContent>

          <TabsContent value="duo">
          </TabsContent>

          <TabsContent value="settings">
            <WordleSettingsHome />
          </TabsContent>
        </Tabs>
      </WordleLayout>
    )
  }

  const party = getParty(activePartyId);
  if (!party) return <p>Party not found</p>;

  return (
    <WordleLayout>
      <WordleInfoCards />
      <WordleInfoActions />
      <Separator className="my-5" />

      <WordleBoard />
    </WordleLayout>
  )
}