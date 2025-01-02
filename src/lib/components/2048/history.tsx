"use client";

import { History } from "lucide-react"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { use2048 } from "./hooks/use-2048";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useLang } from "@/lib/hooks/use-lang";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { E2048_Tile } from "./tile";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

export const E2048_History = () => {
  const { history, getBestScore } = use2048();
  const lang = useLang();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="p-2">
          <History size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            Game History
          </SheetTitle>
          <SheetDescription>
            <div className="flex items-center gap-1 mb-4">
              <span>
                {lang === "fr" ? "Votre meuilleur score est de" : "Your best score is"}
              </span>
              <Badge variant={"success"}>{getBestScore()}</Badge>
            </div>
            
            <ScrollArea className="h-[70rem]">
              {history.length === 0 ? "No history yet" : history
                .filter(h => Object.keys(h.tiles).length > 0 && !(Object.keys(h.tiles).length === 1 && h.tiles[2] === 2))
                .sort((a, b) => dayJS(b.startDate).diff(a.startDate))
                .map((h, i) => (
                <Card key={i} className="first:mt-0 mt-1.5">
                  <CardHeader className="p-3">
                    <CardTitle>
                      {lang === "fr" ? "Partie" : "Game"}
                      {h.endType === "gameOver" ?
                        <Badge variant={"fail"} className="ml-1">
                          {lang === "fr" ? "Perdue" : "Lost"}
                        </Badge>
                      : h.endType == "win" ?
                        <Badge variant={"success"} className="ml-1">
                          {lang === "fr" ? "2048 atteint" : "2048 reached"}
                        </Badge>
                      : h.endType == "restart" ?
                        <Badge variant={"fail"} className="ml-1">
                          {lang === "fr" ? "Abandonnée" : "Abandoned"}
                        </Badge>
                      : null}
                    </CardTitle>

                    <CardDescription className="flex flex-col">
                      <div>
                        {lang === "fr" ? "Durée de la partie" : "Game duration"}:
                        <span>
                            {dayJS(h.endDate).diff(h.startDate, "hours") % 24 > 0 && (
                              <>{dayJS(h.endDate).diff(h.startDate, "hours") % 24} {lang === "fr" ? "heures" : "hours"},&nbsp;</>
                            )}
                            
                            {dayJS(h.endDate).diff(h.startDate, "minutes") % 60 > 0 && (
                              <>{dayJS(h.endDate).diff(h.startDate, "minutes") % 60} {lang === "fr" ? "minutes" : "minutes"} and&nbsp;</>
                            )}

                            {dayJS(h.endDate).diff(h.startDate, "seconds") % 60 > 0 && (
                              <>{dayJS(h.endDate).diff(h.startDate, "seconds") % 60} {lang === "fr" ? "secondes" : "seconds"}</>
                            )}
                        </span>
                      </div>

                      <span>
                        {lang === "fr" ? "Score" : "Score"}: {h.score || 0}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-3 -mt-3">
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(h.tiles).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 bg-card-foreground/5 p-1.5 rounded-sm">
                          <div className="w-8 h-8 -mb-0.5">
                            <E2048_Tile
                              number={parseInt(key)}
                              isHovered={false}
                              isInfo
                            />
                          </div>
                          
                          <span className="text-sm mr-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
      </Sheet>
  )
}