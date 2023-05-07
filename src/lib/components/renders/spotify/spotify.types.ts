export interface ISpotify {
  item: {
    artists: {
      name: string;
    }[];

    duration_ms: number;
    is_local: boolean;
    name: string;

    external_urls: {
      spotify: string;
    }
  }

  progress_ms: number;

  actions: {
    disallows: {
      pausing: boolean;
      resuming: boolean;
    }
  }

  is_playing: boolean;
}

export interface ISpotifyAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}