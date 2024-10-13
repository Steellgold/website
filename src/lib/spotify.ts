const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
export const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
export const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
export const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export const getAccessToken = async (): Promise<any> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
    cache: 'no-cache',
  });

  const data = await response.json();
  return data.access_token;
}

export const fetchTopItems = async (endpoint: string, time_range: string, accessToken: string) => {
  const response = await fetch(`${endpoint}?time_range=${time_range}&limit=10`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  if (data.error) return null;
  return data;
};

export const getStatsSpotify = async (time_range: "7days" | "3months" | "alltime" | "all", type: "tracks" | "artists" | "all") => {
  const accessToken = await getAccessToken();
  
  if (type === "tracks" && time_range === "7days") {
    const shortTermTracks = await fetchTopItems(TOP_TRACKS_ENDPOINT, "short_term", accessToken);
    return shortTermTracks.items;
  }

  if (type === "tracks" && time_range === "3months") {
    const mediumTermTracks = await fetchTopItems(TOP_TRACKS_ENDPOINT, "medium_term", accessToken);
    return mediumTermTracks.items;
  }

  if (type === "tracks" && time_range === "alltime") {
    const longTermTracks = await fetchTopItems(TOP_TRACKS_ENDPOINT, "long_term", accessToken);
    return longTermTracks.items;
  }

  if (type === "artists" && time_range === "7days") {
    const shortTermArtists = await fetchTopItems(TOP_ARTISTS_ENDPOINT, "short_term", accessToken);
    return shortTermArtists.items;
  }

  if (type === "artists" && time_range === "3months") {
    const mediumTermArtists = await fetchTopItems(TOP_ARTISTS_ENDPOINT, "medium_term", accessToken);
    return mediumTermArtists.items;
  }

  if (type === "artists" && time_range === "alltime") {
    const longTermArtists = await fetchTopItems(TOP_ARTISTS_ENDPOINT, "long_term", accessToken);
    return longTermArtists.items;
  }

  if (type === "tracks" && time_range === "all") {
    const [shortTermTracks, mediumTermTracks, longTermTracks] = await Promise.all([
      fetchTopItems(TOP_TRACKS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "long_term", accessToken),
    ]);

    return {
      last_7_days: shortTermTracks.items,
      last_3_months: mediumTermTracks.items,
      all_time: longTermTracks.items,
    };
  }

  if (type === "artists" && time_range === "all") {
    const [shortTermArtists, mediumTermArtists, longTermArtists] = await Promise.all([
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "long_term", accessToken),
    ]);

    return {
      last_7_days: shortTermArtists.items,
      last_3_months: mediumTermArtists.items,
      all_time: longTermArtists.items,
    };
  }

  if (type === "all" && time_range === "all") {
    const [shortTermTracks, mediumTermTracks, longTermTracks, shortTermArtists, mediumTermArtists, longTermArtists] = await Promise.all([
      fetchTopItems(TOP_TRACKS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_TRACKS_ENDPOINT, "long_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "short_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "medium_term", accessToken),
      fetchTopItems(TOP_ARTISTS_ENDPOINT, "long_term", accessToken),
    ]);


    return {
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
    };
  }
};

export const getNowPlaying = async () => {
  const accessToken = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-cache',
  });

  const data = await response.json();
  return data;
}