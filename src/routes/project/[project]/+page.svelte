<script lang="ts">
  /** @type {import('./$types').PageData} */

  import { base } from "$app/paths";
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
    <p class="small">{project.small_description}</p>

    <hr>
    
    <div class="desc">
      <p>
        Lorem ipsum dolor sit amet. Sed earum dolore in numquam rerum et omnis cupiditate non incidunt ipsum voluptas consequatur qui porro alias et voluptatum nisi. Sit quisquam officiis qui eligendi voluptatem ut mollitia enim et voluptatem voluptates et temporibus molestias et inventore laborum. Quo soluta quae eos minima voluptatem est quae velit ut debitis quis ut recusandae esse qui tenetur ipsa eum quisquam accusamus! Et tempora soluta eum libero quibusdam ad officia veritatis est minima soluta. Aut fuga aperiam At consectetur voluptas rem nostrum facilis. Ut neque saepe ad enim nihil id vitae. Sed provident quod quo quaerat aperiam aut earum quia. Eos consequatur incidunt nam libero velit 33 quae esse et Quis quia sed suscipit sint sit impedit dicta est reiciendis cumque. Quo expedita temporibus vel magnam omnis ex voluptas quod. Ut internos fugit aut repellendus maxime et esse porro ex distinctio unde eum laborum quidem. Ab nesciunt ipsa non possimus doloribus et eligendi tempore. Ut doloribus voluptatem sed possimus deleniti aut quas ratione aut dignissimos quibusdam est enim! Sed minima atque vel internos sunt est repellendus magni ut enim iure vel natus sunt eum labore dolorem. Id doloribus necessitatibus et perferendis esse et quisquam maxime.<br><br>
        Et dolorem dolores qui asperiores amet ex voluptas excepturi. A debitis animi aut pariatur animi eos quia consequatur id itaque voluptatem non voluptatum sunt in reiciendis praesentium. In galisum asperiores sit placeat quia non corporis accusantium cum doloremque labore 33 quibusdam nemo et deserunt provident est error internos.<br><br>
        Est facilis itaque nam sequi voluptatem et dolores quae ut similique enim qui omnis sint? Cum quasi aliquam quo veniam voluptatum et repellendus beatae aut architecto saepe. Et voluptas officia et accusamus incidunt ex vitae voluptatem non nulla similique et perspiciatis delectus sed cumque quisquam ab obcaecati laudantium. Cupiditate voluptatem eos omnis animi tenetur blanditiis eos perspiciatis deleniti non voluptatibus beatae sed repellat tenetur sit earum provident. Qui animi omnis eum aperiam recusandae a enim quis et nisi libero non fugiat autem eum error numquam? Aut eius accusamus 33 similique sint nam maiores ipsa non saepe sunt non velit incidunt et perspiciatis reiciendis. Et corporis reiciendis At similique labore et ratione perspiciatis. Qui illo nobis et adipisci assumenda vel quia dolores et eius necessitatibus. Id porro quia non quisquam earum est tempora sequi. Quo autem atque est placeat itaque est autem autem 33 libero galisum. Ut optio nulla ea soluta autem in cumque illo. Vel debitis velit est debitis quasi est veritatis voluptatem. Aut consequatur corporis et doloribus esse id veritatis odio non numquam porro ea autem voluptatibus id quaerat illum ad beatae alias. Ad eligendi pariatur ab error autem nam soluta aliquid
      </p>
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
      }
    }

    hr {
      margin: 30px;
      width: 30%;
      align-self: center;
      padding: 2px;
      background: #D9D9D9;
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