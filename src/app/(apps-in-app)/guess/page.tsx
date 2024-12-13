"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";
import { confettiFireworks } from "@/lib/components/confetti";
import { DifficultyLevel, GuessRound, numMaxByDifficulty, useGuess } from "@/lib/stores/guess.store";
import { Badge } from "@/lib/components/ui/badge";
import { Flame, Joystick, Play, Timer } from "lucide-react";
import { Separator } from "@/lib/components/ui/separator";
import { Dayjs, dayJS } from "@/lib/utils/dayjs/day-js";

type Difficulty = {
  name: DifficultyLevel;
  max: number;
  max_attempts: number;
}

const diffLevels: Difficulty[] = [
  { name: "easy", max: 100, max_attempts: 30 },
  { name: "medium", max: 500, max_attempts: 20 },
  { name: "hard", max: 1000, max_attempts: 10 },
  { name: "god", max: 10000, max_attempts: 5 }, // for the brave
]

const GuessPage = () => {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("easy");
  const [secret, setSecret] = useState<number>(0);
  const [value, setValue] = useState("");

  const [started, setStarted] = useState<null | Dayjs>(null);
  
  const [elapsed, setElapsed] = useState<null | number>(null);

  const { history, addRound, guessRate, bestTime, played } = useGuess();

  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState<number>(0);
  
  const [ended, setEnded] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  
  useEffect(() => {
    if (!ended) {
      const timer = setInterval(() => {
        setElapsed((prev) => (prev || 0) + 1)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [ended])
  
  const gameStart = (max: DifficultyLevel) => {
    setDifficulty(max)
    setSecret(Math.floor(Math.random() * numMaxByDifficulty[max]) + 1)

    setValue("")
    setMessage('Try a number between 1 and ' + numMaxByDifficulty[max] + '.')
    setAttempts(0);
    setEnded(false);
    setDialogOpen(false);
    setElapsed(0);
    setStarted(dayJS());
  }

  const verifierSupposition = () => {
    const curr = parseInt(value)
    if (isNaN(curr)) {
      setMessage('Please enter a valid number.')
      return
    }

    setAttempts(attempts + 1)

    if (curr === secret) {
      setMessage(`Hooray! You guessed the number in ${attempts + 1} attempts.`)
      setEnded(true);
      confettiFireworks();

      addRound({
        secret,
        elapsed: elapsed || 0,
        attempts: attempts + 1,
        difficulty,
        start: started ?? dayJS(),
        end: dayJS(),
      })
    } else if (curr < secret) {
      setMessage('Too low. Try a higher number.')
    } else {
      setMessage('Too high. Try a lower number.')
    }

    setValue('')
  }

  return <>
    <div className="flex flex-col items-center justify-center h-full mt-4">
      <Card className="w-[450px]">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <CardTitle>Guessing the Number</CardTitle>
            <CardDescription>
              Let's play a game! Guess the number between 1 and {numMaxByDifficulty[difficulty] || 100}.
            </CardDescription>
          </div>

          <Button onClick={() => setDialogOpen(true)} variant="outline">New game</Button>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-1">
              <Input
                type="number"
                placeholder="Try a number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && verifierSupposition()}
                disabled={ended || !secret}
              />

              <Button onClick={verifierSupposition} disabled={ended || secret === 0}>
                Enter
              </Button>
            </div>

            {message && <p className="text-left">{message}</p>}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between -mt-3.5">
          {elapsed && elapsed > 0 && secret !== 0 &&
            <Badge variant="outline">
              Elapsed time:
              {elapsed > 60 && ` ${Math.floor(elapsed / 60)} min`}
              {elapsed > 60 && elapsed % 60 !== 0 && ' '}
              {elapsed % 60} sec
            </Badge>
          }

          <Badge variant="outline">Attempts: {attempts}</Badge>
        </CardFooter>
      </Card>
      
      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <p className="text-left text-sm">
          <span className="font-semibold">Game histories</span>
          &nbsp;&bull;&nbsp;
          {history && history.length > 0 ? `${history.length} rounds` : "No rounds played yet."}
        </p>

        {history && history.length > 0 && history.map((round: GuessRound, index: number) => (
          <Card key={index} className="w-[450px]">
            <CardHeader className="p-3">
              <CardDescription className="flex flex-row justify-between -mb-1">
                Secret number: {round.secret}

                <div className="flex flex-row gap-1">
                  <Badge variant="outline">
                    <Flame className="w-3 h-3 mr-1" />
                    {round.attempts} attempts
                  </Badge>

                  <Badge variant="outline">
                    <Timer className="w-3 h-3 mr-1" />
                    {elapsedTime(round.elapsed)}
                  </Badge>

                  <Badge variant="outline">
                    <Joystick className="w-3 h-3 mr-1" />
                    {round.difficulty.charAt(0).toUpperCase() + round.difficulty.slice(1)}
                  </Badge>
                </div>
              </CardDescription> 
            </CardHeader>

            <CardFooter className="p-3 -mt-4 select-none">
              <span className="text-xs text-muted-foreground">
                {round.start.format("DD MMM")}&nbsp;&bull;&nbsp;
                {round.start.format("HH:mm:ss")}
                &nbsp;&rarr;&nbsp;
                {round.end.format("HH:mm:ss")}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>

    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="w-[450px]"> {/* h-[290px] */}
        <DialogHeader>
          <DialogTitle>New game</DialogTitle>
          <DialogDescription>Choose the range of numbers</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-1 mt-2">
          {diffLevels.map((level) => {
            const playedCount = played(level.name)
            const best = bestTime(level.name)
            const rate = guessRate(level.name)

            return (
              <Card key={level.name} className="flex flex-row justify-between items-center p-1">
                <CardHeader className="flex flex-row justify-between items-center w-full p-3">
                  <div className="flex flex-col">
                    <CardTitle className="mb-0.5">
                      {level.name.charAt(0).toUpperCase() + level.name.slice(1)}
                      <span className="font-light ml-1">
                        (1-{level.max})
                      </span>
                    </CardTitle>

                    {playedCount > 0 ? (
                      <CardDescription>
                        <Badge variant={"outline"}>
                          <Joystick className="w-3 h-3 mr-1" />
                          {playedCount} played
                        </Badge>

                        {best &&
                          <Badge variant={"outline"}>
                            <Timer className="w-3 h-3 mr-1" />
                            {best} seconds
                          </Badge>
                        }

                        {rate &&
                          <Badge variant={"outline"}>
                            <Flame className="w-3 h-3 mr-1" />
                            {rate.toFixed(2)} avg. attps
                          </Badge>
                        }
                      </CardDescription>
                    ) : (
                      <CardDescription>Never played</CardDescription>
                    )}
                  </div>
                  <Button onClick={() => gameStart(level.name)} variant="outline" size="icon">
                    <Play className="w-4 h-4" />
                  </Button>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  </>
}

const elapsedTime = (time: number): string => {
  if (time < 60) {
    return `${time} sec`
  } else {
    return `${Math.floor(time / 60)} min ${time % 60} sec`
  }
}

export default GuessPage;