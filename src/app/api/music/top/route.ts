import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

export const getAccessToken = async (): Promise<string> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }),
  });

  const data = await response.json();
  return data.access_token;
};

const fetchTopItems = async (endpoint: string, time_range: string, accessToken: string) => {
  const response = await fetch(`${endpoint}?time_range=${time_range}&limit=10`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  if (data.error) return null;
  return data;
};

export const GET = async (req: Request): Promise<NextResponse> => {
  const accessToken = await getAccessToken();
  
  try {
    const [shortTermTracks, mediumTermTracks, longTermTracks, shortTermArtists, mediumTermArtists, longTermArtists] = await Promise.all([
      fetchTopItems(TOP_TRACKS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "long_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "long_term", accessToken),
    ]);

    return NextResponse.json({
      tracks: {
        last_7_days: shortTermTracks.items,
        last_3_months: mediumTermTracks.items,
        all_time: longTermTracks.items,
      },
      artists: {
        last_7_days: shortTermArtists.items,
        last_3_months: mediumTermArtists.items,
        all_time: longTermArtists.items,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch top items" }, { status: 500 });
  }
};