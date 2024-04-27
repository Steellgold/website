"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { difficultyToNumber, getCategoryName } from "@/lib/wordle/party";
import { InfoCircledIcon } from "@radix-ui/react-icons";
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
          {getCategoryName(party?.category || "animals").description ? (
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <p className="flex flex-row gap-2 items-center">
                    <InfoCircledIcon className="w-4 h-4" />
                    {getCategoryName(party?.category || "school").name}
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  {getCategoryName(party?.category || "school").description}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <p>{getCategoryName(party?.category || "school").name}</p>
          )}
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