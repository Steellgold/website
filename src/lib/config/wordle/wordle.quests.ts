import { WordleQuest } from "@/lib/types/wordle.quest.type";

export const wordleQuests: WordleQuest[] = [
  {
    id: "complete-5-games",
    description: "Complete 5 games",
    reward: 10,
    objective: 5
  },
  {
    id: "complete-10-games",
    description: "Complete 10 games",
    reward: 20,
    objective: 10
  },
  {
    id: "complete-25-games",
    description: "Complete 25 games",
    reward: 50,
    objective: 25
  },
  {
    id: "complete-50-games",
    description: "Complete 50 games",
    reward: 100,
    objective: 50
  },
  {
    id: "complete-5-games-in-less-than-10-minutes",
    description: "Complete 5 games in less than 10 minutes",
    reward: 10,
    objective: 5
  },
  {
    id: "complete-5-games-in-less-than-5-minutes",
    description: "Complete 5 games in less than 5 minutes",
    reward: 20,
    objective: 5
  },
  {
    id: "complete-5-games-in-less-than-3-minutes",
    description: "Complete 5 games in less than 3 minutes",
    reward: 50,
    objective: 5
  },
  {
    id: "complete-5-games-without-using-any-hints",
    description: "Complete 5 games without using any hints",
    reward: 100,
    objective: 5
  }
];