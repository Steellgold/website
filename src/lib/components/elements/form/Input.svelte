<script lang="ts">
  export let value: string | null = null;
  export let type: "text" | "number" | "email" | "tel" | "url" | "password" = "text";
  export let placeholder: string | null = null;
</script>

<input type={type} placeholder={placeholder} value={value ?? ""}>

<style lang="scss">
  @import '../../../scss/variables.scss';

  input {
    padding: 13px;

    background-color: $color-background-input;
    border: 3px solid $color-background-input;
    border-radius: $input-border-radius;
    color: $color-background-input-text;
    font-weight: $font-weight-600;
    font-family: $font-family;

    &:focus {
      outline: none;
      border: 3px solid $color-background-input-focus;
    }
  }
</style>