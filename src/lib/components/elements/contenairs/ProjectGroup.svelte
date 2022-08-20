<script lang="ts">

</script>

<div class="projects">
  <slot></slot>
</div>

<style lang="scss">
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 963px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
</style>