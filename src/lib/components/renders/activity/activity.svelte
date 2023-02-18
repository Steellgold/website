<script lang="ts">
  import { IconBrandAmazon, IconBrandNetflix, IconBrandTwitch, IconBrandYoutube, IconPlayerPause } from "$lib/components/icons";

  export let activity: "Netflix" | "Prime Video" | "Twitch" | "YouTube";
  export let details: string;
  export let state: string;

  export let isPaused: boolean;

  let colors = {
    "Netflix": "text-red-600",
    "Prime Video": "text-blue-500",
    "Twitch": "text-purple-500",
    "YouTube": "text-red-500"
  }
</script>

<div class="mx-auto w-5/6 lg:w-2/4 mt-3">
  <ul class="flex flex-row items-center animate-pulse gap-2 {colors[activity]}">
    <span class="flex flex-row items-center gap-2">
      {#if isPaused}
        <IconPlayerPause />
      {:else}
        {#if activity === "Netflix"}
          <IconBrandNetflix />
        {:else if activity === "Prime Video"}
          <IconBrandAmazon />
        {:else if activity === "Twitch"}
          <IconBrandTwitch />
        {:else if activity === "YouTube"}
          <IconBrandYoutube />
        {/if}
      {/if}
    </span>

    <code>Regarde: {details} {state} {isPaused ? "(En pause)" : ""}</code>
  </ul>
</div>