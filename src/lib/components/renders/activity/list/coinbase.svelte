<script lang="ts">
  import { onDestroy } from "svelte";
  import { Activity, coinbasePlaying } from "..";
  import { getPlaying } from "../activity";
  import { UPDATE_PRESENCE_TIME } from "../../presence";

  const fetchCoinbase = async () => {
    try {
      let data = await getPlaying("Coinbase");
      if (data == null){
        coinbasePlaying.set(null);
      } else {
        coinbasePlaying.set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchCoinbase();

  let interval = setInterval(async() => {
    await fetchCoinbase();
  }, UPDATE_PRESENCE_TIME);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if $coinbasePlaying !== null}
  <Activity
    state={$coinbasePlaying.state ?? ""}
    details={$coinbasePlaying.details}
    activity="Coinbase"
    isPaused={$coinbasePlaying.isPaused}
  />
{/if}