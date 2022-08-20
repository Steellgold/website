<div>
  <nav>
    <img src="/images/profile.jpg" alt="logo">
  
    <ul>
      <li>
        <a href="/about" class="link">About me</a>
      </li>    
      <li>
        <a href="/projects" class="link">Projects</a>
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @import "../scss/variables.scss";

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      border-radius: 15px;
      height: 60px;
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
      }

      a:hover:not(.active) {
        background-color: #111;
      }
    }
  }
</style>