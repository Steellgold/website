<script lang="ts">
  import { IconExternalLink } from "$lib/components/icons";
  import type { ProjectType } from "$lib/config/project.types";

  export let type: ProjectType = "Open Source";
  export let links: string[] | null = [];

  let colors = {
    "Open Source": "bg-green-700",
    "Freelance - Pro": "bg-blue-700"
  }

  let span = `text-sm text-white ${colors[type]} px-1 rounded hover:text-gray-300 transition-all flex flex-row items-center gap-1`;
</script>

{#if links && links.length > 0 && links[0]}
  <a href={links[0]}>
    <span class={span}>
      {type}
      <IconExternalLink />
    </span>
  </a>
{:else}
  <span class={span}>
    {type}
  </span>
{/if}