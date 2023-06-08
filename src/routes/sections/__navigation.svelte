<script lang="ts">
  import { IconAlertSquare, IconX } from "$lib/components/icons";
  import { PUBLIC_ENV } from "$env/static/public";
  import { CookieMaxAge, type Cookie, type HttpCookieOptions, domCookie } from "cookie-muncher";
  import { onMount } from "svelte";

  let showPopover = false;
  let showPopover2 = false;

  let previewAlert = "hidden";

  onMount(() => {
    let cookie = domCookie.get("previewAlert");
    if (cookie !== null) previewAlert = cookie.value;
    if (cookie == null){
      previewAlert = "none";
      domCookie.set({ name: "previewAlert", value: "none" }, { maxAge: CookieMaxAge.OneWeek });
    }
  });

  const hidePreviewAlert = () => {
    previewAlert = "hidden";
    domCookie.set({ name: "previewAlert", value: "hidden" }, { maxAge: CookieMaxAge.OneWeek });
  }
</script>

<section>
  <div class="flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
    <ul class="flex flex-row justify-end text-white gap-2 p-2">
      <a href="/#about" class="block hover:text-white hover:opacity-40 transition-all">
        <code>/about</code>
      </a>
  
      <a href="/" class="opacity-40 cursor-not-allowed" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false}>
        <code>/blog</code>
        {#if showPopover}
         <code class="text-red-300">
          this section is not available <span on:mouseenter={() => showPopover2 = true} on:mouseleave={() => showPopover2 = false}>yet</span>
          {#if showPopover2}
            <code class="text-red-300">
              because i'm rewriting it
            </code>
          {/if}
         </code>
        {/if}
      </a>
    </ul>
  
    <div class="flex flex-col justify-center ml-auto sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="/" class="block hover:text-white hover:opacity-40 transition-all">
          <code>/</code>
        </a>
      </ul>
    </div>
  </div>

  {#if PUBLIC_ENV == "preview" && previewAlert !== "hidden"}
    <div class="bg-red-500 text-white flex items-center justify-center p-2 gap-3 bottom-0 left-0 right-0">
      <i><IconAlertSquare /></i>
      <div>
        Vous êtes actuellement sur la version de développement de mon site web, accédez à la <a href="https://steellgold.fr" class="underline">version stable</a><br>
        <span class="flex items-center cursor-pointer text-center" on:click={hidePreviewAlert}><IconX />Ne plus afficher ce message</span>
      </div>
    </div>
  {/if}
</section>