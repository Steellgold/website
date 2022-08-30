<script lang="ts">
  export let isMultiple: boolean = false;
  export let label: string = "Choose an image for the article banner, by clicking or dragging a file here";

  function onChange(e: any) {
    console.log(e);
    // get the file
    const file = e.target.files[0];
    console.log(file);
    // check if it's an image
    if (!file.type.startsWith("image/")) {
      document.getElementById("error").innerHTML = "Please upload an image file";
      return;
    }
  }
</script>

<div class="file-drop-area">
  <span class="file-msg">{label}</span>
  <span id="error" class="error-msg"></span>
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