<script lang="ts">
  import type { PageData } from './$types';
  import { IconCalendar, IconClockHour10, IconShare } from '$lib/components/icons';
  import Markdown from 'svelte-markdown';
  import dayjs from 'dayjs';
  import { restRequest } from '$lib/utils/request/request';
  import { PUBLIC_URL } from '$env/static/public';

  export let data: PageData;

  let post = {
    title: "Nouvelle publication",
    bannerUrl: "https://placehold.co/600x400?text=Hello+World",
    readingTime: 0,
    color: "#161616",
    published: false,
    introduction: "Une introduction pour votre article, qui sera affichée sur la page d'accueil.",
    slug: "article-1",
    content: "Aucun contenu dans l'article pour le moment, écrivez quelque chose ! __Avec__ ou sans **Markdown**.",
    likes_default: 0,
    likes_happy: 0,
    likes_explode: 0,
    views: 0,
    createdAt: dayjs().format('DD/MM/YYYY HH:mm'),
    key: data.session?.user.id
  }

  const save = async (): Promise<void> => {
    const res = await restRequest("post", PUBLIC_URL + "/api/post", {
      body: JSON.stringify(post)
    })

    if (res.success) {
      console.log("Post saved !")
    } else {
      console.error("Error while saving post !");
    }

    return;
  }

  let preview = false;
</script>

<section>
  <div class="justify-between mx-auto w-5/6 lg:w-2/4 mb-8 flex items-center">
    <h1 class="text-2xl font-bold text-left text-white">Nouvelle publication:</h1>
    <div>
      <button class="p-2 rounded-lg shadow-lg bg-[#161616] hover:bg-[#3b5e48] text-white" on:click={save}>
        Enregistrer
      </button>
      <button class="p-2 rounded-lg shadow-lg bg-[#161616] hover:bg-[#32a85c] text-white">
        Publier
      </button>
    </div>
  </div>
  <div class="pt-3 flex items-center justify-center">
    <figure class="max-w-lg">
      <img class="h-auto max-w-full px-4 sm:px-0 rounded-lg" src={post.bannerUrl} alt="Bannière de l'article" />
      <input type="url" bind:value={post.bannerUrl} class="mt-2 w-full p-2 rounded-lg shadow-lg bg-[#161616] text-white" />
      <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        <div class="px-10 line-clamp-3">
          <div class="md:flex md:justify-between mt-2">
            <p class="flex items-center space-x-1 gap-2 text-gray-400">
              <IconClockHour10 />
              ~ <input type="number" name="readingTime" bind:value={post.readingTime} class="w-16 p-2 rounded-lg shadow-lg bg-[#161616] text-white" /> min
            </p>
            <p class="flex items-center space-x-1 gap-2 text-gray-400">
              <IconCalendar />
              Article non publié
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>

  <div class="shrink-0 pt-4 flex items-center justify-center mx-auto w-5/6">
    <h1 class="text-4xl font-bold text-white">
      <input type="text" name="title" bind:value={post.title} class="w-full p-3.5 rounded-lg shadow-lg bg-[#161616] text-white" />
    </h1> 
  </div>  
  <div class="z-0 mt-8 prose prose-slate mx-auto px-4 sm:px-0 lg:prose-lg text-white prose-blockquote:line-clamp-2 prose-headings:text-white prose-headings:underline prose-strong:underline prose-strong:text-white prose-img:rounded-lg prose-a:text-gray-500 prose-a:no-underline prose-blockquote:italic prose-blockquote:text-gray-500 prose-blockquote:border-gray-500">
    <div class="flex items-center justify-start mb-4">
      <button on:click={() => preview = !preview} class="p-2 rounded-lg shadow-lg bg-[#161616] text-white">
        {#if preview}
          <span>Editer le contenu</span>
        {:else}
          <span>Prévisualiser le contenu</span>
        {/if}
      </button>
    </div>

    {#if preview}
      <textarea name="content" bind:value={post.content} class="w-full p-3.5 rounded-lg shadow-lg bg-[#161616] text-white" rows="150"></textarea>
    {:else}
      <Markdown source={post.content} />
    {/if}
    <br><br>
  </div>
</section>