<script lang="ts">
  export let title: string;
  export let published_date: string;
  export let small_description: string;
  export let primaryTechIcon: string;
</script>

<div class="article">
  <img class="icon" src="/icons/techs/{primaryTechIcon}.png" alt="primary skill"/>
  <div class="infos">
    <h2>{title}</h2>
    <p class="subtitle">{small_description}</p>
  </div>
</div>

<style lang="scss">
  @import "../../scss/variables.scss";

  .article {
    display: flex;
    background-color: $color-primary;
    border-radius: 20px;
    width: 600px;
    padding: 10px;

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      
      h2 {
        font-weight: 800;
        color: white;
        font-size: 20px;
      }

      p.subtitle {
        color: $color-gray;
        font-weight: 500;
        font-size: 20px;
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

    img.icon {
      margin-right: 1rem;
      border-radius: 20px;
    }
  }
</style>