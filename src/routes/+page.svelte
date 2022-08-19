<script>
  import Bar from "$lib/components/Bar.svelte";
</script>

<div class="page">
  <div class="title">
    <h1>Salut <span class="wave">
      <img class="wave" src = "/images/FluentWave.svg" height="150em" alt="Wave"/>
    </span></h1>
  </div>
  <div class="text">
    <p>
      wsh la street
    </p>
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
      text-align: center;;
    }
  }
</style>