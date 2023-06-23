export type IActivity = {
  details: string;
  name: string;
  state: string;

  created_at: number | null;
  end_at?: number | null;

  isPaused: boolean;
}

export type ActivityList =
  "Netflix"
  | "Twitch"
  | "Prime Video"
  | "YouTube"
  | "Figma"
  | "Visual Studio Code"
  | "Stack Overflow"
  | "GitHub"
  | "Coinbase"
  | "Twitter"
  | "Instagram"
  | "DisneyPlus"
  | "CanalPlus";
  
export type PlayingList = "Figma" | "Visual Studio Code" | "Stack Overflow" | "GitHub" | "Coinbase" | "Twitter" | "Instagram";
export type WatchingList = "Netflix" | "Twitch" | "Prime Video" | "YouTube" | "DisneyPlus" | "CanalPlus";