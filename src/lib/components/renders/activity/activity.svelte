<script lang="ts">
  import {
    IconBrandAmazon,
    IconBrandFigma,
    IconBrandNetflix,
    IconBrandTwitch,
    IconBrandYoutube,
    IconBrandVisualStudioCode,
    IconPlayerPause,
    IconStackOverflow,
    IconBrandGithub,
    IconBrandCoinbase,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandDisneyPlus
  } from "$lib/components/icons";
  import type { ActivityList } from "./activity.types";

  export let activity: ActivityList;
  export let details: string;
  export let state: string;

  let idling = [
    "Idling",
    "Idle",
    "Viewing Recent",
    "Main Page | Home",
    "Unknown page",
    "Browsing...", 
    "Viewing series:",
    "Viewing movie:",
    "Visualisation de la page d'accueil",
    "Visualisation du canal:",
    "Navigue à travers",
    "Regarde ses vidéos",
    "Regarde les tendances",
    "Navigue..."
  ];

  export let isPaused: boolean;

  let colors = {
    "Netflix": "text-red-500",
    "Prime Video": "text-yellow-500",
    "Twitch": "text-purple-500",
    "YouTube": "text-red-500",
    "Figma": "text-pink-500",
    "Visual Studio Code": "text-blue-500",
    "Stack Overflow": "text-orange-500",
    "GitHub": "text-gray-500",
    "Coinbase": "text-blue-800",
    "Twitter": "text-blue-400",
    "Instagram": "text-pink-500",
    "DisneyPlus": "text-blue-300",
    "CanalPlus": "text-stone-600"
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
        {:else if activity === "Stack Overflow"}
          <IconStackOverflow />
        {:else if activity === "GitHub"}
          <IconBrandGithub />
        {:else if activity === "Coinbase"}
          <IconBrandCoinbase />
        {:else if activity === "Twitter"}
          <IconBrandTwitter />
        {:else if activity === "Instagram"}
          <IconBrandInstagram />
        {:else if activity === "DisneyPlus"}
          <IconBrandDisneyPlus />
        {:else if activity === "CanalPlus"}
          <div class="flex w-5 h-5">
            <img src="/icons/canalplus.png" alt="CanalPlus" />
          </div>
        {/if}
      {/if}
    </span>

    {#if ["Figma", "Visual Studio Code", "Stack Overflow", "GitHub"].includes(activity)}
      {#if idling.includes(details) || idling.includes(state)}
        <code>Ne fait rien sur <b>{activity}</b> actuellement</code>
      {:else}
        {#if details == "Reading a question."}
          <code>Sur le post: {state}</code>
        {:else}
          <code>{details} {state}</code>
        {/if}
      {/if}
    {:else if activity === "Coinbase"}
      <code>Regarde sa cryptomonnaie</code>
    {:else if activity === "Twitter" || activity === "Instagram"}
      {#if details == "Viewing the Homepage" || details == "Browsing..."}
        <code>Regarde le fil d'actualité sur <b>{activity}</b></code>
      {:else if details == "Reading tweet of:"}
        <code>Regarde le tweet: {state}</code>
      {:else if details == "Viewing a Post"}
        <code>Regarde un post sur <b>{activity}</b></code>
      {:else if details.includes("Story")}
        <code>Regarde la story de <b>{details.split(" ")[1].split("'")[0]}</b></code>
      {:else if details == "Viewing tweets of:"}
        <code>Regarde le profil de <b>{state}</b></code>
      {:else if details == "Viewing a Profile:"}
        <code>Regarde le profil de <b>{state}</b></code>
      {:else if details == "Settings"}
        <code>Regarde ses paramètres sur <b>{activity}</b></code>
      {/if}
    {:else}
      {#if idling.includes(details) || idling.includes(state)}
        <code>Cherche quelque chose à regarder sur <b>{activity}</b></code>
      {:else}
        <code>Regarde: {details} {state} {isPaused ? "(En pause)" : ""}</code>
      {/if}
    {/if}
  </ul>
</div>