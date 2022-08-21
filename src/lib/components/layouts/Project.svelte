<script lang="ts">
  import Button from "$lib/components/elements/naviguation/Button.svelte";

  export let title = "";
  export let year = "";
  export let icon: string | null = null;
  export let techs: string[] | null = null;
  export let co_author: string | null = null;
  export let github_link: string | null = null;
  export let button_text: string | null = null;
  export let participe: boolean | null = null;
  // export let active: boolean = true;
</script>

<div class="card">
  <div class="lang">
    <img width="150px" height="150px" alt="" src="/icons/techs/{icon}.png">
  </div>

  <div>
    {#if participe}
      <span class="subtitle">I participate in the project:</span>
    {/if}
    <h1 class="title">{title}</h1>
    {#if participe}
      <span class="subtitle">since {year}</span>
    {:else}
      <span class="subtitle">{year}</span>
    {/if}
  </div>

  <p><slot></slot></p>

  {#if techs}
    <div class="technos">
      <span class="subtitle"><u>Technologies used:</u></span>

      <div class="techs">
        {#each techs as tech}
          <img width="50px" height="50px" alt="" src="/icons/techs/{tech}.png">&nbsp;
        {/each}      
      </div>
    </div>
  {/if}

  {#if co_author}
    <span class="subtitle">Co-author: <a href="https://github.com/{co_author}">@{co_author}</a></span>
  {/if}
    
  {#if github_link}
    <span class="button">
      <Button link={github_link} icon="dark/GitHub.png">
        {#if button_text}
          {button_text}
        {:else}
          GitHub
        {/if}
      </Button>
    </span>
  {/if}
</div>

<style lang="scss">
  // hr {
  //   margin: 0;
  //   background-color: white;
  //   width: 10%;
  //   margin: auto;
  // }

  span.button {
    margin: auto;
    width: 60%;
  }

  .card {
    position: relative;

    display: flex;
    flex-direction: column;
    width: 300px;
    height: fit-content;
    margin-top: 30px;
    padding: 30px 10px;
    gap: 20px;
    background: #111827;
    border: 10px solid #FFFFFF;
    border-radius: 30px;
    text-align: center;

    @media (max-width: 768px) {
      padding: 25px 2px;

      p {
        font-size: 15px;
      }
    }

    a {
      color: #FFFFFF;
    }

    h1 {
      margin: 0;
      margin-top: 5px;
      text-align: center;
    }

    .technos {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    span.subtitle {
      text-align: center;
    }

    .lang {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);

      width: 50px;
      height: 50px;
      
      background-color: white;

      border: 5px solid white;
      border-radius: 10px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .techs {
      img {
        height: 30px;
        width: 30px;
        border-radius: 10px;
      }
    }
  }
</style>