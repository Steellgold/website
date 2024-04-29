"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { ReactElement } from "react";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { useEffect, useState } from "react";
import { Button } from "@/lib/components/ui/button";
import { ArrowLeft, Spade, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { getText } from "../../../../lib/wordle/cryptr.server";
import { z } from "zod";
import { Line } from "@/lib/types/wordle.type";

export const WordleInfoActions = (): ReactElement => {
  const {
      activePartyId, activeLineIndex, getParty,
      isJokerUsed, setJokerUsed, setLose,
      setLine, setJoker, removeParty,
      setActivePartyId, setWord
  } = useWorldePartyStore();
  
  const [_, setTimer] = useState<string>(dayJS().toISOString());

  useEffect(() => {
    const interval = setInterval(() => setTimer((dayJS().toISOString())), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!activePartyId) return <></>;
  const party = getParty(activePartyId);

  if (party?.isReadOnly) {
    return (
      <div className="mt-3 flex justify-between gap-3">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant={"outline"}>
              <Trash2 className="h-4 w-4 mr-1" />
              Remove party from history
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <p>Are you sure you want to remove this party?</p>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => removeParty(activePartyId)}>Yes</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className="flex gap-3">
          {party?.jokerEnabled ? (
            <>
              {isJokerUsed(activePartyId) ? (
                <Button variant={"hintDisabled"} onClick={() => setJokerUsed(activePartyId)}>
                  <Spade className="h-4 w-4 mr-1" />
                  Joker used
                </Button>
              ) : (
                <Button variant={"hint"} onClick={() => setJokerUsed(activePartyId)}>
                  <Spade className="h-4 w-4 mr-1" />
                  Use joker
                </Button>
              )}
            </>
          ) : <Button variant={"hintDisabled"}>Joker not enabled</Button>}

          <Button onClick={() => setActivePartyId(null)}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Return home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 flex justify-end gap-3">
      {party?.jokerEnabled && (
        <>
          {isJokerUsed(activePartyId) ? (
            <Button variant={"hintDisabled"} onClick={() => setJokerUsed(activePartyId)}>
              <Spade className="h-4 w-4 mr-1" />
              Joker used
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger disabled={isJokerUsed(activePartyId)}>
                <Button variant={"hint"} disabled={isJokerUsed(activePartyId)}>
                  <Spade className="h-4 w-4 mr-1" />
                  {isJokerUsed(activePartyId) ? "Joker used" : "Use joker"}
                </Button>
              </AlertDialogTrigger>
          
              <AlertDialogContent>
                <p>If you use the joker, you will get a random letter for the word. Are you sure you want to use it?</p>            
          
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={async() => {
                    const response = await fetch(`/api/word/joker`, {
                      method: "POST",
                      body: JSON.stringify({
                        letterArray: party?.lines ?? [],
                        targetWord: party?.word ?? "",
                        lineIndexToCheck: activeLineIndex?.toString()
                      })
                    });

                    const schema = z.object({
                      success: z.boolean(),
                      line: z.array(z.object({
                        letter: z.string(),
                        status: z.string()
                      }))
                    }).safeParse(await response.json());
                    
                    if (!schema.success) return;
                    const jokerLetter = schema.data.line as Line;
                    
                    setLine(jokerLetter);
                    setJokerUsed(activePartyId);
                    setJoker(activePartyId, activeLineIndex ?? 0, jokerLetter.findIndex((data) => data.status == "hint"));
                  }}>Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </>
      )}

      <AlertDialog>
        <AlertDialogTrigger>
          <Button>
            <Trash2 className="h-4 w-4 mr-1" />
            Abandon party
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <p>Are you sure you want to remove this party?</p>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={async() => {
              setWord(await getText(party?.word ?? ""));
              setLose(activePartyId, "abandon")
            }}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}