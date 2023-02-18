<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, youtubeWatching } from "..";
  import { getWatching } from "../activity";

  const fetchYouTube = async () => {
    try {
      let data = await getWatching("YouTube");
      if (data == null){
        youtubeWatching.set(null);
      } else {
        youtubeWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchYouTube();

  let interval = setInterval(async() => {
    await fetchYouTube();
  }, 7000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $youtubeWatching !== null}
  <Activity state={$youtubeWatching.state} details={$youtubeWatching.details} activity="YouTube" isPaused={$youtubeWatching.isPaused} />
{/if}