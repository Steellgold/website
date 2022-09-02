<script lang="ts">
  export let value: string = '';

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<textarea cols="70" rows="20" on:change="{changeValue}"></textarea>

<style lang="scss">
  @import "../../../../lib/scss/variables.scss";

  textarea {
    font-family: $font-family;
    font-weight: $font-weight-400;

    padding: 15px;
    background-color: #283651;
    border: 0;
    color: #fff;

    max-width: 500px;
    min-height: 280px;

    &:focus {
      outline: none;
      color: #fff;
    }
    
    &::placeholder {
      color: #FFFFFF;
    }
  }
</style>