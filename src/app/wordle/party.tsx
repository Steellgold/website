"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { WordleStatsCard } from "./party.stats";
import { Separator } from "@/lib/components/ui/separator";
import { WordleInfoCards } from "./lib/wordle.info.cards";
import { WordleInfoActions } from "./lib/wordle.info.actions";
import { WordleBoard } from "./lib/wordle.board";
import { WordlePartyHistory } from "./lib/wordle.history";

export const WordleParty = () => {
  const { activePartyId, setActivePartyId, getParty } = useWorldePartyStore();
  if (!activePartyId) return <WordleStatsCard />

  const party = getParty(activePartyId);

  return (
    <div>
      <WordleInfoCards />
      <WordleInfoActions />
      <Separator className="my-5" />

      <WordleBoard />
    </div>
  )
}