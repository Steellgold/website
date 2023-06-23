<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, canalplusWatching } from "..";
  import { getWatching } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchCanalPlus = async () => {
    try {
      let data = await getWatching("CanalPlus");
      if (data == null){
        canalplusWatching.set(null);
      } else {
        canalplusWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchCanalPlus();

  let interval = setInterval(async() => {
    await fetchCanalPlus();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $canalplusWatching !== null}
  <Activity state={$canalplusWatching.state ?? ""} details={$canalplusWatching.details} activity="CanalPlus" isPaused={$canalplusWatching.isPaused} />
{/if}