<script lang="ts">
  import type { Project } from "$lib/config/project.types";
  import { IconExternalLink} from "$lib/components/icons";
  import { fromStartToEnd, fromStart } from "$lib/utils/Time";

  export let project: Project;
</script>

<div class="bg-[#161616] md:min-h-[200px] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-lg font-semibold text-white">{project.title}</h3>
      
      {#if project.link}
        {#if project.type == "Open Source"}
          <a href={project.link} class="text-sm text-white bg-green-700 px-1 rounded hover:text-gray-300 transition-all flex flex-row items-center gap-1">  
            Open Source
            <IconExternalLink />
          </a>
        {:else if project.type == "Pro"}
          <a href={project.link} class="text-sm text-white bg-gray-700 px-1 rounded hover:text-gray-300 transition-all">Pro</a>
        {/if}
      {/if}
    </div>
    
    {#if project.date}
      <p class="text-sm text-gray-400">
        {#if project.date.start && project.date.end} { fromStartToEnd(project.date.start, project.date.end) }
        {:else if project.date.start} { fromStart(project.date.start) } {/if}
      </p>
    {/if}
    
    <p class="pt-3 text-gray-400">{project.description}</p>

    <div class="flex flex-row flex-wrap gap-2 pt-3">
      <div class="flex flex-row flex-wrap gap-2 text-sm text-gray-400">
        <span class="font-semibold text-white"> 
          Technologie(s):
        </span>
        {#each project.skills as skill}
          <span>{skill.name}</span>
        {/each}
      </div>
    </div>
  </div>
</div>