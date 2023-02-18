<script lang="ts">
  import { spotifyListening as spotify } from "$lib/components/renders/spotify";
  import { IconBrandSpotify, IconPlayerPause } from "$lib/components/icons";
  import { getSpotifyListening, getListeningText } from "./spotify.utils";
  import { onDestroy } from "svelte";

  const fetchSpotify = async () => {
    try {
      let data = await getSpotifyListening();
      if (data.item.name == "Aucune musique en cours"){
        spotify.set(null);
      } else {
        spotify.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchSpotify();

  let interval = setInterval(async() => {
    await fetchSpotify();
  }, 7000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $spotify !== null}
  <div class="mx-auto w-5/6 lg:w-2/4 mt-3">
    <a class="flex flex-row items-center animate-pulse gap-2 text-green-500" href="{$spotify.item.external_urls.spotify ?? "#"}">
      {#if $spotify.is_playing && $spotify.actions.disallows.resuming }
        <IconBrandSpotify /> <code>{ getListeningText($spotify.item.is_local, false, $spotify.item.artists, $spotify.item.name) }</code>
      {:else}
        <IconPlayerPause /> <code>{ getListeningText($spotify.item.is_local, true, $spotify.item.artists, $spotify.item.name) }</code>
      {/if}
    </a>

    <div class="pt-1 gap-2">
      <div class="w-full bg-gray-700 rounded-full h-1">
        <div class="bg-green-600 h-1 rounded-full animate-pulse transition-all" style="width: {$spotify.progress_ms / $spotify.item.duration_ms * 100}%"></div>
      </div>
    </div>
  </div>
{/if}