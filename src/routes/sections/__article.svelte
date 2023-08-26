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
  <div class="flex flex-col justify-center mx-auto w-5/6 lg:w-2/4 relative">
    <a href={PUBLIC_URL + "/blog/" + recent.slug}>
      <img
        src={recent.bannerUrl}
        alt={recent.title}
        class="object-center object-center hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
    </a>
  </div>
{:else}
  <div class="text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <p>There are no publications yet, stay tuned! 😉</p>
  </div>
{/if}