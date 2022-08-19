<h1 class="center">
  Salut
  <span class="wave">
    <img class="wave" src = "/images/FluentWave.svg" height="120em" alt="Wave"/>
  </span>
</h1>
<p>ça va ?</p>

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

    img.wave {
      margin-bottom: -13px;
    }
  }

  @media (max-width: 768px) {
    .center {
      font-size: 50px;

      img.wave {
        height: 56px;
        margin-bottom: -7px;
      }
    }
  }

  h1 {
    font-weight: 800;
  }
</style>