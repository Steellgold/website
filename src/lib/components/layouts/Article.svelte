<script lang="ts">
  import Tag from "../elements/naviguation/Tag.svelte";

  export let id: string; // for the <a>, todo
  export let title: string;
  export let published_date: string;
  export let small_description: string;
  export let primary_tech: string | null = null;
  export let banner_url: string | null = null;
  export let tags: string[] = [];
  export let difficulty: string;
</script>

<div class="article">
  {#if banner_url}
    <a href="/blog/{id}">
      <img class="banner" src="{banner_url}" alt="Banner">
    </a>
  {/if}

  <div class="infos">
    {#if primary_tech}
      <!-- TODO: Show articles with this tech -->
      <img class="icon" src="/icons/techs/{primary_tech}.png" alt="primary skill"/>
    {/if}

    <div class="center">
      <a href="/blog/{id}"><h2>{title}</h2></a>
      <a href="/blog/{id}"><p class="subtitle">{small_description}</p></a>
    </div>
  </div>
  <div class="footer">
    {#if difficulty}
      <p>Difficulty: <b>{difficulty}</b></p>
    {/if}

    <p>Author: Steellgold</p>
    <p>Published at {published_date}</p>
  </div>

  {#if tags}
    <div class="tags">
      {#each tags as tag}
        <Tag title={tag} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

  .article {
    background-color: $color-primary;
    border-radius: 20px;
    width: 600px;
    padding: 10px;

    a {
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }

    .banner {
      border-radius: 26px;
      width: 100%;
      height: 200px;
    }

    .footer {
      color: $color-gray;
      font-weight: 500;
      padding: 3px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      margin-bottom: -19px;
    }

    .infos {
      padding: 5px 0px;
      gap: 4px;
      width: 100%;
      display: flex;
      
      .center {
        align-self: center;
      }

      img.icon {
        margin-right: 1rem;
        border-radius: 20px;
      }

      h2 {
        font-weight: 800;
        color: white;
        font-size: 20px;
        text-transform: uppercase;

        @media (max-width: 768px) {
          font-size: 13px;
        }
      }

      p.subtitle {
        color: $color-gray;
        font-weight: 500;
        font-size: 15px;

        @media (max-width: 768px) {
          font-size: 13px;
        }
      }
    }

    .tags {
      display: flex;
      padding: 10px;
      justify-content: flex-end;
      gap: 10px;
    }
  }
</style>