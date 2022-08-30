<script lang="ts">
  import Input from "$lib/components/elements/form/Input.svelte";
  import { FileDrop } from "$lib/components/elements/form/file-drop";
  import TextArea from "$lib/components/elements/form/TextArea.svelte";
</script>

<div class="page">
  <h1>Création d'un nouvel article</h1>

  <div class="row">
    <div class="col1">
      <Input type="text" placeholder="Title" />
      <Input type="text" placeholder="Sous-titre" />
      <Input type="text" placeholder="Technologies" />
      <Input type="text" placeholder="Auteur" value="Steellgold" disabled={true} />
    </div>

    <div class="col2">
      <FileDrop />
    </div>
  </div>

  <div class="row">
    <div class="col1">
      <TextArea />
    </div>

    <div class="col2">
      <Input type="text" placeholder="Description" />
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
      gap: 10px;

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