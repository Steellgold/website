<script lang="ts">
  import type { Project } from "$lib/config/project.types";
  import { fromStartToEnd, fromStart } from "$lib/utils/Time";
  import { ProjectLink } from ".";

  export let project: Project;
</script>

<div class="bg-[#161616] md:min-h-[200px] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-lg font-semibold text-white">{project.title}</h3>
      
      {#if project.link}
        <ProjectLink link={project.link} type={project.type} />
      {:else}
        <ProjectLink type={project.type} />
      {/if}
    </div>
    
    {#if project.date}
      <p class="text-sm text-gray-400">
        {#if project.date.start && project.date.end} { fromStartToEnd(project.date.start, project.date.end) }
        {:else if project.date.start} { fromStart(project.date.start) } {/if}
      </p>
    {/if}
    
    <p class="pt-3 text-gray-400 line-clamp-2">{project.description}</p>

    <div class="flex flex-row flex-wrap gap-2 pt-3">
      <div class="flex flex-row flex-wrap gap-2 text-sm text-gray-400">
        <span class="font-semibold text-white"> 
          Technologie(s):
        </span>
        {#each project.skills as skill}
          <span>
            {skill.name}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>