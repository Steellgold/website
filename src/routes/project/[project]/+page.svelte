<script lang="ts">
  /** @type {import('./$types').PageData} */

  import ButtonGroup from "$lib/components/elements/contenairs/ButtonGroup.svelte";
  import Button from "$lib/components/elements/naviguation/Button.svelte";
  
  interface PageData {
    title: string;
    year: {
      from: string;
      to?: string;
    };
    small_description: string;
    description: string;
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
    <p>{project.small_description}</p>

    {#if project.people} 
      <div class="people">
        <h2>People</h2>
        {#each project.people as person}
          <a class="user" href="https://github.com/{person}" target="_blank">
            <img src="https://avatars.githubusercontent.com/{person}" alt="{person}"/>
          </a>
        {/each}
      </div>
    {/if}

    {#if project.contributors} 
      <div class="contributors">
        <h2>Contributors</h2>
        {#each project.contributors as person}
          <a class="user" href="https://github.com/{person}" target="_blank">
            <img src="https://avatars.githubusercontent.com/{person}" alt="{person}"/>
          </a>
        {/each}
      </div>
    {/if}
  </div>
  
  <div class="left">
    <img src="https://via.placeholder.com/600x450" alt="">

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
        <Button link={project.button.link} icon={project.button.icon} small={false}>{project.button.text}</Button>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .page {
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .right {
      display: flex;
      flex-direction: column;

      img {
        border-radius: 100%;
        height: 50px;
      }

      h1 {
        font-weight: 900;
        text-align: center;
      }

      p {
        width: 80%;
        margin: 0;
        text-align: center;
      }
    }

    .left {
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