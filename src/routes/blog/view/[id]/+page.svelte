<script lang="ts">
import type { Timestamp } from 'firebase/firestore';

  import { marked } from 'marked'

  interface Article {
    title: string;
    smallDescription: string;
    primaryTech: string;
    publishedDate: Timestamp;
    content: string;
    bannerUrl: string;
  }

  export let data: any;
  export let article: Article = data.article;
</script>

<div class="article">
  {#if data.article.bannerUrl}
    <img class="banner" src="{data.article.bannerUrl}" alt="">
  {/if}

  <div class="infos">
    <div class="in1">
      <p>Published at {data.article.publishedDate}</p>
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
    {@html marked(article.content)}
  </div>

  <!--   
    <h1>{data.article.content.title}</h1>
    <h4>{data.article.content.subtitle}</h4>
  -->
</div>

<style lang="scss">
  @import "../../../../lib/scss/variables.scss";
  
  img.banner {
    border-radius: 0px 0px 40px 40px;

    @media (max-width: 768px) {
      width: 90%;
      border-radius: 0px 0px 20px 20px;
    }

    @media (max-width: 820px) {
      width: 90%;
      border-radius: 0px 0px 20px 20px;
    }

    @media (max-width: 912px) {
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

      @media (max-width: 768px) {
        font-size: 15px;
        width: 80%;
      }

      @media (max-width: 820px) {
        font-size: 15px;
        width: 80%;
      }

      @media (max-width: 912px) {
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

      > :global(.content-img) {
        border-radius: 4%;
        padding: 10px;
      }

      @media (max-width: 768px) {
        width: 90%;
      }

      @media (max-width: 820px) {
        width: 90%;
      }

      @media (max-width: 912px) {
        width: 90%;
      }
    }
  }
</style>