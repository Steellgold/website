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
    <Button link="https://steellgold.fr" iconType="fontawesome" icon="fa-brands fa-github" iconSize="md"  disabled={false}>
      Gaëtan 🐈#2728
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
  }
</style>