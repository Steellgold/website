<script lang="ts">
  import { IconExternalLink } from "$lib/components/icons";

  export let link: string | null = null;
</script>

{#if link}
  <a href={link}>
    <span class="text-sm text-white bg-gray-700 px-1 rounded hover:text-gray-300 transition-all flex flex-row items-center gap-1">  
      Visit
      <IconExternalLink />
    </span>
  </a>
{/if}