"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/components/ui/dialog";
import { confettiFireworks } from "@/lib/components/confetti";
import { DifficultyLevel, numMaxByDifficulty, useGuess } from "@/lib/stores/guess.store";
import { Badge } from "@/lib/components/ui/badge";
import { Flame, Joystick, Play, Timer } from "lucide-react";

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
    console.log(secret, numMaxByDifficulty[max])
    setValue("")
    setMessage('Try a number between 1 and ' + max + '.')
    setAttempts(0);
    setEnded(false);
    setDialogOpen(false);
    setElapsed(0);
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
      })
    } else if (curr < secret) {
      setMessage('Too low. Try a higher number.')
    } else {
      setMessage('Too high. Try a lower number.')
    }

    setValue('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-full mt-4">
      {elapsed && elapsed > 0 && <h1 className="text-md mb-4">Elapsed time: {elapsed} seconds</h1>}

      <Card className="w-[450px]">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <CardTitle>Guessing the Number ({secret})</CardTitle>
            <CardDescription>Guess the number between 1 and 100</CardDescription>
          </div>

          <Button onClick={() => setDialogOpen(true)} variant="outline">New game</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Try a number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && verifierSupposition()}
              disabled={ended || !secret}
            />
            <p className="text-sm">{message}</p>
            {!ended && <p className="text-sm">Attempts: {attempts}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={verifierSupposition} disabled={ended}>
            Tester 
          </Button>

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
        </CardFooter>
      </Card>
    </div>
  )
}

export default GuessPage;