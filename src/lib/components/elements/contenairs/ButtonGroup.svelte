<script lang="ts">

</script>

<div class="buttons">
  <slot></slot>
</div>

<style lang="scss">
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>