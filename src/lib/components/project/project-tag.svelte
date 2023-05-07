<script lang="ts">
  import { IconExternalLink } from "$lib/components/icons";

  export let type: "Open Source" | "Pro";
  export let link: string | null = null;

  let colors = {
    "Open Source": "bg-green-700",
    "Pro": "bg-gray-700"
  }
</script>

{#if link !== null}
  <a href={link}>
    <span class="text-sm text-white {colors[type]} px-1 rounded hover:text-gray-300 transition-all flex flex-row items-center gap-1">  
      {type}
      <IconExternalLink />
    </span>
  </a>
{:else}
  <span class="text-sm text-white {colors[type]} px-1 rounded hover:text-gray-300 transition-all flex flex-row items-center gap-1">  
    {type}
  </span>
{/if}