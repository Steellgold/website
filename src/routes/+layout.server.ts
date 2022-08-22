/** @type {import('./$types').PageServerLoad} */

export async function load() {

  const response = await fetch('https://api.lanyard.rest/v1/users/504392983244832780');
  const data = await response.json();
  
  return {
    spotify : {
      listening: data.data.listening_to_spotify ?? false,
      trackId : data.data.spotify.track_id ?? null,
      trackName : data.data.spotify.song ?? null,
      artistName : data.data.spotify.artist ?? null,
      albumName : data.data.spotify.album ?? null,
      albumCover : data.data.spotify.album_art_url ?? null,
    },

    user: {
      avatar: "https://cdn.discordapp.com/avatars/" + data.data.discord_user.id +  "/" + data.data.discord_user.avatar +  ".png",
      status: data.data.discord_status,
    }
  };
}