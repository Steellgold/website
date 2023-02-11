<script lang="ts">
  import dayjs from 'dayjs';
  import type { PageData } from './$types';
  import Markdown from 'svelte-markdown';
  import Code from '$lib/components/renders/Code.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
</svelte:head>

<section>  
  <div class="pt-3 flex items-center justify-center">
    <figure class="max-w-lg">
      <img class="h-auto max-w-full rounded-lg" src={data.post.bannerUrl} alt="Bannière {data.post.title}">
      <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        Article publié le { dayjs(data.post.publishedAt).format('DD/MM/YYYY') } à { dayjs(data.post.publishedAt).format('HH:mm') }
      </figcaption>
    </figure>
  </div>

  <div class="shrink-0 pt-9 flex items-center justify-center mx-auto w-5/6">
    <h1 class="text-4xl font-bold text-white">{data.post.title}</h1> 
  </div>

  <div class="pt-9 text-white flex flex-col mx-auto w-5/6 lg:w-2/4">
    <Markdown source={data.post.content} renderers={{ code: Code }} />
  </div>
</section>