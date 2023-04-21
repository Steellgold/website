<script lang="ts">
  import { onMount } from "svelte";
  import { restRequest } from "$lib/utils/request/request";
  import type { Post } from "$lib/utils/types/Post";
  import { PUBLIC_URL } from "$env/static/public";
  import DayJS from "dayjs";

  let loading: boolean = true;
  let posts: Post[] = [];

  onMount(async () => {
  let res = await restRequest<Post[]>("get", PUBLIC_URL + "/api/posts");
  if (!res.success) {
    console.error(res.data.message);
    return;
  }

  posts = res.data;
  loading = false;
});
</script>

<div class="justify-center mx-auto w-5/6 lg:w-2/4">
  <h1 class="text-3xl font-bold text-left text-white">Liste des publications:</h1>
  <div class="pt-3 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start">
    {#if loading}
      <p class="text-white">Les publications sont en cours de chargement...</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 items-center justify-start">
        {#each posts as post}
          <div class="flex-col bg-[#161616] rounded-b-lg shadow-lg overflow-hidden max-h-">
            <a href="/blog/{post.slug}">
              <img src={post.bannerUrl} class="w-full h-48 object-fill" alt="Post banner" />
            </a>
            <div class="p-4">
              <a href="/blog/{post.slug}">
                <h2 class="text-2xl font-semibold text-white line-clamp-1">{post.title}</h2>
                <h4 class="text-sm font-normal text-gray-400">Posté le {DayJS(post.createdAt).format("DD/MM/YYYY")} à {DayJS(post.createdAt).format("HH:mm")}</h4>
              </a>
              <p class="text-gray-300 mt-2">
                <a href="/blog/{post.slug}" class="line-clamp-2">{post.introduction}</a>
              </p>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>