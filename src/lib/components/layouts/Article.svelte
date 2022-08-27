<script lang="ts">
  import Tag from "../elements/navigation/Tag.svelte";

  export let id: string; // for the <a>, todo
  export let title: string;
  export let published_date: string;
  export let smallDescription: string;
  export let primaryTech: string | null = null;
  export let bannerUrl: string | null = null;
  export let tags: string[] = [];
  export let difficulty: string;
</script>

<div class="article">
  {#if bannerUrl}
    <a href="/blog/view/{id}">
      <img class="banner" src="{bannerUrl}" alt="Banner">
    </a>
  {/if}

  <div class="infos">
    {#if primaryTech}
      <!-- TODO: Show articles with this tech -->
      <img class="icon" src="/icons/techs/{primaryTech}.png" alt="primary skill"/>
    {/if}

    <div class="center">
      <a href="/blog/view/{id}"><h2>{title}</h2></a>
      <a href="/blog/view/{id}"><p class="subtitle">{smallDescription}</p></a>
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