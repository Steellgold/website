"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { difficultyToNumber, getCategoryName } from "@/lib/wordle/party";
import { ReactElement, useEffect, useState } from "react";

export const WordleInfoCards = (): ReactElement => {
  const { activePartyId, getParty } = useWorldePartyStore();
  const [timer, setTimer] = useState<string>(dayJS().toISOString());

  useEffect(() => {
    const interval = setInterval(() => setTimer((dayJS().toISOString())), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!activePartyId) return <></>;

  const party = getParty(activePartyId);

  return (
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
          ⌛ {(dayJS(timer).diff(dayJS(party?.startedAt), "minutes"))} minutes {dayJS(timer).diff(dayJS(party?.startedAt), "seconds") % 60} s
        </CardContent>
      </Card>
    </div>
  );
}