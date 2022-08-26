<script lang="ts">
  /** @type {import('./$types').PageServerLoad} */
  export let data: any;
</script>

<div class="article">
  {#if data.article.banner_url}
    <img class="banner" src="{data.article.banner_url}" alt="">
  {/if}

  <div class="infos">
    <div class="in1">
      <p>Published at {data.article.published_date}</p>
      <p>By: Steellgold</p>
    </div>
    <div class="in2">
      <p>Technologies</p>
      <div>
        {#each ["php", "javascript", "typescript", "svelte"] as technology}
          <span>{technology}</span>
        {/each}
      </div>
    </div>
  </div>
  
  <!-- <h1>{data.article.content.title}</h1> -->
  <!-- <h4>{data.article.content.subtitle}</h4> -->
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";
  
  img.banner {
    height: 50%;
    border-radius: 0px 0px 40px 40px;

    @media (max-width: 768px) {
      width: 90%;
      border-radius: 0px 0px 20px 20px;
    }
  }

  .article {
    display: flex;
    align-items: center;
    flex-direction: column;

    .infos {
      width: 65%;
      .in1{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        color: $color-gray;
        font-weight: 500;
      }

      
    }

    h1 {
      font-weight: 900;
      text-align: center;
      margin-top: 20px;
      text-transform: uppercase;
    }

    h4 {
      text-align: center;
      font-weight: 600;
      color: $color-gray-200;

      @media (max-width: 768px) {
        font-size: 15px;
        width: 95%;
      }
    }
  }
</style>