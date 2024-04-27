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

export const NewWordlePartyDialog: Component<PropsWithChildren> = ({ children }) => {
  const [category, setCategory] = useState<WordCategories>("school");
  const [difficulty, setDifficulty] = useState<PartyDifficulty>("five");
  
  const [loading, setLoading] = useState<boolean>(false);

  const { addParty } = useWorldePartyStore();

  const getWord = async () => {
    setLoading(true);
    const cat = category == "random" ?
      Object.keys(Categories)[Math.floor(Math.random() * Object.keys(Categories).length)] as WordCategories
      : category;
    
    const response = await fetch(`https://trouve-mot.fr/api/sizemin/${getCategoryId(category)}/50`);
    const data = await response.json();

    const schema = z.array(z.object({
      name: z.string(),
      categorie: z.string()
    })).safeParse(data);

    if (!schema.success) {
      console.error(schema.error);
      return;
    }

    const words = schema.data;
    const word = words.find((word) => word.name.length === difficultyToNumber(difficulty));
    console.log("exact", word);

    if (!word) {
      console.error("No word found");
      return;
    }

    const party: WordleParty = {
      id: Math.random().toString(36).substring(7),
      category: cat,
      difficulty,
      word: word.name,
      startedAt: dayJS().toISOString(),
      jokerUsed: false,
      lines: [],
    };

    addParty(party);
    setLoading(false);
  }

  return (
    <Dialog>
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
            <Label>Select a category, or choose random:</Label>

            <Select defaultValue="random" onValueChange={(value) => setCategory(value as WordCategories)}>
              <SelectTrigger className="w-full">
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
          </div>

          <div className="flex flex-col space-y-2">
            <Label>Choose the difficulty:</Label>
            <Select defaultValue="five" onValueChange={(value) => setDifficulty(value as PartyDifficulty)}>
              <SelectTrigger className="w-full">
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
          </div>
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