"use client";

import { useState, type PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { Label } from "@/lib/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select";
import { Categories, PartyDifficulty, WordCategories, WordleParty } from "@/lib/types/wordle.type";
import { getCategoryName } from "@/lib/wordle/party";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { Slider } from "@/lib/components/ui/slider";
import { Switch } from "@/lib/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/lib/components/ui/dialog";
import { Button } from "@/lib/components/ui/button";

export const NormalNewPartyContent: Component<PropsWithChildren> = ({ children }) => {
  const [category, setCategory] = useState<WordCategories>("random");
  const [difficulty, setDifficulty] = useState<PartyDifficulty>("five");
  const [attempts, setAttempts] = useState<5 | 6 | 7 | 8 | 9 | 10>(5);
  const [showCategory, setShowCategory] = useState<boolean>(true);

  const [joker, setJoker] = useState<boolean>(false);
  const [definition, setDefinition] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const { addParty, setActiveLineIndex } = useWorldePartyStore();

  const getWord = async () => {
    setLoading(true);
    const cat =  category == "random"
      ? Object.keys(Categories)[Math.floor(Math.random() * 27)] as WordCategories
      : category;

    const response = await fetch(`/api/word/gen?category=${cat}&difficulty=${difficulty}`, {
      cache: "no-cache"
    });

    const data = await response.json();

    const schema = z.object({
      success: z.boolean(),
      word: z.string()
    }).safeParse(data);

    if (!schema.success) {
      return;
    }

    if (!schema.data.success) {
      setError(true);
      setLoading(false);
      return;
    }

    const party: WordleParty = {
      id: Math.random().toString(36).substring(7),
      category: cat,
      difficulty,
      word: schema.data.word,
      startedAt: dayJS().toISOString(),
      attempts,
      jokerEnabled: joker,
      jokerUsed: false,
      activeLineIndex: 0,
      showCategory,
      isReadOnly: false
    };
    
    setActiveLineIndex(0);
    addParty(party);
    setLoading(false);
  }

  return (
    <div className="mt-5">
      <DialogHeader className="mb-3">
        <DialogTitle>Start a new Wordle party</DialogTitle>
        <DialogDescription>Ooh, a new party! 🎉</DialogDescription>
      </DialogHeader>

      <div className="space-y-4 mt-3 sm:-mt-0">
        <div className="flex flex-col space-y-2">
          <Alert className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <Label>Category:</Label>
                
              <Select defaultValue="random" onValueChange={(value) => {
                setCategory(value as WordCategories);
              }}>
                <SelectTrigger className="w-[60%]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                
                <SelectContent defaultValue="random">
                  {Object.keys(Categories).map((category) => (
                    <SelectItem key={category} value={category}>
                      {getCategoryName(category as WordCategories).name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
              
            {category == "random" && (
              <Alert className="flex items-center justify-between">
                <Label>Show the category ?</Label>
                
                <Switch
                  checked={showCategory}
                  onCheckedChange={(value) => setShowCategory(value)}
                />
              </Alert>
            )}
          </Alert>
        </div>

        <div className="flex flex-col space-y-2">
          <Alert className="flex items-center justify-between">
            <Label>Difficulty:</Label>
            
            <Select defaultValue="five" onValueChange={(value) => setDifficulty(value as PartyDifficulty)}>
              <SelectTrigger className="w-[60%]">
                <SelectValue placeholder="Difficulty" />
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
            <Label>Number of attempts ({attempts}):</Label>
            
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
          <Alert className="flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="joker-switch">🃏 Enable Joker</Label>
                
                <p className="text-muted-foreground mr-3 sm:text-base">
                  Reveal a good placed letter in the word, you can only use it <strong>once</strong>.
                </p>
              </div>
              
              <Switch
                id="joker-switch"
                checked={joker}
                onCheckedChange={(value) => setJoker(value)}
              />
            </div>
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

      <DialogFooter className="mt-3">
        <Button disabled={loading} onClick={() => getWord()}>
          {loading && <><Loader2 className="w-4 h-4 animate-spin" /> &nbsp;</>}
          Start party
        </Button>
      </DialogFooter>
    </div>
  );
};