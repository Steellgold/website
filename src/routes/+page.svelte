<script lang="ts">
  import { Text } from "$lib/components/elements/text";
  import { Button } from "$lib/components/elements/button";
</script>

<header>
  <div class="title">
    <Text type="h1" size="4xl" weight={900} align="center">Hey 👋</Text>
  </div>

  <Text align="center" width={50}>
    Gaëtan, 17 years old, passionate about programming and computer science, I am a PHP developer, I am currently learning Web development and Java
  </Text>

  <div class="buttons">
    <Button link="https://github.com/Steellgold" iconType="fontawesome" icon="fa-brands fa-github" iconSize="md"  disabled={false}>
      Gaëtan 🐈#2728
    </Button>
    <Button link="https://twitter.com/Steellgold" iconType="fontawesome" icon="fa-brands fa-twitter" iconSize="md"  disabled={false}>
      Steellgold
    </Button>
    <Button link="https://youtube.com/Steellgold" iconType="fontawesome" icon="fa-brands fa-youtube" iconSize="md"  disabled={false}>
      Steellg0ld
    </Button>
    <Button link="https://instagram.com/Steellgold" iconType="fontawesome" icon="fa-brands fa-instagram" iconSize="md"  disabled={false}>
      steellgold
    </Button>
</header>

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  header {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      margin-bottom: 10px;
    }

    .buttons {
      max-width: 90%;
      width: 500px;
      padding: 40px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
  }
</style>