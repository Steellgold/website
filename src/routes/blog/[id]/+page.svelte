<script lang="ts">
  interface Article {
    title: string;
    small_description: string;
    primary_tech: string;
    published_date: string;
    content: any;
  }

  export let data: any;
  export let article: Article = data.article;
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
      <div class="techs">
        {#each ["php", "javascript", "typescript", "svelte"] as technology}
          <img src="/icons/techs/{technology}.png" alt="{technology} icon">
        {/each}
      </div>
    </div>
  </div>

  <div class="content">
    {@html article.content.body}
  </div>
  
  <!-- <h1>{data.article.content.title}</h1> -->
  <!-- <h4>{data.article.content.subtitle}</h4> -->
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";
  
  img.banner {
    height: 50%;
    border-radius: 0px 0px 40px 40px;

    @media (max-width: 768px) or (max-width: 820px) or (max-width: 912px) {
      width: 90%;
      border-radius: 0px 0px 20px 20px;
    }
  }

  .article {
    display: flex;
    align-items: center;
    flex-direction: column;

    .infos {
      width: 55%;
      padding: 10px;
      color: $color-gray;
      font-weight: 500;

      @media (max-width: 768px) or (max-width: 820px) or (max-width: 912px) {
        font-size: 15px;
        width: 80%;
      }

      .in1 {
        display: flex;
        justify-content: space-between;
      }
      
      .in2 {
        margin-top: 10px;

        .techs {
          margin-top: 5px;
          display: flex;
          align-items: center;
        }

        img {
          width: 35px;
          height: 35px;
          margin-right: 5px;
          border-radius: 8;
        }
      }
    }
    
    .content {
      padding: 10px;
      width: 60%;
      color: $color-gray;

      @media (max-width: 768px) or (max-width: 820px) or (max-width: 912px) {
        width: 90%;
      }
    }
  }
</style>