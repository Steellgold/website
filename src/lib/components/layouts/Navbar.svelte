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

  nav {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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