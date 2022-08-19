<h1 class="center">Hey <span class="wave">👋🏻</span></h1>

<style lang="scss">
  @import "../lib/scss/animations.scss";

  .center {
    text-align: center;
    /** center the text in middle of screen */
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
  }

  @media (max-width: 768px) {
    .center {
      font-size: 50px;
    }
  }

  h1 {
    font-weight: 800;
  }
</style>