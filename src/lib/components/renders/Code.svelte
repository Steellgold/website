<script lang="ts">
  export let lang: string;
  export let text: string;

  import hjls from "highlight.js";
  import { onMount } from "svelte";

  let loading = true;

  onMount(() => {
    loading = false;    
  });
</script>

<div class="transition-all">
  {#if loading}
    <div class="w-full h-36 bg-gray-800 animate-pulse"></div>
  {:else}
    <pre class="hjls bg-[#0f0f0f] p-4">{@html hjls.highlight(lang, text, true).value}</pre>
  {/if}
</div>