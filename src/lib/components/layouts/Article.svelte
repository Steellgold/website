<script lang="ts">
  export let id: string;
  export let title: string;
  export let published_date: string;
  export let small_description: string;
  export let primaryTechIcon: string;
  export let banner: string | null = null;
</script>

<div class="article">
  {#if banner}
    <img class="banner" src="{banner}" alt="Banner">
  {/if}

  <div class="infos">
    <img class="icon" src="/icons/techs/{primaryTechIcon}.png" alt="primary skill"/>

    <div>
      <h2>{title}</h2>
      <p class="subtitle">{small_description}</p>
      <p class="date">Published at {published_date}</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

  .article {
    background-color: $color-primary;
    border-radius: 20px;
    width: 600px;
    padding: 10px;

    .banner {
      border-radius: 26px;
      width: 100%;
      height: 200px;
    }

    .infos {
      padding: 5px 0px;
      gap: 4px;
      display: flex;
      width: 100%;
      
      img.icon {
        margin-right: 1rem;
        border-radius: 20px;
      }

      h2 {
        font-weight: 800;
        color: white;
        font-size: 20px;
      }

      p.subtitle {
        color: $color-gray;
        font-weight: 500;
        font-size: 15px;
      }

      p.date {
        color: $color-gray;
        font-weight: 500;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
      }

      @media screen and (max-width: 768px) {
        width: 100%;

        h2 {
          font-size: 15px;
        }

        p.subtitle {
          font-size: 15px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
</style>