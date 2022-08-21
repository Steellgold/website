<script>
  import Bar from "$lib/components/layouts/Navbar.svelte";
  import Button from "$lib/components/elements/naviguation/Button.svelte";
  import Project from "$lib/components/layouts/Project.svelte";
</script>

<Bar/>

<header>
  <div class="title">
    <h1>Salut</h1>
    <img class="wave" src = "/images/FluentWave.svg" alt="Wave"/>
  </div>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis est, officiis aliquid voluptates quidem esse suscipit consequuntur repellat cupiditate fugit recusandae hic voluptatibus molestias adipisci natus! Cupiditate reprehenderit non aspernatur!</p>

  <div class="buttons">
    <Button link="https://github.com/Steellgold" icon="dark/GitHub.png">GitHub</Button>
    <Button link="https://youtube.com/Steellgold" icon="dark/YouTube.png">YouTube</Button>
    <Button link="https://twitter.com/Steellgold" icon="dark/Twitter.png">Twitter</Button>
  </div>
</header>

<section class="projects">
  <div class="list">
    <Project title="Portfolio" icon="svelte" github_link="https://github.com/Steellgold/Portfolio" techs={["typescript","javascript","html", "css", "sass"]}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
    </Project>
    <Project title="Lunastia" icon="java" year="2022 → now" techs={["spigot","maven"]}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
    </Project>
    <Project title="RoyaumeBot" icon="typescript" github_link="https://github.com/Virtual-Royaume/Royaume-Discord-Bot" year="2022" techs={["nodejs","discordjs"]} participe=true>
      It is the bot of our Discord community, it offers various utility features. It is written in TypeScript and uses the DiscordJS package to interact with the Discord API.
    </Project>
    <Project title="Rox" icon="typescript" year="2020 → now" co_author="RomainSav" techs={["nodejs", "discordjs"]}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
    </Project>
    <Project title="Atlas" icon="php" github_link="https://github.com/Steellgold/AtlasCore" year="2019 → 2020" techs={["pmmp"]}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae aliquid qui ex laboriosam minus, assumenda est maxime nam et pariatur accusantium eum. Eligendi, unde assumenda! Esse quae voluptate omnis.
    </Project>
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
    }
  }
</style>
