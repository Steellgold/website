<script lang="ts">
  import Input from "$lib/components/elements/form/Input.svelte";

</script>

<div class="page">
  <h1>Création d'un nouvel article</h1>

  <div class="row">
    <div class="col1">
      <Input type="text" placeholder="Title" />
      <Input type="text" placeholder="Sous-titre" />
    </div>

    <div class="col2">
      <p>un truc a la place de ca</p>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";

  .page {
    padding: 10px;

    h1 {
      padding: 10px;
      text-align: center;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;

      .col1 {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .col2 {
        
      }
    }
  }
</style>