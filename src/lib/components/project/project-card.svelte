<script lang="ts">
  import type { Project } from "$lib/config/project.types";
  import { fromStartToEnd, fromStart } from "$lib/utils/Time";
  import { ProjectLink, ProjectVisit } from ".";
  import { Image } from "../image";

  export let project: Project;
</script>

<div class="bg-[#161616] md:min-h-[180px] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-lg font-semibold text-white">
        <a href="/project/{project.slug}" class="no-underline">{project.title}</a>
      </h3>
      <div class="flex flex-row gap-2">
        {#if project.link}
          <ProjectLink link={project.link} type={project.type} />
        {:else}
          <ProjectLink type={project.type} />
        {/if}

        {#if project.subLink}
          <ProjectVisit link={project.subLink} />
        {/if}
      </div>
    </div>
    
    {#if project.date}
      <p class="text-sm text-gray-400">
        {#if project.date.start && project.date.end} { fromStartToEnd(project.date.start, project.date.end) }
        {:else if project.date.start} { fromStart(project.date.start) } {/if}
      </p>
    {/if}
    
    <p class="pt-3 text-gray-400 line-clamp-2">
      <a href="/{project.slug}" class="no-underline">{project.description}</a>
    </p>

    <div class="flex flex-row flex-wrap gap-2 pt-3">
      <div class="flex flex-row flex-wrap gap-5 text-sm text-gray-400">
        <div class="flex -space-x-3">
          {#each project.skills as skill}
            <div class="hover:pr-4 transition-all duration-200">
              <Image targetImage="/icons/{skill.icon}.png" text="{skill.name}" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>