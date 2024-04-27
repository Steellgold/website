"use client";

import { Button } from "../../../lib/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../lib/components/ui/dialog";
import { useState, type PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { Label } from "@/lib/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select";
import { Categories, PartyDifficulty, WordCategories, WordleParty } from "@/lib/types/wordle.type";
import { difficultyToNumber, getCategoryId, getCategoryName } from "@/lib/wordle/party";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Slider } from "@/lib/components/ui/slider";
import { Switch } from "@/lib/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";

export const NewWordlePartyDialog: Component<PropsWithChildren> = ({ children }) => {
  const [category, setCategory] = useState<WordCategories>("school");
  const [difficulty, setDifficulty] = useState<PartyDifficulty>("five");
  const [attempts, setAttempts] = useState<5 | 6 | 7 | 8 | 9 | 10>(5);
  const [joker, setJoker] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const { addParty, setActiveLineIndex } = useWorldePartyStore();

  const getWord = async () => {
    setLoading(true);
    const cat = category == "random" ?
      Object.keys(Categories)[Math.floor(Math.random() * Object.keys(Categories).length)] as WordCategories
      : category;
    
    console.log(getCategoryId(category));
    const response = await fetch(`https://trouve-mot.fr/api/categorie/${getCategoryId(category)}/50`);
    const data = await response.json();

    const schema = z.array(z.object({
      name: z.string(),
      categorie: z.string()
    })).safeParse(data);

    if (!schema.success) {
      return;
    }

    const words = schema.data;
    const word = words.find((word) => word.name.length === difficultyToNumber(difficulty));

    if (!word) {
      setError(true);
      setLoading(false);
      return;
    }

    const party: WordleParty = {
      id: Math.random().toString(36).substring(7),
      category: cat,
      difficulty,
      word: word.name.replace(/é/g, "e").replace(/è/g, "e").replace(/à/g, "a").replace(/ç/g, "c"),
      startedAt: dayJS().toISOString(),
      attempts,
      jokerUsed: !joker,
      activeLineIndex: 0
    };
    
    setActiveLineIndex(0);
    addParty(party);
    setLoading(false);
  }

  return (
    <Dialog onOpenChange={() => {
      setCategory("school");
      setDifficulty("five");
      setAttempts(5);
      setJoker(false);
    }}>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start a new Wordle party</DialogTitle>
          <DialogDescription>Ooh, a new party! 🎉</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-3 sm:-mt-0">
          <div className="flex flex-col space-y-2">
            <Alert className="flex items-center justify-between">
              <Label>Category:</Label>

              <Select defaultValue="random" onValueChange={(value) => {
                console.log(value, category);
                setCategory(value as WordCategories);
                console.log(category);
              }}>
                <SelectTrigger className="w-[60%]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent defaultValue="random">
                  {Object.keys(Categories).map((category) => (
                    <SelectItem key={category} value={category}>
                      {getCategoryName(category as WordCategories)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Alert>
          </div>

          <div className="flex flex-col space-y-2">
            <Alert className="flex items-center justify-between">
              <Label>Choose the difficulty:</Label>
              <Select defaultValue="five" onValueChange={(value) => setDifficulty(value as PartyDifficulty)}>
                <SelectTrigger className="w-[60%]">
                  <SelectValue placeholder="Select a difficulty" />
                </SelectTrigger>
                <SelectContent defaultValue="five">
                  <SelectItem value="five">Five letters</SelectItem>
                  <SelectItem value="six">Six letters</SelectItem>
                  <SelectItem value="seven">Seven letters</SelectItem>
                  <SelectItem value="eight">Eight letters</SelectItem>
                  <SelectItem value="nine">Nine letters</SelectItem>
                  <SelectItem value="ten">Ten letters</SelectItem>
                </SelectContent>
              </Select>
            </Alert>
          </div>

          <div>
            <Alert className="flex flex-col space-y-3">
              <Label>Choose the number of attempts (Selected: {attempts}):</Label>
              <Slider
                defaultValue={[5]}
                max={10}
                min={5}
                step={1}
                className="w-full"
                onValueChange={(value) => setAttempts(value[0] as 5 | 6 | 7 | 8 | 9 | 10)}
              />
            </Alert>
          </div>

          <div className="flex flex-col space-y-2">
            <Alert className="flex items-center justify-between">
              <div>
                <Label htmlFor="joker-switch">Enable Joker:</Label>
                <p className="text-muted-foreground mr-2">
                  The Joker allows you to reveal a good placed letter in the word, but you can only use it once.
                </p>
              </div>
              <Switch
                id="joker-switch"
                checked={joker}
                onCheckedChange={(value) => setJoker(value)}
              />
            </Alert>
          </div>

          {error && (
            <Alert variant={"destructive"}>
              <AlertTitle>Oops! An error occurred</AlertTitle>
              <AlertDescription>
                We couldn&apos;t find a word with the selected parameters. Please try again.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <DialogFooter className="sm:mt-3">
          <Button
            onClick={async () => {
              const word = await getWord();
              console.log(word);
            }}
            disabled={loading}
          >
            {loading && <><Loader2 className="w-4 h-4 animate-spin" /> &nbsp;</>}
            Start party
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};