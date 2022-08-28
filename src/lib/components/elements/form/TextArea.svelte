<script lang="ts">
  export let placeholder: string;
</script>

<textarea placeholder={placeholder} cols="70" rows="10"></textarea>

<style lang="scss">
  @import '../../../scss/variables.scss';
  
  textarea {
    padding: 13px;

    background-color: $color-background-input;
    border: 3px solid $color-background-input;
    border-radius: $textarea-border-radius;
    color: $color-background-input-text;
    font-weight: $font-weight-600;
    font-family: $font-family;

    &:focus {
      outline: none;
      border: 3px solid $color-background-input-focus;
    }
  }
</style>