"use server";

import { wordleQuests } from "@/lib/config/wordle/wordle.quests";
import { WordleQuest } from "@/lib/types/wordle.quest.type";
import { redis } from "@/lib/wordle/utils/redis";

type generateQuestProps = {
  userId: string;
}

export const generateQuest = async ({ userId }: generateQuestProps): Promise<WordleQuest | null> => {
  const quests = await redis.get(`quests:${userId}`);

  if (!quests) {
    const newQuest = wordleQuests[Math.floor(Math.random() * wordleQuests.length)];
    await redis.set(`quests:${userId}`, JSON.stringify([{
      ...newQuest,
      progress: 0,
    }]));
    return {
      ...newQuest,
      progress: 0,
    };
  }

  return null;
}