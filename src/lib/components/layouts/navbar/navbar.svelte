<script lang="ts">

</script>

<div class="nav">
  <img src="/profile.jpg" alt="Logo">

  <div class="links">
    <a href="/">Réalisations</a>
    <a href="/">Projets</a>
    <a href="/">Blog</a>
  </div>

  <i class="fa-solid fa-bars"></i>
</div>

<br>
<br>
<br>
<br>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 7vh;
    padding: 0 25px;
    background: $primary-gradiant;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      height: fit-content;
      gap: 6px;
      padding: 10px 0;
    }

    img {
      border-radius: 10%;
      height: 80%;

      @media (max-width: $breakpoint-md) {
        height: 70px;
      }
    }

    .links {
      display: flex;
      align-items: center;

      a {
        color: $white;
        text-decoration: none;
        margin: 0 10px;
      }

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
      }
    }
  }
</style>