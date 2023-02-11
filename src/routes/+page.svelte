<script>
  import Button from "$lib/components/elements/navigation/Button.svelte";
  import Project from "$lib/components/layouts/Project.svelte";
  import projects from "$lib/config/projects.json";
</script>

<header>
  <div class="title">
    <h1>Hey</h1>
    <img class="wave" src = "/images/FluentWave.svg" alt="Wave"/>
  </div>

  <p>Gaëtan, 18 years old, passionate about programming and computer science, I am a PHP developer, I am currently learning Web development and Java<p>
  <p><a href="preview.steellgold.fr">👀</a></p>
  
  <div class="buttons">
    <Button link="https://github.com/Steellgold" icon="dark/GitHub.png" small={false}>Gaëtan H</Button>
    <Button link="https://discord.com/users/504392983244832780" icon="light/Discord.png" small={false}>Gaëtan 🐈#2728</Button>
    <Button link="https://youtube.com/Steellgold" icon="light/YouTube.png" small={false}>Steellgold</Button>
    <Button link="https://twitter.com/Steellgold" icon="light/Twitter.png" small={false}>Gaëtan</Button>
    <Button link="https://instagram.com/steellgold" icon="light/Instagram.png" small={false}>steellgold</Button>
    <iframe src="https://github.com/sponsors/Steellgold/button" title="Sponsor Steellgold" height="35" width="116" style="border: 0;"></iframe>
  </div>
</header>

<section id="projects" class="projects">
  <div class="list">
    {#each projects as project}
      <Project
        title={project.title} 
        year={project.year}
        smallDescription={project.smallDescription}
        primaryTechIcon={project.primaryTechIcon}
        techIcons={project.techIcons}
        button={project.button ?? undefined}
        buttons={project.buttons ?? undefined}
      />
    {/each}
  </div>
</section>

<style lang="scss">
  @import "../lib/scss/animations.scss";
  @import "../lib/scss/variables.scss";

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    margin: 50px 0;

    .title {
      display: flex;
      align-items: center;
      gap: 20px;

      h1 {
        font-size: 5rem;
      }

      img {
        height: 100px;
        width: auto;
      }
    }

    p {
      font-size: 1.25rem;
      text-align: center;
      
      width: 50%;

      @media (max-width: $breakpoint-md) {
        width: 90%
      }
    }

    .buttons {
      max-width: 90%;
      width: 500px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
  }

  .projects {
    background-color: $color-background-100;

    padding: 50px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    .list {
      $column-size: 350px;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($column-size, 1fr));
      gap: 30px;

      @media (min-width: calc($column-size * 4)) {
        grid-template-columns: 350px 350px 350px 350px; // TODO : fix this
      }

      @media (max-width: $breakpoint-xl) {
        grid-template-columns: 350px 350px; // TODO : fix this
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 350px; // TODO : fix this
      }
    }
  }
</style>
