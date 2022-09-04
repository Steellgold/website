<script lang="ts">
  import { Text } from "$lib/components/elements/text";
</script>

<header>
  <div class="title">
    <Text type="h1" size="3xl" weight="bold" align="center">Hey 👋</Text>
  </div>

  <Text type="p" align="center" width={50}>
    Gaëtan, 17 years old, passionate about programming and computer science, I am a PHP developer, I am currently learning Web development and Java
  </Text>
</header>

<style lang="scss">
  @import "../lib/scss/colors.scss";
  @import "../lib/scss/variables.scss";

  header {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>