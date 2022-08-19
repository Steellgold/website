<div class="nav">
  <nav class="navbar">
    <img class="pdp" src="/images/profile.jpg" alt="Profile Picture" width="40px" height="40px">

    <div class="navbar-links">
      <a class="navbar-link" href="/">Home</a>
      <a class="navbar-link" href="/">Projects</a>
      <a class="navbar-link" href="/">Contact</a>
    </div>
  </nav>
</div>

<style lang="scss">
  .nav {
    a.navbar-link {
      font-weight: 500;
    }
  }

  nav.navbar {
    display: flex;
    justify-content: center;
  }

  .navbar-links {
    display: flex;
    gap: 10px;
  }

  a.navbar-link {
    justify-content: flex-end;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
  }

  img.pdp {
    border-radius: 10px;
  }
</style>