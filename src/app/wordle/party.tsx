"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { WordleStatsCard } from "./party.stats";
import { Separator } from "@/lib/components/ui/separator";
import { WordleInfoCards } from "./lib/wordle.info.cards";
import { WordleInfoActions } from "./lib/wordle.info.actions";
import { WordleBoard } from "./lib/wordle.board";

export const WordleParty = () => {
  const { activePartyId } = useWorldePartyStore();
  if (!activePartyId) return <WordleStatsCard />

  return (
    <div>
      <WordleInfoCards />
      <WordleInfoActions />

      <Separator className="my-5" />

      <WordleBoard />
    </div>
  )
}