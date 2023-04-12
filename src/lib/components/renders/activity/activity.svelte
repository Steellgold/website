<script lang="ts">
  import {
    IconBrandAmazon,
    IconBrandFigma,
    IconBrandNetflix,
    IconBrandTwitch,
    IconBrandYoutube,
    IconBrandVisualStudioCode,
    IconPlayerPause
  } from "$lib/components/icons";
  import type { ActivityList } from "./activity.types";

  export let activity: ActivityList;
  export let details: string;
  export let state: string;

  let idling = [
    "Idling",
    "Idle",
    "Viewing Recent"
  ];

  export let isPaused: boolean;

  let colors = {
    "Netflix": "text-red-500",
    "Prime Video": "text-yellow-500",
    "Twitch": "text-purple-500",
    "YouTube": "text-red-500",
    "Figma": "text-pink-500",
    "Visual Studio Code": "text-blue-500"
  };
</script>

<div class="mx-auto w-5/6 lg:w-2/4 mt-3">
  <ul class="flex flex-row items-center gap-2 {colors[activity]}">
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
        {:else if activity === "Figma"}
          <IconBrandFigma />
        {:else if activity === "Visual Studio Code"}
          <IconBrandVisualStudioCode />
        {/if}
      {/if}
    </span>

    {#if ["Figma", "Visual Studio Code"].includes(activity)}
      {#if idling.includes(details)}
        <code>Ne fait rien sur <b>{activity}</b> actuellement</code>
      {:else}
        <code>{details} {state}</code>
      {/if}
    {:else}
      <code>Regarde: {details} {state} {isPaused ? "(En pause)" : ""}</code>
    {/if}
  </ul>
</div>