<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import {IconBrandSpotify } from "$lib/components/icons";
  import type { ISpotify } from "./spotify.types";

  let spotify: ISpotify = { timestamps: { start: 0, end: 0 } };
  let interval: any;

  const tick = async () => {
    const response = await fetch('https://api.lanyard.rest/v1/users/504392983244832780');
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    if (data.data.spotify) {
      spotify = {
        song: data.data.spotify.song,
        artist: data.data.spotify.artist,
        trackUrl: "https://open.spotify.com/track/" + data.data.spotify.track_id,
        timestamps: {
          start: data.data.spotify.timestamps.start,
          end: data.data.spotify.timestamps.end
        }
      };
    } else {
      spotify = { timestamps: { start: 0, end: 0 } };
    }
  }

  $: interval = setInterval(tick, 5000);

  tick();

  onDestroy(() => {
    clearInterval(interval);
  });

  let progress = 0;
  setInterval(() => {
    if (spotify.song !== undefined) {
      progress = (Date.now() - spotify.timestamps.start) / (spotify.timestamps.end - spotify.timestamps.start) * 100;
      if (progress > 100) progress = 0;
    }
  }, 1000);
</script>

{#if interval !== null}
  {#if spotify.song !== undefined}
    <div class="mx-auto w-5/6 lg:w-2/4">
      <ul class="flex-row text-green-500 animate-pulse gap-2 pt-3">
        <a href={spotify.trackUrl} class="flex items-center gap-2">
          <IconBrandSpotify />
          <code>Écoute « {spotify.song} » de {spotify.artist}</code>
        </a>

        <div class="pt-1 gap-2">
          <div class="w-full bg-gray-700 rounded-full h-1">
            <div class="bg-green-600 h-1 rounded-full animate-pulse transition-all" style="width: {progress}%"></div>
          </div>
        </div>
      </ul>
    </div>
  {/if}
{/if}