<script lang="ts">
  import { PUBLIC_URL } from "$env/static/public";
  import { restRequest } from "$lib/utils/request/request";
  import type { Post } from "$lib/utils/types/Post";
  import { onMount } from "svelte";

  let loading: boolean = true;
  let posts: Post[] = [];
  let recent: Post;

  onMount(async () => {
    let res = await restRequest<Post[]>("get", PUBLIC_URL + "/api/posts");
    if (!res.success) {
      console.error(res.data.message);
      return;
    }

    posts = res.data;
    recent = res.data[posts.length - 1];
    loading = false;
  });
</script>

<div class="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
  <h1 class="text-3xl font-bold text-left">Dernière publication:</h1>
</div>
{#if posts.length > 0}
  <section class="pb-3">
    <div class="pt-3 shrink-0 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start mx-auto w-5/6 lg:w-2/4">
      <div class="bg-[#161616] rounded-lg shadow-lg overflow-hidden">
        <a href="/blog/{recent.slug}">
          <img src={recent.bannerUrl} class="w-full h-48 object-cover" alt="Post banner" />
        </a>

        <div class="p-4">
          <div class="flex flex-row justify-between items-center">
            <h3 class="text-2xl font-semibold text-white">
              <a href="/blog/{recent.slug}">{recent.title}</a>
            </h3>
          </div>

          <p class="text-gray-300 mt-2">
            <a href="/blog/{recent.slug}" class="line-clamp-2">{recent.content}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
{:else}
  <div class="text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <p>Il n'y a encore aucune publication, revevez bientôt ! 😉</p>
  </div>
{/if}