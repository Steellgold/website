<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, twitterPlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchTwitter = async () => {
    try {
      let data = await getPlaying("Twitter");
      if (data == null){
        twitterPlaying.set(null);
      } else {
        twitterPlaying.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchTwitter();

  let interval = setInterval(async() => {
    await fetchTwitter();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $twitterPlaying !== null}
  <Activity
    state={$twitterPlaying.state ?? ""}
    details={$twitterPlaying.details}
    activity="Twitter"
    isPaused={$twitterPlaying.isPaused}
  />
{/if}