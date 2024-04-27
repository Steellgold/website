"use client";

import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { ReactElement } from "react";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { useEffect, useState } from "react";
import { Button } from "@/lib/components/ui/button";
import { Spade, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";

export const WordleInfoActions = (): ReactElement => {
  const { activePartyId, getParty, isJokerUsed, setJokerUsed, setLose } = useWorldePartyStore();
  const [timer, setTimer] = useState<string>(dayJS().toISOString());

  useEffect(() => {
    const interval = setInterval(() => setTimer((dayJS().toISOString())), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!activePartyId) return <></>;

  return (
    <div className="mt-3 flex justify-end gap-3">
      {!isJokerUsed(activePartyId) && (
        <AlertDialog>
          <AlertDialogTrigger disabled={isJokerUsed(activePartyId)}>
            <Button disabled={isJokerUsed(activePartyId)}>
              <Spade className="h-4 w-4 mr-1" />
              {isJokerUsed(activePartyId) ? "Joker used" : "Use joker"}
            </Button>
          </AlertDialogTrigger>
      
          <AlertDialogContent>
            <p>If you use the joker, you will get a random letter for the word. Are you sure you want to use it?</p>            
      
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setJokerUsed(activePartyId)}>Yes</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
            <AlertDialogAction onClick={() => setLose(activePartyId, "abandon")}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}