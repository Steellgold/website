<script lang="ts">
  /** @type {import('./$types').PageData} */

  import ButtonGroup from "$lib/components/elements/containers/ButtonGroup.svelte";
  import Button from "$lib/components/elements/navigation/Button.svelte";
  
  interface PageData {
    title: string;
    year: {
      from: string;
      to?: string;
    };
    smallDescription: string;
    description: string;
    banner?: string;
    primaryTechIcon: string;
    techIcons: string[];
    button?: {
      text: string;
      link: string;
      icon: string;
    };
    buttons?: {
      text: string;
      link: string;
      icon: string;
    }[];
    people?: string[] | undefined;
    contributors?: string[] | undefined;
  }

  export let data: { project: PageData };
  let project: PageData = data.project;
</script>

<div class="page">
  <div class="right">
    <h1>{project.title}</h1>
    <p class="small">{@html project.smallDescription}</p>

    <hr>
    
    <div class="desc">
      <p class="long">{@html project.description}</p>
    </div>
  </div>
  
  <div class="left">
    {#if project.banner}
      <img class="banner" src="{project.banner}" width="600" height="450" alt="">
    {/if}

    <div class="users">
      {#if project.people} 
        <div class="people">
          <h2>People</h2>
          {#each project.people as person}
            <a class="user" href="https://github.com/{person}" target="_blank">
              <img class="avatar" src="https://avatars.githubusercontent.com/{person}" alt="{person}"/>
            </a>
          {/each}
          </div>
      {/if}
  
      {#if project.contributors} 
        <div class="contributors">
          <h2>Contributors</h2>
          {#each project.contributors as person}
            <a class="user" href="https://github.com/{person}" target="_blank">
              <img class="avatar" src="https://avatars.githubusercontent.com/{person}" alt="{person}"/>
            </a>
          {/each}
        </div>
      {/if}
    </div>

    {#if project.buttons}
      <div class="buttons">
        <ButtonGroup>
          {#each project.buttons as button}
            <Button link={button.link} icon={button.icon} small={false}>{button.text}</Button>
          {/each}
        </ButtonGroup>
      </div>
    {:else if project.button}
      <div class="buttons">
        <ButtonGroup>
          <Button link={project.button.link} icon={project.button.icon} small={false}>{project.button.text}</Button>
        </ButtonGroup>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";

  .page {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      padding: 20px;
      flex-direction: column;

      .left {
        img.banner {
          width: 100%;
          height: auto;
        }

        img.avatar {
          height: auto;
        }
      }
    }

    hr {
      margin: 30px;
      width: 30%;
      align-self: center;
      padding: 2px;
      background: $color-hr;
      border-radius: 4px;
    }

    .right {
      display: flex;
      flex-direction: column;
      
      p.small {
        align-self: center;
        text-align: center;
        width: 70%;
        margin: 0;
      }

      .desc {
        align-self: center;
        text-align: center;
        width: 80%;

        @media screen and (max-width: 768px) {
          width: 100%;
          text-align: left;
        }
      }

      h1 {
        font-weight: 900;
        text-align: center;
      }
    }

    .left {
      padding: 15px;

      .users {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        > * { // wtf ? (thanks copilot)
          margin-bottom: 15px;
        }

        a {
          text-decoration: none;
        }

        img {
          border-radius: 100%;
          height: 50px;
        }
      }

      .buttons {
        display: flex;
        margin: 0;
        padding: 10px;
      }
      
      .others {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      img {
        border-radius: 10%;
      }
    }
  }
</style>