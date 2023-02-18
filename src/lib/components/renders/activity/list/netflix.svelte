<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, netflixWatching } from "..";
  import { getWatching } from "../activity";

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
  }, 7000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $netflixWatching !== null}
  <Activity state={$netflixWatching.state} details={$netflixWatching.details} activity="Netflix" isPaused={$netflixWatching.isPaused} />
{/if}