import { CustomCard } from "@/lib/components/card"
import { WordleStatsCard } from "../../party.stats"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Badge } from "@/lib/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert"
import { Separator } from "@/lib/components/ui/separator"
import { getCategoryId, getCategoryName } from "@/lib/wordle/party"
import { Button } from "@/lib/components/ui/button"
import { ArrowLeft, ArrowRight, Check, ShoppingBag, X } from "lucide-react"
import { NewWordlePartyDialog } from "../../dialogs/new-wordle-party.dialog"

export const WordleNormalHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <CustomCard noHover>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Check your statistics for this game mode</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <Alert>
            <AlertDescription className="flex justify-between items-center">
              <div>You have <Badge variant={"outline"}>168 🪙</Badge></div>
              <Button variant={"secondary"} size={"realSm"}>
                <ShoppingBag size={13} className="mr-1" />
                Open shop
              </Button>
            </AlertDescription>
          </Alert>

          <Separator className="my-3 w-full" />

          <Alert>
            <AlertDescription>
              <Badge variant={"outline"}>136</Badge> games played
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription className="flex justify-between">
              <Badge variant={"outline"}>17 wins &nbsp;({Math.floor(17 / 136 * 100)}%)</Badge>

              <Separator className="my-3 w-3/12" />

              <Badge variant={"outline"}>119 loses &nbsp;({Math.floor(119 / 136 * 100)}%)</Badge>
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              <Badge variant={"outline"}>{getCategoryName("school").name}</Badge> category played the most
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription className="flex justify-between items-center">
              <div>Best time: <Badge variant={"outline"}>03m 45s</Badge></div>
              <Button variant={"outline"} size={"sm"}>Show game <ArrowRight size={16} /></Button>
            </AlertDescription>
          </Alert>
        </CardContent>
      </CustomCard>

      <CustomCard noHover>
        <CardHeader>
          <CardTitle>🕹️ Play</CardTitle>
          <CardDescription>Click on the button below to start a new game</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {[
            "Complete a game in less than 5 minutes",
            "Complete a game without using any hints",
            "Find the word in less than 3 tries"
          ].map((quest, i) => (
            <Alert key={i} variant={i == 0 ? "questCompleted" : "default"}>
              {i == 0 ? <Check size={16} color="#2e8b57" /> : <X size={16} />}
              <AlertTitle>
                {i == 0 ?
                  <>Quest completed! &nbsp;<Badge variant={"questCompleted"}>+50 🪙</Badge></> :
                  <>Complete to earn &nbsp;<Badge variant={"outline"}>{Math.floor(Math.random() * 100)}  🪙</Badge></>}
              </AlertTitle>
              <AlertDescription>{quest}</AlertDescription>
            </Alert>
          ))}
        </CardContent>

        <CardFooter className="flex justify-end">
          <NewWordlePartyDialog mode={"normal"}>
            <Button variant={"default"} size={"sm"}>Start a new game</Button>
          </NewWordlePartyDialog>
        </CardFooter>
      </CustomCard>
    </div>
  )
}