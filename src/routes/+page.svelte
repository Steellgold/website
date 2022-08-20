<script>
  import Bar from "$lib/components/layouts/Navbar.svelte";
  import Button from "$lib/components/elements/naviguation/Button.svelte";
  import ButtonGroup from "$lib/components/elements/contenairs/ButtonGroup.svelte";
  import Project from "$lib/components/layouts/Project.svelte";
  import ProjectGroup from "$lib/components/elements/contenairs/ProjectGroup.svelte";
</script>

<Bar/>

<section id="top">
  <div class="page">
    <div class="title">
      <h1>Salut <span class="wave">
        <img class="wave" src = "/images/FluentWave.svg" height="150em" alt="Wave"/>
      </span></h1>
    </div>
  
    <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est, officiis aliquid voluptates quidem esse suscipit consequuntur repellat cupiditate fugit recusandae hic voluptatibus molestias adipisci natus! Cupiditate reprehenderit non aspernatur!</p>
    </div>
  
    <div class="links">
      <ButtonGroup>
        <Button link="https://github.com/Steellgold" icon="dark/GitHub.png">GitHub</Button>
        <Button link="https://youtube.com/Steellgold" icon="dark/YouTube.png">YouTube</Button>
        <Button link="https://twitter.com/Steellgold" icon="dark/Twitter.png">Twitter</Button>
      </ButtonGroup>
    </div>
  </div>
</section>

<br>

<section id="projects" class="projects">
  <br>
  <div class="page">
    <div class="projects">
      <ProjectGroup>
        <Project title="Portfolio" icon="svelte" github_link="https://github.com/Steellgold/Portfolio" techs={["svelte"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
        </Project>
        <Project title="Atlas" icon="php" github_link="https://github.com/Steellgold/AtlasCore" year="2019 → 2020" techs={["pmmp"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
        </Project>
        <Project title="Rox" icon="typescript" year="2020 → now" co_author="RomainSav" gh_co_othor="RomainSav">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
        </Project>
      </ProjectGroup>
    </div>
  </div>
  <br>
</section>

<style lang="scss">
  @import "../lib/scss/animations.scss";
  @import "../lib/scss/variables.scss";

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 65px;
    img.wave {
      margin-bottom: -15px;
    }

    @media (max-width: 768px) {
      font-size: 40px;

      img.wave {
        height: 100px;
        margin-bottom: -15px;
      }
    }
  }

  .text {
    font-weight: 200;
    font-size: 20px;
    margin-top: -100px;
    line-height: 30px;
    width: 60%;
    text-align: center;

    @media (max-width: 768px) {
      margin-top: -60px;
      font-size: 20px;
      text-align: center;
    }
  }

  section.projects {
    background-color: $color-background-100;
  }
</style>