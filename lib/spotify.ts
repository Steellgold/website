import type { SpotifyNowPlaying, SpotifyTrack } from "@/type/spotify";
import { SpotifyNowPlayingSchema, SpotifyTrackSchema } from "@/type/spotify";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

export const refreshAccessToken = async () => {
  try {
    const data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body.access_token);
    return data.body.access_token;
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log("Error refreshing Spotify token:", error);
    throw new Error("Failed to refresh Spotify access token");
  }
};

export const getNowPlaying = async (): Promise<SpotifyNowPlaying> => {
  try {
    await refreshAccessToken();
    const response = await spotifyApi.getMyCurrentPlayingTrack();

    if (!response.body.item) {
      return {
        track: null,
        isPlaying: false,
        progress: 0,
        duration: 0,
      };
    }

    let track: SpotifyTrack | null = null;
    try {
      track = SpotifyTrackSchema.parse({
        ...response.body.item,
        is_playing: isTrack(response.body.item) ? response.body.item.is_playing ?? response.body.is_playing ?? false : response.body.is_playing ?? false,
        progress_ms: isTrack(response.body.item) ? response.body.item.progress_ms ?? response.body.progress_ms ?? 0 : response.body.progress_ms ?? 0,
      });
    } catch (e) {
      if (process.env.NODE_ENV === "development") console.log("Track validation failed:", e);
      track = null;
    }
    const progress = response.body.progress_ms || 0;
    const duration = track?.duration_ms || 0;
    const isPlaying = response.body.is_playing || false;

    try {
      return SpotifyNowPlayingSchema.parse({
        track,
        isPlaying,
        progress,
        duration,
      });
    } catch (e) {
      if (process.env.NODE_ENV === "development") console.log("NowPlaying validation failed:", e);
      return {
        track: null,
        isPlaying: false,
        progress: 0,
        duration: 0,
      };
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.log("Error getting now playing:", error);
    return {
      track: null,
      isPlaying: false,
      progress: 0,
      duration: 0,
    };
  }
};

export const formatTime = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const getProgressPercentage = (progress: number, duration: number): number => {
  if (duration === 0) return 0;
  return (progress / duration) * 100;
};

const isTrack = (item: unknown): item is { is_playing?: boolean; progress_ms?: number } => {
  return typeof item === "object" && item !== null && "name" in item && "duration_ms" in item;
} 