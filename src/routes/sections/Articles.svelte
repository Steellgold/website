<script lang="ts">
  import { PUBLIC_URL } from "$env/static/public";
  import { restRequest } from "$lib/utils/request/request";
  import type { Post } from "$lib/utils/types/Post";
  import { onMount } from "svelte";

  let loading: boolean = true;
  let recent: Post;

  onMount(async () => {
    let res = await restRequest<Post[]>("get", PUBLIC_URL + "/api/posts");
    if (!res.success) {
      console.error(res.data.message);
      return;
    }

    recent = res.data[res.data.length - 1];
    loading = false;
  });
</script>

<section class="pb-3 mb-5">
  <div class="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <h1 class="text-3xl font-bold text-left">Dernière publication:</h1>
  </div>

  <div class="pt-3 shrink-0 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start mx-auto w-5/6 lg:w-2/4">
    <div class="bg-[#161616] rounded-lg shadow-lg overflow-hidden">
      <!-- Banner -->
      {#if loading}
        <div class="animate-pulse w-full h-48 bg-gray-700"></div>
      {:else}
        <a href="/blog/{recent.slug}" data-sveltekit-preload-data="off">
          <img src={recent.bannerUrl} class="w-full h-48 object-cover" alt="Post banner" />
        </a>
      {/if}

      <div class="p-4">
        <div class="flex flex-row justify-between items-center">
          <h3 class="text-2xl font-semibold text-white">
            {#if loading}
              <span class="animate-pulse">Chargement...</span>
            {:else}
              <a href="/blog/{recent.slug}" data-sveltekit-preload-data="off">{recent.title}</a>
            {/if}
          </h3>
        </div>

        <p class="text-gray-300 mt-2">
          {#if loading}
            <div class="h-2 w-full animate-pulse rounded-full bg-gray-700 mb-2.5"></div>
            <div class="h-2  w-32 animate-pulse rounded-full bg-gray-700 mb-2.5"></div>
          {:else}
            <a href="/blog/{recent.slug}" data-sveltekit-preload-data="off">{recent.content.split(" ").slice(0, 20).join(" ")} ...</a>
          {/if}
        </p>
      </div>

      <!-- <div class="flex flex-row justify-between items-center m-2 ml-4 mr-4">
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-400 ml-1">2</span>
          </div>

          <div class="flex flex-row items-center ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l4-4L19 21" />
            </svg>
            <span class="text-gray-400 ml-1">0</span>
          </div>
        </div>

        <div class="flex flex-row items-center">
          <img src="https://avatars.githubusercontent.com/u/51505384?v=4" class="w-8 h-8 rounded-full" alt="Avatar" />
          <span class="text-gray-400 ml-2">Gaëtan</span>
        </div>
      </div> -->
    </div>
  </div>
</section>