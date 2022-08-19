<h1 class="center">Salut <span class="wave">👋🏻</span></h1>

<style>
  @media screen and (max-width:480px) {
    .center {
      position: absolute;
      top: 30%;
      left: 35%;
      margin-top: -50px;
      margin-left: -50px;
      font-size: 60px;
    }
  }

  @media screen and (min-width:480px) {
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
    }
  }

  h1 {
    text-align: center;
  }

  span.wave {
      animation-name: wave-animation;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      transform-origin: 70% 70%;
      display: inline-block;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
  }
</style>