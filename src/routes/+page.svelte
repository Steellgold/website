<script>
  import Bar from "$lib/components/layouts/Navbar.svelte";
  import Button from "$lib/components/elements/naviguation/Button.svelte";
  import Project from "$lib/components/layouts/Project.svelte";
</script>

<Bar/>

<header>
  <div class="title">
    <h1>Hey</h1>
    <img class="wave" src = "/images/FluentWave.svg" alt="Wave"/>
  </div>

  <p>Gaëtan, 17 years old, passionate about programming and computer science, I am a PHP developer, I am currently learning Web development and Java<p>

  <div class="buttons">
    <Button link="https://github.com/Steellgold" icon="dark/GitHub.png">Gaëtan H</Button>
    <Button link="https://discord.com/users/504392983244832780" icon="light/Discord.png">Gaëtan 🐈#2728</Button>
    <Button link="https://youtube.com/Steellgold" icon="light/YouTube.png">Steellgold</Button>
    <Button link="https://twitter.com/Steellgold" icon="light/Twitter.png">Gaëtan</Button>
    <Button link="https://instagram.com/steellgold" icon="light/Instagram.png">steellgold</Button>
  </div>
</header>

<section class="projects">
  <div class="list">
    <Project title="Portfolio" icon="svelte" github_link="https://github.com/Steellgold/Portfolio" techs={["typescript","javascript","html", "css", "sass"]}>
      I decided to make a Portfolio myself using a web framework "Svelte" where I know absolutely nothing about the basics, nor in CSS or I do it myself without Bootstrap or others.<br>I'm not a web developer at all and I really enjoy using Svelte since I started.
    </Project>
    <Project title="Lunastia" icon="java" year="2022 → now" techs={["spigot","maven"]}>
      Minecraft server on the Desktop version, written in <b>Java</b> on the <b>Spigot</b> software, with the primary goal of training, learning Java, and secondarily opening a server on a version with a language that is not my <abbr title="I'm used to PHP with PocketMine-MP">comfort zone</abbr>
    </Project>
    <Project title="RoyaumeBot" icon="typescript" github_link="https://github.com/Virtual-Royaume/Royaume-Discord-Bot" year="2022" techs={["nodejs","discordjs"]} participe=true>
      I am part of the "Royaume" community, a community of developers in which I participate in the development of some open source projects such as their Bot Discord
      <br>
    </Project>
    <Project title="Rox" icon="typescript" github_link="https://github.com/Steellgold/Rox" button_text="GitHub (old)" year="2020 → now" co_author="RomainSav" techs={["nodejs", "discordjs"]}>
      A bot initially developed by me alone in JavaScript without having concrete knowledge, it reached <b><abbr title="Total number of members from the servers where they were">100 000 users</abbr></b> but I stopped the development due to lack of knowledge and lack of time <br>Resumed in 2022 in TypeScript with RomainSav to relaunch it, with a clean, uncluttered and understandable code.
    </Project>
    <Project title="Atlas" icon="php" github_link="https://github.com/Steellgold/AtlasCore" year="2019 → 2020" techs={["pmmp"]}>
      A server with <b>4100+ unique players</b> (at the time of my departure). I developed the whole first version as well as the pre-release which was under another name (RivalityShock PvP) which lasted 4 months (from the moment I arrived), this is where I was able to use my knowledge of PocketMine-MP and get to where I am now
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

      @media (max-width: $breakpoint-xl) {
        grid-template-columns: 350px 350px; // TODO : fix this
      }

      @media (max-width: $breakpoint-sm) {
        grid-template-columns: 350px; // TODO : fix this
      }
    }
  }
</style>
