<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, disneyplusWatching } from "..";
  import { getWatching } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchDisneyPlus = async () => {
    try {
      let data = await getWatching("DisneyPlus");
      if (data == null){
        disneyplusWatching.set(null);
      } else {
        disneyplusWatching.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchDisneyPlus();

  let interval = setInterval(async() => {
    await fetchDisneyPlus();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $disneyplusWatching !== null}
  <Activity state={$disneyplusWatching.state ?? ""} details={$disneyplusWatching.details} activity="DisneyPlus" isPaused={$disneyplusWatching.isPaused} />
{/if}