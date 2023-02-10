<script lang="ts">
  import { ProjectCard } from "$lib/components/project";
  import { Projects } from "$lib/config/projects";
</script>

<section>
  <div class="grid grid-cols-1 justify-items-center gap-3 md:grid-cols-3 md:gap-5">
    {#each Projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>