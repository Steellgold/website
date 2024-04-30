"use client";

import { Button } from "@/lib/components/ui/button";
import { Component } from "@/lib/components/utils/component";
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { Letter, Line } from "@/lib/types/wordle.type";
import { cn } from "@/lib/utils";
import { diffToNum } from "@/lib/wordle/utils";
import { Delete } from "lucide-react";
import { ReactElement, useState } from "react";
import ReactConfetti from "react-confetti";
import { useEventListener, useWindowSize } from "usehooks-ts";
import { EndedWordleDialog } from "../../dialogs/wordle-ended.dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip";
import Image from "next/image";
import { z } from "zod";
import { getText } from "@/lib/wordle/cryptr.server";
import { dayJS } from "@/lib/utils/dayjs/day-js";

export const WordleBoard = (): ReactElement => {
  const {
    activePartyId, getParty, addLetter,
    removeLetter, activeLineIndex, setLine,
    setActiveLineIndex, setWord, setFinishedAt,
    removeParty
  } = useWorldePartyStore();
  
  const [isFound, setIsFound] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);

  const { width, height } = useWindowSize();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const onKeyPress = (e: KeyboardEvent) => {
    if (ended) return;
    if (!activePartyId) return <></>;
    const party = getParty(activePartyId);
   
    if (party?.isReadOnly) return;
    if (alphabet.includes(e.key.toUpperCase())) addLetter(e.key.toUpperCase());
  }

  const onKeyUp = (e: KeyboardEvent) => {
    if (ended) return;  
    if (!activePartyId) return <></>;
    const party = getParty(activePartyId);
   
    if (party?.isReadOnly) return;
    if (e.key === "Backspace") removeLetter();
  }

  const onEnter = (e: KeyboardEvent) => {
    if (ended) return;
    if (!activePartyId) return;
    const party = getParty(activePartyId);
    if (party?.isReadOnly) return;

    if (e.key === "Enter") {
      if ((party?.lines ?? [])[activeLineIndex ?? 0].some((data) => data.letter === "")) return;

      fetch('/api/word/check', {
        method: "POST",
        body: JSON.stringify({
          letterArray: party?.lines ?? [],
          targetWord: party?.word ?? "",
          lineIndexToCheck: activeLineIndex?.toString()
        }),
        cache: "no-cache"
      }).then(async(response) => {
        const schema = z.object({
          success: z.boolean(),
          word: z.string().optional().nullable(),
          positions: z.array(z.object({
            letter: z.string(),
            status: z.string()
          }))
        }).safeParse(await response.json());

        if (!schema.success) {
          console.error(schema.error);
          return;
        }

        const { positions } = schema.data;

        setLine(positions as Line);
    
        if (positions.every((data) => data.status === "well-placed")) {
          setEnded(true);
          setIsFound(true);
          setFinishedAt(activePartyId);
          if (schema.data.word) setWord(schema.data.word);
        }

        if (activeLineIndex === (party?.attempts ?? 5) - 1) {
          setEnded(true);
          setWord(await getText(party?.word ?? ""));
          setFinishedAt(activePartyId);
        } else {
          setActiveLineIndex((activeLineIndex ?? 0) + 1);
        }
      });
    }
  }

  setInterval(() => {
    if (!activePartyId) return;
    const party = getParty(activePartyId);
    if (!party) return;

    if (dayJS().diff(dayJS(party.startedAt), "hours") >= 1) {
      removeParty(activePartyId);
    }
  }, 1000);

  useEventListener("keypress", onKeyPress);
  useEventListener("keyup", onKeyUp);
  useEventListener("keypress", onEnter);

  if (!activePartyId) return <></>;
  const party = getParty(activePartyId);

  return (
    <>
      {isFound && <ReactConfetti width={width} height={height} recycle={false} />}
      {ended && <EndedWordleDialog endStatus={isFound ? "win" : "lose"} open={ended} />}

      <div className="flex flex-col">
        <div className={cn(
          "border border-[#262626] rounded-lg p-5",
          "flex flex-col sm:flex-row w-full", {
            "sm:flex-col": (diffToNum(party?.difficulty ?? "five") ?? "melvynx") > 6
          }
        )}>
          <div className="p-2">
            {party?.lines?.map((line, l) => (
              <div key={l} className="flex flex-row">
                {line.map((data: Letter, i) => (
                  <>
                    {
                      (
                        party?.jokerEnabled &&
                        party.joker?.lineIndex === l &&
                        party.joker?.letterIndex === i
                      ) ? (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="relative">
                              <Case key={i} {...data} isJoker />
                              <Image
                                src="/_static/images/joker2.png"
                                alt="Joker"
                                width={64}
                                height={64}
                                quality={100}
                                className="absolute -top-2 -right-3 w-10 h-10 rotate-12"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>This letter comes from the joker card</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Case key={i} {...data} />
                    )}
                  </>
                ))}
              </div>
            ))}
          </div>

          <div className="p-2 w-full">
            {!party?.isReadOnly && (
              <>
                <Button
                  onClick={async() => {
                    const response = await fetch('/api/word/check', {
                      method: "POST",
                      body: JSON.stringify({
                        letterArray: party?.lines ?? [],
                        targetWord: party?.word ?? "",
                        lineIndexToCheck: activeLineIndex?.toString()
                      }),
                      cache: "no-cache"
                    })

                    const schema = z.object({
                      success: z.boolean(),
                      word: z.string().optional().nullable(),
                      positions: z.array(z.object({
                        letter: z.string(),
                        status: z.string()
                      }))
                    }).safeParse(await response.json());

                    if (!schema.success) {
                      console.error(schema.error);
                      return;
                    }

                    const { positions } = schema.data;

                    setLine(positions as Line);
                
                    if (positions.every((data) => data.status === "well-placed")) {
                      setEnded(true);
                      setIsFound(true);
                      if (schema.data.word) setWord(schema.data.word);
                    }

                    if (activeLineIndex === (party?.attempts ?? 5) - 1) {
                      setEnded(true);
                      setWord(await getText(party?.word ?? ""));
                    } else {
                      setActiveLineIndex((activeLineIndex ?? 0) + 1);
                    }
                  }}
                  variant={"secondary"}
                  className="w-full"
                  disabled={
                    (party?.lines ?? [])[activeLineIndex ?? 1].some((data) => data.letter === "") ||
                    activeLineIndex === (party?.attempts ?? 5)
                  }
                >
                  Valider ma réponse
                </Button>
              </>
            )}

            <div className={cn(
              "flex flex-col flex text-left justify-center gap-2", {
                "mt-5": !party?.isReadOnly
              }
            )}>
              <div className="flex flex-row gap-2">
                <div className="w-5 h-5 bg-[#20603f] mt-1"></div>
                <p>You have placed letter correctly</p>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-5 h-5 bg-[#ff6a41]/70 mt-1"></div>
                <p>Letter found but it&apos;s misplaced</p>
              </div>

              <div className="flex flex-row gap-2">
                <div className="w-5 h-5 bg-[#262626] mt-1"></div>
                <p>Letter not found</p>
              </div>

              {party?.jokerEnabled && (
                <div className="flex flex-row gap-2">
                  <div className="w-5 h-5 bg-[#853290] mt-1"></div>
                  <p>Letter from joker</p>
                </div>
              )}

              <p className="text-muted-foreground text-sm flex flex-row gap-2 items-center">
                If you put multiple same letters, only the number of this letter in the word to find will be taken into
              </p>
            </div>
          </div>
        </div>

        {!party?.isReadOnly && (
          <div className="grid grid-cols-9 gap-2 mt-3 mb-6">
            {alphabet.map((letter, i) => (
              <Button variant={"secondary"} key={i} onClick={() => addLetter(letter)}>{letter}</Button>
            ))}

            <Button variant={"secondary"} onClick={() => removeLetter()}>
              <Delete className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export const Case: Component<Letter> = ({ letter, status, isJoker }) => {
  return (
    <div className={cn(
      "border border-[2px] w-16 h-16 flex justify-center items-center", {
        "bg-[#20603f]": status == "well-placed" && !isJoker,
        "bg-[#ff6a41]/70": status === "misplaced",
        "bg-[#853290]": status === "hint" || isJoker
      }
    )}>
      {letter && letter.toUpperCase()}
    </div>
  );
}