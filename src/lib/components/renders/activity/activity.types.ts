export type IActivity = {
  details: string;
  name: string;
  state: string;

  created_at: number | null;
  end_at?: number | null;

  isPaused: boolean;
}

export type ActivityList = "Netflix" | "Twitch" | "Prime Video" | "YouTube" | "Figma" | "Visual Studio Code";
export type PlayingList = "Figma" | "Visual Studio Code";
export type WatchingList = "Netflix" | "Twitch" | "Prime Video" | "YouTube";