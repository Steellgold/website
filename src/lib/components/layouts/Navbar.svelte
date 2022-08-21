<script lang="ts">
  import { onMount } from "svelte";

  let online: string = "offline";
  let avatar = "";

  onMount(async () => {
    const response = await fetch("https://api.lanyard.rest/v1/users/504392983244832780");
    const data = await response.json();
    online = data.data.discord_status;
    avatar = data.data.discord_user.avatar;
  });
</script>

<div>
  <nav>
    <!-- <img src="/images/profile.jpg" alt="logo"> -->

    <div class="discord-status">
      <img src="https://cdn.discordapp.com/avatars/504392983244832780/f3af1c0ca6af234103b6241839d447d3.png" alt="discord">
      <span class="back-status">&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span class="status {online}">&nbsp;&nbsp;&nbsp;&nbsp;</span>
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