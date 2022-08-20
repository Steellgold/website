<script lang="ts">
  export let title = "";
  export let icon: string | null = null;
  export let active: boolean = true;

  import Button from "../elements/naviguation/Button.svelte";
</script>

<div class="card">
  <div class="lang">
    <img width="150px" height="150px" alt="" src="/icons/prog/{icon}.png">
  </div>

  <h1 class="title">{title}</h1>
  <p><slot></slot></p>

  <Button>GitHub</Button>
</div>

<style lang="scss">
  @import "../../scss/variables.scss";
  
  .card {
    position: relative;

    display: flex;
    flex-direction: column;
    width: 300px;
    height: fit-content;
    margin-top: 25px;
    padding: 30px 10px;
    gap: 20px;
    background: #111827;
    border: 10px solid #FFFFFF;
    border-radius: 30px;
    text-align: center;

    @media (max-width: 768px) {
      padding: 25px 2px;

      p {
        font-size: 15px;
      }
    }

    h1 {
      margin: 0;
      text-align: center;
    }

    .lang {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);

      width: 50px;
      height: 50px;
      
      background-color: white;

      border: 5px solid white;
      border-radius: 10px;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>