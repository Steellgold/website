<script lang="ts">
  export let data: any; 
</script>

<div>
  <nav class="navbar">
    <div class="discord-status">
      <img id="discord-avatar" src="{data.user.avatar}" alt="discord">
      <span class="back-status"></span>
      <span class="status {data.user.status}"></span>
    </div>
  
    <ul>
      <li>
        <a href="/" class="link">About me</a>
      </li>
      <li>
        <a href="#projects" class="link">Projects</a>
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

    <!-- TODO: Vue PC -->
  {/if}
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

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
  }

  nav.rich-presence {
    background-color: $color-background-100-opacity;
    display: flex;
    padding: 20px;
    margin: 0;
    justify-content: space-between;
    align-items: center;
  
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