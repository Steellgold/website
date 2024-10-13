import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const playingEndpoint = async (): Promise<Response> => {
  const accessToken = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache',
  });
}

export const GET = async(): Promise<NextResponse> => {
  const data = await playingEndpoint();
  const track = await data.json();

  try {
    if (!track || !track.is_playing) {
      return NextResponse.json({ error: "No track playing" }, { status: 404 });
    }

    return NextResponse.json(track);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}