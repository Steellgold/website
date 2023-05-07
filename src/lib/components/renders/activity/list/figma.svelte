<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, figmaPlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchFigma = async () => {
    try {
      let data = await getPlaying("Figma");
      if (data == null){
        figmaPlaying.set(null);
      } else {
        figmaPlaying.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchFigma();

  let interval = setInterval(async() => {
    await fetchFigma();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $figmaPlaying !== null}
  <Activity state={$figmaPlaying.state ?? ""} details={$figmaPlaying.details} activity="Figma" isPaused={$figmaPlaying.isPaused} />
{/if}