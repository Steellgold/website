<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, netflixWatching } from "..";
  import { getWatching } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchNetflix = async () => {
    try {
      let data = await getWatching("Netflix");
      if (data == null){
        netflixWatching.set(null);
      } else {
        netflixWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchNetflix();

  let interval = setInterval(async() => {
    await fetchNetflix();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $netflixWatching !== null}
  <Activity state={$netflixWatching.state} details={$netflixWatching.details} activity="Netflix" isPaused={$netflixWatching.isPaused} />
{/if}