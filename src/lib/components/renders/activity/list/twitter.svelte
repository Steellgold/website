<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, twitterPlaying } from "..";
  import { getPlaying } from "../activity";

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
  }, 7000);

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