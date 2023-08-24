<script lang="ts">
  import { PUBLIC_URL } from "$env/static/public";
  import { IconEyes, IconHeart } from "$lib/components/icons";
  import { restRequest } from "$lib/utils/request/request";
  import type { Post } from "$lib/utils/types/Post";
  import { onMount } from "svelte";

  let loading: boolean = true;
  let posts: Post[] = [];
  let recent: Post;
  let likes: number = 0;

  onMount(async () => {
    let res = await restRequest<Post[]>("get", PUBLIC_URL + "/api/post/last");
    if (!res.success) {
      console.error(res.data.message);
      return;
    }

    posts = res.data;
    recent = res.data[posts.length - 1];
    loading = false;

    likes = recent.likes_default + recent.likes_explode + recent.likes_happy;
  });
</script>

<div class="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
  <h1 class="text-3xl font-bold text-left">Dernière publication:</h1>
</div>
{#if posts.length > 0}
  <section class="pb-3">
    <div class="pt-3 shrink-0 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start mx-auto w-5/6 lg:w-2/4">
      <div class="bg-[#161616] rounded-lg shadow-lg overflow-hidden relative">
        <a href="/blog/{recent.slug}">
          <div class="absolute top-0 right-5 justify-center">
            <div class="flex flex-row gap-3 p-2 items-center mt-4 rounded-lg shadow-lg overflow-hidden" style="background-color: {recent.color}">
              <p class="text-white flex gap-2 items-center justify-center">    
                <IconEyes />
                {recent.views} views
              </p>
              <p class="text-white flex gap-2 items-center">    
                <IconHeart />
                {likes} likes
              </p>
            </div>
          </div>
          <img src={recent.bannerUrl} class="w-full h-48 object-cover" alt="Post banner" />
        </a>

        <div class="p-4">
          <div class="flex flex-row justify-between items-center">
            <h3 class="text-2xl font-semibold text-white">
              <a href="/blog/{recent.slug}">{recent.title}</a>
            </h3>
          </div>

          <p class="text-gray-300 mt-2">
            <a href="/blog/{recent.slug}" class="line-clamp-3">{recent.introduction}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
{:else}
  <div class="text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <p>There are no publications yet, stay tuned! 😉</p>
  </div>
{/if}