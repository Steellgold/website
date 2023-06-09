<script lang="ts">
  import ProjectTag from "$lib/components/project/project-tag.svelte";
  import { fromStart, fromStartToEnd } from "$lib/utils/Time";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.title} | Gaëtan</title>
</svelte:head>

<section class="mt-10 mb-5 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
  <div class="flex flex-row items-center justify-center gap-2">
    <h1 class="text-3xl font-bold text-white">{data.title}</h1>
    <ProjectTag type={data.type} links={data.links} />
  </div>

  <div class="flex flex-row items-center justify-center gap-2 mt-2">
    {#if data.date}
      <p class="text-sm text-gray-400">
        {#if data.date.start && data.date.end} { fromStartToEnd(data.date.start, data.date.end) }
        {:else if data.date.start} { fromStart(data.date.start) } {/if}
      </p>
    {/if}
  </div>

  {#if data.longDescription}
    <span class="text-gray-500 text-sm w-5/6 mt-2 mx-auto block text-center w-5/6 lg:w-2/4 mt-2">
      {data.longDescription}
    </span>
  {/if}

  {#if data.features}
    <div class="text-gray-500 text-sm px-3 p-5 rounded-sm w-5/6 mt-2 mx-auto block text-center w-5/6 lg:w-2/4 mt-5">
      <h2 class="text-gray-500 text-base underline">Liste des fonctionnalités</h2>
      {#each data.features as feature}
        <span>{feature}</span><br>
      {/each}
    </div>
  {/if}
</section>

<div class="flex flex-row justify-center gap-2 mt-5 w-full px-1 flex-wrap">
  {#each data.skills as tag}
    <span class="text-center text-gray-500 text-sm bg-gray-800 rounded-lg px-2 py-1">{tag.name}</span>
  {/each}
</div>

{#if data.images}
  <div class="flex flex-wrap justify-center gap-2 mt-5 w-full">
    {#each data.images as image}
      <img src={image} alt="" class="rounded-[15px] w-auto shadow-lg p-2" />
    {/each}
  </div>
{/if}