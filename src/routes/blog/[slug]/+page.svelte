<script lang="ts">
  import type { PageData } from './$types';
  import { MetaTags } from '$lib/components/meta';
  import { IconCalendar, IconClockHour10, IconShare } from '$lib/components/icons';
  import { fade } from 'svelte/transition';
  import Markdown from 'svelte-markdown';
  import dayjs from 'dayjs';

  export let data: PageData;

  let description = data.post.content.replace(/(<([^>]+)>)/gi, '').substring(0, 140) + '[...]';
  let publishedAtDay = dayjs(data.post.publishedAt).format('DD/MM/YYYY');
  let publishedAtHour = dayjs(data.post.publishedAt).format('HH:mm');
  let lastUpdatedAtDay = dayjs(data.post.lastUpdatedAt || data.post.publishedAt).format('DD/MM/YYYY');

  let progress: number = 0;
  let readed: number = 0;
  let readedPopup: boolean = false;
  let readedPopupShow: boolean = true;
  let scrollHeight: number = 0;
  let clientHeight: number = 0;

  const onScroll = () => {
    scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    clientHeight = document.documentElement.clientHeight;
    progress = (document.documentElement.scrollTop / scrollHeight) * 100;

    if (document.documentElement.scrollTop > readed) {
      readed = document.documentElement.scrollTop;
    }

    if (readed > scrollHeight / 2) {
      readedPopup = true;
    }
  };

  let copied: boolean = false;
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<svelte:head>
  <MetaTags title={data.post.title} description={data.post.introduction} image={data.post.bannerUrl} color={data.post.color} />  
</svelte:head>

<svelte:window on:scroll={onScroll} />

{#if progress !== 0}
  <div class="fixed top-0 left-0 w-full h-1 bg-black z-10">
    <div class="h-full transition-all bg-gray-100" style="width: {progress}%"></div>
  </div>
{/if}

<section>
  <div class="pt-3 flex items-center justify-center">
    <figure class="max-w-lg">
      <img class="h-auto max-w-full px-4 sm:px-0 rounded-lg" src={data.post.bannerUrl} alt="Bannière {data.post.title}">
      <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        <div class="px-10 line-clamp-3">
          <div class="md:flex md:justify-between mt-2">
            <p class="flex items-center space-x-1 gap-2 text-gray-400">
              <IconClockHour10 />
              ~{data.post.readingTime} min
            </p>
            <p class="flex items-center space-x-1 gap-2 text-gray-400">
              <IconCalendar />
              Article publié le {publishedAtDay} {publishedAtHour}
            </p>
            <button class="flex items-center space-x-1 gap-2 text-gray-400 hover:text-gray-200" on:click={copyLink}>
              <IconShare />
              Partager
            </button>
          </div>

          {#if copied}
            <p class="text-green-500 mt-3" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>Lien copié !</p>
          {/if}
        </div>
      </figcaption>
    </figure>
  </div>

  <div class="shrink-0 pt-4 flex items-center justify-center mx-auto w-5/6">
    <h1 class="text-4xl font-bold text-white">{data.post.title}</h1> 
  </div>  
  <div class="z-0 mt-8 prose prose-slate mx-auto px-4 sm:px-0 lg:prose-lg text-white prose-blockquote:line-clamp-2 prose-headings:text-white prose-headings:underline prose-strong:underline prose-strong:text-white prose-img:rounded-lg prose-a:text-gray-500 prose-a:no-underline prose-blockquote:italic prose-blockquote:text-gray-500 prose-blockquote:border-gray-500 list-outside hyphens-auto prose-a:after:content-['_↗'] md:prose-img:scale-125 md:prose-img:p-5">
    <Markdown source={data.post.content} />
    <br><br>
  </div>

  {#if readedPopup && readedPopupShow}
    <div class="fixed bottom-0 left-0 w-full z-10" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
      <div class="flex bg-gray-100 mb-10 w-11/12 md:w-7/12 p-4 rounded-lg shadow-lg mx-auto justify-between">
        <div>
          Voulez vous noter cet article ?
          <button class="hover:text-gray-900 hover:font-semibold" on:click={() => readedPopupShow = false}>
            🥰 (0)
          </button>
          <button class="hover:text-gray-900 hover:font-semibold" on:click={() => readedPopupShow = false}>
            😍 (0)
          </button>
          <button class="hover:text-gray-900 hover:font-semibold" on:click={() => readedPopupShow = false}>
            🤯 (0)
          </button>
        </div>

        <button class="top-0 right-0 text-black" on:click={() => readedPopupShow = false}>
          Non merci
        </button>
      </div>
    </div>
  {/if}
</section>