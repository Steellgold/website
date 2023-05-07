<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, vscodePlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchTwitch = async () => {
    try {
      let data = await getPlaying("Visual Studio Code");
      if (data == null){
        vscodePlaying.set(null);
      } else {
        vscodePlaying.set(data);
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

{#if $vscodePlaying !== null}
  <Activity
    state={$vscodePlaying.state}
    details={$vscodePlaying.details}
    activity="Visual Studio Code"
    isPaused={$vscodePlaying.isPaused}
  />
{/if}