<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, twitchWatching } from "..";
  import { getWatching } from "../activity";

  const fetchTwitch = async () => {
    try {
      let data = await getWatching("Twitch");
      if (data == null){
        twitchWatching.set(null);
      } else {
        twitchWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchTwitch();

  let interval = setInterval(async() => {
    await fetchTwitch();
  }, 7000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $twitchWatching !== null}
  <Activity state={$twitchWatching.state} details={$twitchWatching.details} activity="Twitch" isPaused={$twitchWatching.isPaused} />
{/if}