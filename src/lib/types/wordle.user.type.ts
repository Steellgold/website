export type WordleUser = {
  name: string;
  id: string;
  avatar?: string;

  isOnline: boolean;
  isPlaying: boolean;
};