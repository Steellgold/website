<div>
  <nav>
    <img src="/images/profile.jpg" alt="logo">
  
    <ul>
      <li>
        <a href="/" class="link">About me</a>
      </li>
      <li>
        <a href="#projects" class="link">Projects</a>
      </li>
    </ul>
  </nav>

  <!-- A faire: Faire une version mobile (😰) -->
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

  // .waves {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: -1;
  //   color: aliceblue;

  //   img {
  //     width: 100%;
  //     height: 100%;
  //   }

  //   @media (max-width: 768px) {
  //     img {
  //       width: 100%;
  //       height: 200px;
  //     }
  //   }
  // }

  nav {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-background-100-opacity;

    img {
      border-radius: 15px;
      height: 60px;
      @media (max-width: 768px) {
        height: 50px;
      }
    }

    ul {
      list-style-type: none;
      overflow: hidden;
    }

    li {
      float: left;

      a {
        display: block;
        color: $color-white;
        font-weight: bold;
        text-transform: uppercase;
        background-color: $color-background;
        text-align: center;
        padding: 16px 16px;
        text-decoration: none;
        transition: background 0.3s;
        border-radius: 50px;
      }

      a:hover:not(.active) {
        background-color: $color-background-hover;
      }
    }
  }
</style>