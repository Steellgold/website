<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, vscodePlaying } from "..";
  import { getPlaying } from "../activity";

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
  }, 7000);

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