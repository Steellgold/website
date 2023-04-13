<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, githubPlaying } from "..";
  import { getPlaying } from "../activity";

  const fetchStackOverflow = async () => {
    try {
      let data = await getPlaying("GitHub");
      if (data == null){
        githubPlaying.set(null);
      } else {
        githubPlaying.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchStackOverflow();

  let interval = setInterval(async() => {
    await fetchStackOverflow();
  }, 7000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $githubPlaying !== null}
  <Activity
    state={$githubPlaying.state ?? ""}
    details={$githubPlaying.details}
    activity="GitHub"
    isPaused={$githubPlaying.isPaused}
  />
{/if}