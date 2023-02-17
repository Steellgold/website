import { PUBLIC_SPOTIFY_REFRESH_TOKEN, PUBLIC_SPOTIFY_CLIENT } from "$env/static/public";
import { restRequest } from "$lib/utils/request/request";
import { paramsToString } from "$lib/utils/request/request.utils";
import type { ISpotify, ISpotifyAccessToken } from "./spotify.types";

export const getAccessToken = async () => {
  const response = await restRequest<ISpotifyAccessToken>("post", "https://accounts.spotify.com/api/token", {
    headers: {
      Authorization: `Basic ${PUBLIC_SPOTIFY_CLIENT}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: paramsToString({
      grant_type: 'refresh_token',
      refresh_token: PUBLIC_SPOTIFY_REFRESH_TOKEN,
    }),
  }, ["application/json"]);

  if (!response.success) {
    return null;
  }

  return response.data.access_token;
};

export const getSpotifyListening = async () : Promise<ISpotify> => {
  const token = await getAccessToken();

  const response = await restRequest<ISpotify>("get", "https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }, ["application/json"]);

  if (!response.success) {
    return {
      item: {
        artists: [ { name: "Error" }],
        duration_ms: 0,
        is_local: false,
        name: "Aucune musique en cours",
        external_urls: { spotify: "https://open.spotify.com", },
      },
      progress_ms: 0,
      actions: { disallows: { pausing: true, resuming: true } },
      is_playing: false,
    };
  }

  return response.data;
}

export const getArtists = (artists: { name: string }[]) => {
  return artists.map((artist) => artist.name).join(", ");
};

export const getListeningText = (local: boolean, pause: boolean, artists: { name: string }[], name: string) => {
  if (local) {
    return `Écoute « ${name} » (Fichier local) ${pause ? "(Pause)" : ""}`;
  }

  return `Écoute « ${name} » de ${getArtists(artists)} ${pause ? "(Pause)" : ""}`;
};