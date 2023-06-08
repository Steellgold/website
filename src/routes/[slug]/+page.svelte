<script lang="ts">
  import ProjectTag from "$lib/components/project/project-tag.svelte";
    import { fromStart, fromStartToEnd } from "$lib/utils/Time";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class="mt-10 mb-5 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
  <div class="flex flex-row items-center justify-center gap-2">
    <h1 class="text-3xl font-bold text-white">{data.title}</h1>
    <ProjectTag type={data.type} link={data.link} />
  </div>

  <div class="flex flex-row items-center justify-center gap-2 mt-2">
    {#if data.date}
      <p class="text-sm text-gray-400">
        {#if data.date.start && data.date.end} { fromStartToEnd(data.date.start, data.date.end) }
        {:else if data.date.start} { fromStart(data.date.start) } {/if}
      </p>
    {/if}
  </div>

  <span class="text-gray-500 text-sm w-5/6 mt-2 mx-auto block text-center w-5/6 lg:w-2/4 mt-2">{data.longDescription}</span>
</section>

<div class="flex flex-row justify-center gap-2 mt-5 w-full px-1 flex-wrap">
  {#each data.skills as tag}
    <span class="text-center text-gray-500 text-sm bg-gray-800 rounded-lg px-2 py-1">{tag.name}</span>
  {/each}
</div>

{#if data.images}
  <div class="flex flex-wrap justify-center gap-2 mt-5 w-full">
    {#each data.images as image}
      <img src={image} alt="" class="w-auto rounded-lg shadow-lg p-2" />
    {/each}
  </div>
{/if}