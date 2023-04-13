<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, twitchWatching } from "..";
  import { getWatching } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

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
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $twitchWatching !== null}
  <Activity state={$twitchWatching.state} details={$twitchWatching.details} activity="Twitch" isPaused={$twitchWatching.isPaused} />
{/if}