<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, instagramPlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchInstagram = async () => {
    try {
      let data = await getPlaying("Instagram");
      if (data == null){
        instagramPlaying.set(null);
      } else {
        instagramPlaying.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchInstagram();

  let interval = setInterval(async() => {
    await fetchInstagram();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $instagramPlaying !== null}
  <Activity
    state={$instagramPlaying.state ?? ""}
    details={$instagramPlaying.details}
    activity="Instagram"
    isPaused={$instagramPlaying.isPaused}
  />
{/if}