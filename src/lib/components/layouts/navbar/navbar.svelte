<script lang="ts">
  let active = false;
</script>

<div class="nav">
  <div class="logo">
    <img src="/profile.jpg" alt="Logo">
  </div>

  <div class="links" class:active={!active}>
    <a href="/">Réalisations</a>
    <a href="/">Projets</a>
    <a href="/">Blog</a>
  </div>

  <i class="fa-solid " class:fa-x={active} class:fa-bars={!active} on:click={() => active = !active}></i>
</div>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $secondary;

    height: 7vh;
    padding: 20px;

    i {
      display: none;
    }

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      background: none;
      height: fit-content;
      padding: 0 0;
      position: relative;

      i {
        position: absolute;
        display: block;
        font-size: 30px;

        top: 30px;
        right: 30px;
        z-index: 20;
      }

      .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        background: $secondary;
        z-index: 10;
      }
    }

    .logo {
      img {
        border-radius: 20%;
        height: 50px;

        @media (max-width: $breakpoint-md) {
          padding: 20px 0;
          height: 50px;
          border-radius: 40%;
        }
      }
    }

    .links {
      display: flex;
      align-items: center;

      a {
        color: $white;
        text-decoration: none;
        margin: 0 10px;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 20px;
      }

      @media (max-width: $breakpoint-md) {
        position: absolute;
        top: 100%;

        flex-direction: column;
        transition-duration: 0.50s;

        background: $secondary;
        width: 100%;

        padding-top: 10px;
        padding: 10px 0;
        gap: 3px;
        height: fit-content;

        &.active {
          top: 0;
        }

        a {
          font-size: 20px;
        }
      }
    }
  }
</style>