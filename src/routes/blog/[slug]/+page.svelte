<script lang="ts">
  import type { PageData } from './$types';
  import dayjs from 'dayjs';
  import Markdown from 'svelte-markdown';
  import Code from '$lib/components/renders/Code.svelte';

  export let data: PageData;

  let description = data.post.content.replace(/(<([^>]+)>)/gi, '').substring(0, 150);
</script>

<svelte:head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

  <title>{data.post.title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={data.post.title} />
  <meta name="og:site_name" content="Blog de Gaëtan" />
  <meta name="og:description" content={description} />
  <meta name="og:image" content={data.post.bannerUrl} />
  <meta name="og:url" content="https://steellgold.fr/blog/{data.post.slug}" />
  <meta name="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={data.post.bannerUrl} />
  <meta name="twitter:site" content="@Steellgold" />
  <meta name="twitter:creator" content="@Steellgold" />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={description} />
  <meta name="theme-color" content="#15803D" />
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

  <div class="shrink-0 pt-4 flex items-center justify-center mx-auto w-5/6">
    <h1 class="text-4xl font-bold text-white">{data.post.title}</h1> 
  </div>

  <div class="pt-9 text-white flex flex-col mx-auto w-5/6 lg:w-2/4">
    <Markdown source={data.post.content} renderers={{ code: Code }} />
  </div>
</section>