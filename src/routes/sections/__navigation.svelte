<script lang="ts">
  import { CookieMaxAge, domCookie } from "cookie-muncher";
  import { onMount } from "svelte";

  // let showPopover = false;
  // let showPopover2 = false;

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
  
      <!-- <a href="/" class="opacity-40 cursor-not-allowed" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false}>
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
      </a> -->
    </ul>
  
    <div class="flex flex-col justify-center ml-auto sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="/" class="block hover:text-white hover:opacity-40 transition-all">
          <code>/</code>
        </a>
      </ul>
    </div>
  </div>
</section>