<script lang="ts">

</script>

<div class="buttons">
  <slot></slot>
</div>

<style lang="scss">
  .buttons {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }
</style>