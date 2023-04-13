<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, stackoverflowPlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchStackOverflow = async () => {
    try {
      let data = await getPlaying("Stack Overflow");
      if (data == null){
        stackoverflowPlaying.set(null);
      } else {
        stackoverflowPlaying.set(data);
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

{#if $stackoverflowPlaying !== null}
  <Activity
    state={$stackoverflowPlaying.state ?? ""}
    details={$stackoverflowPlaying.details}
    activity="Stack Overflow"
    isPaused={$stackoverflowPlaying.isPaused}
  />
{/if}