<script lang="ts">
  import type { Project } from "$lib/config/project.types";

  export let project: Project;
</script>

<!-- Card -->
<div class="bg-[#161616] rounded-lg shadow-lg overflow-hidden">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-lg font-semibold text-white">{project.title}</h3>
      {#if project.link}
        {#if project.type == "Open Source"}
          <a href={project.link} class="text-sm text-white bg-green-700 px-1 rounded hover:text-gray-300 transition-all">
            Open Source
          </a>
        {:else if project.type == "Pro"}
          <a href={project.link} class="text-sm text-white bg-gray-700 px-1 rounded hover:text-gray-300 transition-all">
            Pro
          </a>
        {/if}
      {/if}
    </div>
    <p class="text-gray-400">{project.description}</p>

    <!-- Skills -->
    <div>
      <div class="flex flex-row gap-2 mt-4">
        <div class="flex flex-row items-center gap-2 text-sm text-gray-400">
          {#each project.skills as skill}
            <span>{skill.name}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>