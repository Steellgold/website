"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { WordleStatsCard } from "./party.stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { difficultyToNumber, getCategoryName } from "@/lib/wordle/party";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { useEffect, useState } from "react";
import { Button } from "@/lib/components/ui/button";
import { Space, Spade, Telescope, Trash2 } from "lucide-react";
import { CustomCard } from "@/lib/components/card";
import { Separator } from "@/lib/components/ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";

export const WordleParty = () => {
  const { activePartyId, getParty, removeParty, isJokerUsed, setJokerUsed } = useWorldePartyStore();
  const [timer, setTimer] = useState<string>(dayJS().toISOString());

  useEffect(() => {
    const interval = setInterval(() => setTimer((dayJS().toISOString())), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!activePartyId) return <WordleStatsCard />

  const party = getParty(activePartyId);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Card>
          <CardHeader className="hidden sm:block">
            <CardTitle>Category</CardTitle>
          </CardHeader>

          <CardContent className="mt-3 -mb-2 sm:mb-0 sm:-mt-3">
            <p>{getCategoryName(party?.category || "school")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="hidden sm:block">
            <CardTitle>Difficulty</CardTitle>
          </CardHeader>

          <CardContent className="mt-3 -mb-2 sm:mb-0 sm:-mt-3">
            <p>🔤 {difficultyToNumber(party?.difficulty || "five")} characters</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="hidden sm:block">
            <CardTitle>Timer</CardTitle>
          </CardHeader>

          <CardContent className="mt-3 -mb-2 sm:mb-0 sm:-mt-3">
            ⌛ {(dayJS(timer).diff(dayJS(party?.startedAt), "minutes"))} minutes {dayJS(timer).diff(dayJS(party?.startedAt), "seconds") % 60} seconds
          </CardContent>
        </Card>
      </div>

      <div className="mt-3 flex justify-end gap-3">
        <AlertDialog>
          <AlertDialogTrigger disabled={isJokerUsed(activePartyId)}>
            <Button disabled={isJokerUsed(activePartyId)}>
              <Spade className="h-4 w-4 mr-1" />
              {isJokerUsed(activePartyId) ? "Joker used" : "Use joker"}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <p>If you use the joker, you will get a random letter for the word. Are you sure you want to use it?</p>            

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setJokerUsed(activePartyId)}>Yes</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button onClick={() => removeParty(activePartyId)}>
          <Trash2 className="h-4 w-4 mr-1" />
          Delete party
        </Button>
      </div>

      <Separator className="my-5" />

      <div className="mt-5">
      </div>
    </div>
  )
}