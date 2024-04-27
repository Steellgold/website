"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { Alert, AlertDescription } from "@/lib/components/ui/alert";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { getPlayedCount, getLosesCount, getWinsCount } from "@/lib/wordle/party"; 
import { CustomCard } from "@/lib/components/card";
import { AlignLeft, Crown, Snail } from "lucide-react";
import { Button } from "@/lib/components/ui/button";
import { NewWordlePartyDialog } from "./dialogs/new-wordle-party.dialog";

export const WordleStatsCard = () => {
  const { parties } = useWorldePartyStore();

  return (
    <CustomCard noHover active>
      <CardHeader>
        <CardTitle>No active party{"  "}🧑‍🦯</CardTitle>
        <CardDescription>Start a new party to play Wordle</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
          <Alert className="p-2 rounded-md">
            <AlertDescription className="ml-2">
              <div className="flex items-center">
                <AlignLeft className="h-4 w-4 mr-1" />
                <p>Played parties</p>
              </div>

              <p>{getPlayedCount(parties)}</p>
            </AlertDescription>
          </Alert>

          <Alert className="p-2 rounded-md">
            <AlertDescription className="ml-2">
              <div className="flex items-center">
                <Crown className="h-4 w-4 mr-1" />
                <p>Number of wins</p>
              </div>

              <p>{getWinsCount(parties)}</p>
            </AlertDescription>
          </Alert>

          <Alert className="p-2 rounded-md">
            <AlertDescription className="ml-2">
              <div className="flex items-center">
                <Snail className="h-4 w-4 mr-1" />
                <p>Number of loses</p>
              </div>

              <p>{getLosesCount(parties)}</p>
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>

      <CardFooter className="justify-end">
        <NewWordlePartyDialog>
          <Button>
            Start a new party
          </Button>
        </NewWordlePartyDialog>
      </CardFooter>
    </CustomCard>
  )
}