export type DiscordActivity = {
  name: string;
  type: number;
  _type: string;
  details: string | null;
  state: string | null;
  applicationId: string | null;
  timestamps: {
    start: number | null;
    end: number | null;
  };
  assets: {
    largeImage: string | null;
    largeText: string | null;
    smallImage: string | null;
    smallText: string | null;
  } | null;
  party: unknown | null;
};

export type DiscordPresence = {
  userId: string;
  username: string;
  discriminator: string;
  globalName: string | null;
  avatar: string | null;
  banner: string | null;
  activities: DiscordActivity[];
  status: string;
};

