<script lang="ts">
  import type { PageData } from './$types';
  import { MetaTags } from '$lib/components/meta';
  import dayjs from 'dayjs';
  import Markdown from 'svelte-markdown';

  export let data: PageData;

  let description = data.post.content.replace(/(<([^>]+)>)/gi, '').substring(0, 150) + '[...]';
  let publishedAtDay = dayjs(data.post.publishedAt).format('DD/MM/YYYY');
  let publishedAtHour = dayjs(data.post.publishedAt).format('HH:mm');
</script>

<svelte:head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

  <title>{data.post.title}</title>
  <MetaTags title={data.post.title} description={description} image={data.post.bannerUrl} />
</svelte:head>

<section>  
  <div class="pt-3 flex items-center justify-center">
    <figure class="max-w-lg">
      <img class="h-auto max-w-full px-4 sm:px-0 rounded-lg" src={data.post.bannerUrl} alt="Bannière {data.post.title}">
      <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        Article publié le {publishedAtDay} à {publishedAtHour}
      </figcaption>
    </figure>
  </div>

  <div class="shrink-0 pt-4 flex items-center justify-center mx-auto w-5/6">
    <h1 class="text-4xl font-bold text-white">{data.post.title}</h1> 
  </div>
  
  <div class="z-0 mt-8 prose prose-slate mx-auto px-4 sm:px-0 lg:prose-lg text-white prose-headings:text-white prose-headings:underline prose-strong:underline prose-strong:text-white prose-img:rounded-lg prose-a:text-gray-500 prose-a:no-underline">
    <Markdown source={data.post.content} />
  </div>
</section>