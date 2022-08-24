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
    <div class="text">
      <p class="subtitle">{small_description}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .article {
    display: flex;
    background-color: #1D212C;
    border-radius: 20px;
    width: 44%;
    padding: 10px;

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      
      .text {
        display: flex;
        justify-content: space-between;
        
        h2 {
          font-weight: 800;
          color: white;
          font-size: 1.5rem;
        }

        p.subtitle {
          color: #B5B5B5;
          font-weight: 500;
          font-size: 20px;
        }

        p.position {
          color: #B5B5B5;
          font-weight: 500;
          font-size: 20px;
          margin-right: 13px;
      }

        hr {
          width: auto;
          height: 0;
          border-top: 3px solid #fff;
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      
      h2 {
        font-size: 12px;
      }
    }

    img.icon {
      margin-right: 1rem;
      border-radius: 20px;
    }
  }
</style>