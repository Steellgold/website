<script lang="ts">
  import { PUBLIC_IS_PREVIEW } from '$env/static/public';
  import { VERCEL_GIT_COMMIT_SHA, VERCEL_GIT_COMMIT_MESSAGE} from '$env/static/private';
  export let data: any;
  
  // on click the a with class: "mobile" the UI change class by "active-links"
  function handleClick() {
    const mobile = document.querySelector('.mobile');
    const mobileLink = document.querySelector('.mobile-link');
    const activeLinks = document.getElementById('links');
    if (!activeLinks) return;
    activeLinks.classList.toggle('disabled-links');

    if (mobileLink) {
      console.log(mobileLink?.innerHTML)
      mobileLink.innerHTML = (mobileLink?.innerHTML === 'Close' ? 'Menu' : 'Close');
    }
  }
</script>

<div>
  {#if PUBLIC_IS_PREVIEW == "true"}
    <div class="preview">
      <p>This is a development mode of the portfolio, you may run into a bug or something like that, go to the <a href="https://steellgold.fr">stable version</a> to be sure not to be surprised</p>
      <p>Deployed from commit: <a href="https://github.com/Steellgold/Portfolio/commit/{VERCEL_GIT_COMMIT_SHA}">{VERCEL_GIT_COMMIT_MESSAGE}</a></p>
    </div>
  {/if}

  <nav class="navbar">
    <div class="discord-status">
      <img id="discord-avatar" src="{data.user.avatar}" alt="discord">
      <span class="back-status"></span>
      <span class="status {data.user.status}"></span>
    </div>
  
    <ul id="links" class="disabled-links">
      <li>
        <a href="/" class="link">About me</a>
      </li>
      <li>
        <a href="/blog" class="link">Blog</a>
      </li> 
      <li>
        <a href="/#projects" class="link">Projects</a>
      </li>
    </ul>

    <ul class="desktop-hide">
      <li class="mobile">
        <a class="link mobile-link" on:click="{handleClick}">Menu</a>
      </li>
    </ul>
  </nav>

  {#if data.spotify.listening}
    <nav id="richPresence" class="rich-presence">
        <div>
          <h2>Currently listening</h2>
          <p><b>Music</b>: {data.spotify.trackName}</p>
          {#if data.spotify.trackName !== data.spotify.albumName}
            <p><b>Album</b>: {data.spotify.albumName}</p>
          {/if}
          <p><b>Group</b>: {data.spotify.artistName}</p>
        </div>
        <div>
          <a href="https://open.spotify.com/track/{data.spotify.trackId}">
            <img src="{data.spotify.albumCover}" alt="Album Icon" height="100px">
          </a>
        </div> 
    </nav>
  {/if}
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

  .preview {
    background: linear-gradient(180deg, rgba(129, 74, 74, 0.74) 0%, rgba(129, 74, 74, 0.47) 100%);
    padding: 20px;
    text-align: center;

    a {
      color: #fff;
    }
  }

  nav.navbar {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-background-100-opacity;

    .discord-status {
      position: relative;

      span.status {
        position: absolute;
        bottom: 2px;
        right: -5px;
        height: 20px;
        width: 20px;
        border-radius: 85px;
      }

      span.back-status {
        position: absolute;
        bottom: .5px;
        right: -6.4px;
        height: 22px;
        width: 22px;
        border-radius: 400px;
        background: $color-background;
      }

      span.online {
        background: $color-discord-green;
      }
      
      span.dnd {
        background: $color-discord-red;
      }
      
      span.idle {
        background: $color-discord-orange;
      }
      
      span.offline {
        background: $color-gray-100;
      }
    }

    img {
      border-radius: 15px;
      height: 70px;
      @media (max-width: 768px) {
        height: 50px;
      }
    }

    ul {
      list-style-type: none;

      li {
        float: left;

        a {
          background-color: $color-background;
          transition: background 0.5s;

          padding: 16px 16px;

          color: $color-white;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;

          border-radius: 50px;

          margin: 0 6px;
        }

        a:hover:not(.active) {
          background-color: $color-background-hover;
        }
      }
    }

    @media (max-width: 768px) {
      ul.disabled-links {
        display: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 10px;
      }
    }

    // Hide the ul desktop-hide on desktop
    @media (min-width: 768px) {
      ul.desktop-hide {
        display: none;
      }
    }
  }

  // adapt navbar to mobile
  nav.rich-presence {
    background-color: $color-background-100-opacity;
    display: flex;
    padding: 20px;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    @media (min-width: $breakpoint-lg) {
      display: none;
    }
  
    img {
      border-radius: 20px;
      border: 3px solid #FFFFFF;
      
      @media (max-width: 768px) {
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>