<script>
  import Bar from "$lib/components/layouts/Navbar.svelte";
  import Button from "$lib/components/elements/naviguation/Button.svelte";
  import ButtonGroup from "$lib/components/elements/contenairs/ButtonGroup.svelte";
</script>

<Bar/>

<div class="page">
  <div class="title">
    <h1>Salut <span class="wave">
      <img class="wave" src = "/images/FluentWave.svg" height="150em" alt="Wave"/>
    </span></h1>
  </div>
  <div class="text">
    <p>
      Gaëtan, 17 ans, passionné de la programmation et de l'informatique, je suis développeur PHP, j'apprend actuellement le développement Web ainsi que le Java
    </p>
  </div>

  <div class="links">
    <ButtonGroup>
      <Button link="https://github.com/Steellgold" icon="dark/GitHub.png">GitHub</Button>
      <Button link="https://youtube.com/Steellgold" icon="dark/YouTube.png">YouTube</Button>
      <Button link="https://twitter.com/Steellgold" icon="dark/Twitter.png">Twitter</Button>
    </ButtonGroup>
  </div>
</div>

<style lang="scss">
  @import "../lib/scss/animations.scss";

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

    @media (max-width: 768px) {
      margin-top: -60px;
      font-size: 20px;
      text-align: center;
    }
  }
</style>