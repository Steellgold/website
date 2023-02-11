<script lang="ts">
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { IconBrandSpotify } from "../icons";
  
  interface Spotify {
    isPlaying: boolean;
    song?: string;
    artist?: string;
    trackUrl?: string;
    timestamps: {
      start: number;
      end: number;
    }
  }

  let spotify: Spotify = { isPlaying: false, timestamps: { start: 0, end: 0 } };
  
  onMount(async () => {
    const response = await fetch('https://api.lanyard.rest/v1/users/504392983244832780');
    if (!response.ok) throw new Error(response.statusText);
    defineSpotify(await response.json());

    setInterval(async () => {
      const response = await fetch('https://api.lanyard.rest/v1/users/504392983244832780');
      if (!response.ok) throw new Error(response.statusText);
      defineSpotify(await response.json());
    }, 5000 * 2);
  });

  function defineSpotify(data: any) {
    spotify.isPlaying = data.data.listening_to_spotify;
    spotify.song = data.data.spotify.song;
    spotify.artist = data.data.spotify.artist;
    spotify.trackUrl = "https://open.spotify.com/track/" + data.data.spotify.track_id;
    spotify.timestamps = {
      start: data.data.spotify.timestamps.start,
      end: data.data.spotify.timestamps.end
    };
  }

  let progress = 0;
  setInterval(() => {
    if (spotify.isPlaying) {
      $: progress = (Date.now() - spotify.timestamps.start) / (spotify.timestamps.end - spotify.timestamps.start) * 100;
      if (progress > 100) progress = 0;
    }
  }, 1000);
</script>

{#if spotify.isPlaying}
  <div class="mx-auto w-5/6 lg:w-2/4">
    <ul class="flex-row text-green-500 animate-pulse gap-2 p-2">
      <a href="https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP" class="flex items-center gap-2">
        <IconBrandSpotify />
        <code>Écoute « {spotify.song} » de {spotify.artist}</code>
      </a>

      <div class="pt-1 gap-2">
        <div class="w-full bg-gray-700 rounded-full h-1">
          <div class="bg-green-600 h-1 rounded-full" style="width: {progress}%"></div>
        </div>
      </div>
    </ul>
  </div>
{/if}