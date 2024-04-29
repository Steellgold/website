"use client";

import { useWordleUserStore } from "@/lib/store/wordle.user.store";
import { redis } from "@/lib/wordle/utils/redis.read";
import { ReactElement, useEffect, useState } from "react";
import { QuestsLoading } from "./loading";
import { WordleUser } from "@/lib/types/wordle.user.type";
import { z } from "zod";
import { WordleQuest } from "@/lib/types/wordle.quest.type";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { Badge } from "@/lib/components/ui/badge";
import { Award, Check, X } from "lucide-react";
import { Button } from "@/lib/components/ui/button";
import { Component } from "@/lib/components/utils/component";
import { Progress } from "@/lib/components/ui/progress";

export const Quests = (): ReactElement => {
  const { user } = useWordleUserStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [quest, setQuest] = useState<WordleQuest | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (!user) return setLoading(false);
      
    const getQuests = async ({ user }: { user: WordleUser }) => {
      const quests = await redis.get(`quests:${user.id}`);

      if (!quests) {
        setIsNewUser(true);
        return setLoading(false);
      }
      
      const schema = z.array(z.object({
        id: z.string(),
        description: z.string(),
        reward: z.number(),
        objective: z.number(),
        progress: z.number().optional(),
        isCompleted: z.boolean().optional(),
      })).safeParse(quests);

      if (!schema.success) return setLoading(false);

      const firstQuest = schema.data.find((q) => !q.isCompleted) as WordleQuest; // :)
      setQuest(firstQuest);
      setLoading(false);
    };

    getQuests({ user });
  }, [user]);

  if (loading) return <QuestsLoading />;

  if (isNewUser) {
    return (
      <Alert>
        <AlertTitle>
          Welcome to quests! 🎉
        </AlertTitle>
        <AlertDescription className="flex flex-col">
          Complete quests to earn coins to buy hints and fun stuff!
          <Button
            variant={"outline"}
            size={"sm"}
            className="mt-2"
            disabled
            onClick={async() => {
              // const quest = await generateQuest({ userId: user?.id ?? "" });
              // setQuest(quest);
              // setIsNewUser(false);
              // console.log("quest", quest);
            }}
          >
            Get started &nbsp;<Award size={14} /> <Badge variant={"outline"}>Coming soon</Badge>
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if (!quest){
    return (
      <Alert>
        <AlertTitle>
          You have completed all quests! 🎉
        </AlertTitle>
        <AlertDescription>
          Wait for new quests to be added !
        </AlertDescription>
      </Alert>
    )
  }

  return <QuestComponent quest={quest} />;
}

type QuestComponentProps = {
  quest: WordleQuest
}

const QuestComponent: Component<QuestComponentProps> = ({ quest }) => {
  console.log("quest ici la maintenant tout de suite", quest);

  return (
    <Alert variant={quest.isCompleted ? "questCompleted" : "default"}>
      {quest.isCompleted ? <Check size={16} color="#2e8b57" /> : <X size={16} />}
      <AlertTitle>
        {quest.isCompleted ?
          <>Quest completed! &nbsp;<Badge variant={"success"}>+{quest.reward} 🪙</Badge></> :
          <>Complete to earn &nbsp;<Badge variant={"outline"}>{quest.reward} 🪙</Badge></>}
      </AlertTitle>
      <AlertDescription>{quest.description}</AlertDescription>
      {(quest.progress ?? 0) > 0 ? <Progress className={"mt-2"} value={quest.progress} /> : 
        <p className="text-xs text-gray-500 mt-2">Launch a game to start this quest</p>}
    </Alert>
  );
}