import { CustomCard } from "@/lib/components/card"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Badge } from "@/lib/components/ui/badge"
import { Alert, AlertDescription } from "@/lib/components/ui/alert"
import { Separator } from "@/lib/components/ui/separator"
import { getCategoryName } from "@/lib/wordle/party"
import { Button } from "@/lib/components/ui/button"
import { ArrowRight, ShoppingBag, X } from "lucide-react"
import { NewWordlePartyDialog } from "../../dialogs/new-wordle-party.dialog"
import { Quests } from "./lib/normal.quests"
import { Suspense } from "react"
import { QuestsLoading } from "./lib/loading"
import { useWorldePartyStore } from "@/lib/store/wordle.store"
import { dayJS } from "@/lib/utils/dayjs/day-js"

export const WordleNormalHome = () => {
  const { parties, setActivePartyId } = useWorldePartyStore();

  const getStats = (): {
    total: number;
    wins: number;
    loses: number;
    rate: {
      w: string;
      l: string;
    };
    bestTime: {
      time: string;
      partyId: string;
    };
    mostPlayedCategory: string;
  } => {
    const totalWins = parties.filter(p => p.endStatus === "win").length;
    const totalLoses = parties.filter(p => p.endStatus === "lose" || p.endReason === "abandon").length;

    const categories = parties.map(p => p.category);
    const mostPlayedCategory = categories.sort((a, b) =>
      categories.filter(v => v === a).length - categories.filter(v => v === b).length
    ).pop();

    let rate = { w: "0", l: "0" };
    if (parties.length > 0) rate = { w: `${Math.floor(totalWins / parties.length * 100)}`, l: `${Math.floor(totalLoses / parties.length * 100)}` }

    let bestTime: number = 0;
    let bestPartyId: string = "";
    parties.forEach(p => {
      if (!p.startedAt || !p.finishedAt) return;
      if (p.endStatus !== "win") return;
      const start = dayJS(p.startedAt).unix();
      const end = dayJS(p.finishedAt).unix();
      const time = end - start;
      if (time < bestTime || bestTime === 0) {
        bestTime = time;
        bestPartyId = p.id;
      }
    });

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = time - minutes * 60;
      return `${minutes}m ${seconds}s`;
    }

    return {
      total: parties.length,
      wins: totalWins,
      loses: totalLoses,
      rate,
      mostPlayedCategory: mostPlayedCategory ? getCategoryName(mostPlayedCategory).name : "No category played yet",
      bestTime: {
        time: formatTime(bestTime),
        partyId: bestPartyId
      }
    }
  }

  const stats = getStats();

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
    <CustomCard noHover className="lg:w-1/2">
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Check your statistics for this game mode</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <Alert>
            <AlertDescription className="flex justify-between items-center">
              <div>You have <Badge variant={"outline"}>0 🪙</Badge></div>
              <Button variant={"secondary"} size={"realSm"} disabled>
                <ShoppingBag size={13} className="mr-1" />
                Open shop
              </Button>
            </AlertDescription>
          </Alert>

          <Separator className="my-3 w-full" />

          <Alert>
            <AlertDescription>
              <Badge variant={"outline"}>{stats.total}</Badge> games played
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription className="flex justify-between">
              <Badge variant={"success"}>{stats.wins} wins &nbsp;({stats.rate.w}%)</Badge>

              <Separator className="my-3 w-3/12" />

              <Badge variant={"fail"}>{stats.loses} loses &nbsp;({stats.rate.l}%)</Badge>
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              {stats.mostPlayedCategory === "No category played yet" ? (
                <p>{stats.mostPlayedCategory}</p>
              ) : (
                <>
                  <Badge variant={"outline"}>{stats.mostPlayedCategory}</Badge> category played the most
                </>
              )}
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription className="flex justify-between items-center">
              {stats.bestTime.partyId ? <div>Best time: <Badge variant={"outline"}>{stats.bestTime.time}</Badge></div>
               : <div>Best time: <Badge variant={"outline"}>No played yet</Badge></div>}

              {stats.bestTime.partyId ? (
                <Button variant={"outline"} size={"sm"} onClick={() => {
                  setActivePartyId(stats.bestTime.partyId);
                }}>
                  Show game <ArrowRight size={16} />
                </Button>
              ) : (
                <NewWordlePartyDialog mode={"normal"}>
                  <Button variant={"outline"} size={"realSm"}>Start a new game</Button>
                </NewWordlePartyDialog>
              )}
            </AlertDescription>
          </Alert>
        </CardContent>
      </CustomCard>

      <CustomCard noHover className="lg:w-1/2">
        <CardHeader>
          <CardTitle>🕹️ Play</CardTitle>
          <CardDescription>Click on the button below to start a new game</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <Suspense fallback={<QuestsLoading />}>
            <Quests />
          </Suspense>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <NewWordlePartyDialog mode={"normal"}>
            <Button variant={"default"} size={"sm"}>Start a new game</Button>
          </NewWordlePartyDialog>
        </CardFooter>
      </CustomCard>
    </div>
  )
}