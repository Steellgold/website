import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const playingEndpoint = async (): Promise<any> => {
  const accessToken = await getAccessToken();
  const data = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache',
  });

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export const GET = async(): Promise<NextResponse> => {
  try {
    const data = await playingEndpoint();
    const track = await data.json();
    
    if (!track || !track.is_playing) {
      return NextResponse.json({ error: "No track playing" }, { status: 404 });
    }

    return NextResponse.json(track);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}