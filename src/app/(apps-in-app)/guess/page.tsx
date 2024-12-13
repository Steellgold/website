"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card";
import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/lib/components/ui/dialog";
import { confettiFireworks } from "@/lib/components/confetti";

const GuessPage = () => {
  const [secret, setSecret] = useState<number>(0);
  const [value, setValue] = useState("");

  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState<number>(0);
  
  const [ended, setEnded] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  
  useEffect(() => {
    gameStart(100)
  }, [])
  
  const gameStart = (max: number) => {
    setSecret(Math.floor(Math.random() * max) + 1)
    setValue("")
    setMessage('Try a number between 1 and ' + max + '.')
    setAttempts(0);
    setEnded(false);

    setDialogOpen(false);
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
    } else if (curr < secret) {
      setMessage('Too low. Try a higher number.')
    } else {
      setMessage('Too high. Try a lower number.')
    }

    setValue('')
  }

  return (
    <div className="flex items-center justify-center h-full mt-4">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Guessing the Number</CardTitle>
          <CardDescription>Guess the number between 1 and 100</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Try a number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && verifierSupposition()}
              disabled={ended}
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
            <DialogTrigger asChild>
              <Button variant="outline">New game</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>New game</DialogTitle>
                <DialogDescription>Choose the range of numbers</DialogDescription>
              </DialogHeader>

              <div className="flex space-x-1 mt-4">
                <Button onClick={() => gameStart(100)} variant={"easy"}>1-100</Button>
                <Button onClick={() => gameStart(1000)} variant={"medium"}>1-1000</Button>
                <Button onClick={() => gameStart(10000)} variant={"hard"}>1-10000</Button>
              </div>              
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}

export default GuessPage;