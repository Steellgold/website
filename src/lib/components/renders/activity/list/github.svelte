<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, githubPlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

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
  }, UPDATE_PRESENCE_TIME);

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