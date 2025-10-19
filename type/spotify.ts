import { z } from "zod";

export type SpotifyTrack = {
  id: string;
  name: string;
  artists: Array<{
    id: string;
    name: string;
  }>;
  album: {
    id: string;
    name: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  is_playing?: boolean;
  progress_ms?: number;
}

export type SpotifyNowPlaying = {
  track: SpotifyTrack | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
}

export type SpotifyError = {
  error: string;
  message: string;
}

export const SpotifyTrackSchema = z.object({
  id: z.string(),
  name: z.string(),
  artists: z.array(z.object({
    id: z.string(),
    name: z.string(),
  })),
  album: z.object({
    id: z.string(),
    name: z.string(),
    images: z.array(z.object({
      url: z.url(),
      width: z.number(),
      height: z.number(),
    })),
  }),
  external_urls: z.object({
    spotify: z.url(),
  }),
  duration_ms: z.number(),
  is_playing: z.boolean().optional(),
  progress_ms: z.number().optional(),
});

export const SpotifyNowPlayingSchema = z.object({
  track: SpotifyTrackSchema.nullable(),
  isPlaying: z.boolean(),
  progress: z.number(),
  duration: z.number(),
}); 