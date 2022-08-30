<script lang="ts">
  import Alert from "$lib/components/layouts/Alert.svelte";
  export let isMultiple: boolean = false;
  export let label: string = "Choose an image for the article banner, by clicking or dragging a file here";

  let active = false;
  let error = "";

  function onChange(e: any) {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      active = true;
      error = "Please select an image file";
      setTimeout(() => {
        active = false;
      }, 3000);
    }else{
      const div = e.target.parentElement;
      div.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
      // TODO: Check size
    }
  }
</script>

{#if active}
  <Alert type="error" message="Please upload an image file" />
{/if}

<div class="file-drop-area">
  <span class="file-msg">{label}</span>
  <input class="file-input" type="file" multiple={isMultiple} on:change="{onChange}" />
</div>

<style lang="scss">
  @import "../../../../lib/scss/variables.scss";

  .file-drop-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 200px;
    padding: 15px;
    background-color: #283651;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    // on hover
    &:hover {
      background-color: #2a3444;
    }
    
    transition: 0.3s;
  }

  .file-msg {
    font-size: small;
    font-weight: $font-weight-400;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .file-input {
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    &:focus {
      outline: none;
    }
  }
</style>