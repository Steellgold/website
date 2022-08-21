<script lang="ts">
  import { onMount } from "svelte";

  let online: string = "offline";
  let avatar = "";
  
  interface ListeningProp {
    songName: string;
    artistName: string;
    albumName: string;
    albumArtUrl: string;
  }

  let listening: ListeningProp | null = null;

  onMount(async () => {
    const response = await fetch("https://api.lanyard.rest/v1/users/504392983244832780");
    const data = await response.json();
    online = data.data.discord_status;
    avatar = data.data.discord_user.avatar;

    if (data.data.spotify) {
      listening = {
        songName: data.data.spotify.song,
        artistName: data.data.spotify.artist,
        albumName: data.data.spotify.album,
        albumArtUrl: data.data.spotify.album_art_url,
      }
    }

  });
</script>

<div>
  <nav class="navbar">
    <div class="discord-status">
      <img id="discord-avatar" src="https://cdn.discordapp.com/avatars/504392983244832780/{avatar}.png" alt="discord">
      <span class="back-status"></span>
      <span class="status {online}"></span>
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

  <nav class="rich-presence">
    {#if listening}
      <div>
        <h1>Écoute sur Spotify</h1>
        <p>Musique: {listening.songName}</p>
        <p>Album: {listening.albumName}</p>
        <p>Groupe: {listening.artistName}</p>
      </div>
      <div>
        <img src="{listening.albumArtUrl}" alt="Album Art" height="100px">   
      </div> 
    {/if}
  </nav>

  <!-- A faire: Faire une version mobile (😰) -->
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
        height: 15px;
        width: 15px;
        border-radius: 85px;
      }

      span.back-status {
        position: absolute;
        bottom: .5px;
        right: -6.4px;
        height: 18px;
        width: 18px;
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
    padding: 10px;
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