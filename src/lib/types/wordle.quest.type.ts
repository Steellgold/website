export type WordleQuest = {
  id: WordleQuestIDs;
  description: string;
  reward: number;
  objective: number;

  progress?: number;  
  isCompleted?: boolean;
}

export type WordleQuestIDs = 
  "complete-5-games" |
  "complete-10-games" |
  "complete-25-games" |
  "complete-50-games" |
  "complete-100-games" |
  "complete-250-games" |
  "complete-500-games" |
  "complete-1000-games" |
  "complete-5-games-in-less-than-10-minutes" |
  "complete-5-games-in-less-than-5-minutes" |
  "complete-5-games-in-less-than-3-minutes" |
  "complete-5-games-without-using-any-hints";