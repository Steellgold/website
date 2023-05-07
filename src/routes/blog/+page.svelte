<script lang="ts">
  import type { PageData } from "./$types";
  import type { Post } from "$lib/utils/types/Post";
  import DayJS from "dayjs";
  
  export let data: PageData;

  let posts: Post[] = data.posts;
</script>

<div class="justify-center mx-auto w-5/6 lg:w-2/4">
  <div class="justify-between mx-auto mt-8 flex items-center">
    <h1 class="text-2xl font-bold text-left text-white">Liste des publications:</h1>
    <div>
      <a href="/blog/new" class="p-2 rounded-lg shadow-lg bg-[#161616] hover:bg-[#3b5e48] text-white">
        Nouvelle publication  
      </a>
    </div>
  </div>
  <div class="pt-3 grid grid-cols-1 gap-2 sm:gap-3 items-center justify-start">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 items-center justify-start">
      {#each posts as post}
        <div class="flex-col bg-[#161616] rounded-b-lg shadow-lg overflow-hidden max-h-">
          <a href="/blog/{post.slug}">
            <img src={post.bannerUrl} class="w-full h-48 object-fill" alt="Post banner" />
          </a>
          <div class="p-4">
            <a href="/blog/{post.slug}">
              <h2 class="text-2xl font-semibold text-white line-clamp-1">{post.title}</h2>
              <h4 class="text-sm font-normal text-gray-400">
                Posté le {DayJS(post.createdAt).format("DD/MM/YYYY")} à {DayJS(post.createdAt).format("HH:mm")}
                {#if !post.published}
                  - <span class="text-red-400">Non publié</span>
                {/if}  
              </h4>
            </a>
            <p class="text-gray-300 mt-2">
              <a href="/blog/{post.slug}" class="line-clamp-2">{post.introduction}</a>
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>