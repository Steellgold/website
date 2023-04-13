<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, primeVideoWatching } from "..";
  import { getWatching } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchPrimeVideo = async () => {
    try {
      let data = await getWatching("Prime Video");
      if (data == null){
        primeVideoWatching.set(null);
      } else {
        primeVideoWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchPrimeVideo();

  let interval = setInterval(async() => {
    await fetchPrimeVideo();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $primeVideoWatching !== null}
  <Activity state={$primeVideoWatching.state ?? ""} details={$primeVideoWatching.details} activity="Prime Video" isPaused={$primeVideoWatching.isPaused} />
{/if}