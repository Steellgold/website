<script lang="ts">
  export let placeholder: string;
  export let type: "text" | "email" | "password" | "number" = "text";
  export let value: string | null = null;
  export let disabled: boolean = false;
</script>

<input type={type} placeholder={placeholder} value="{value}" disabled={disabled}>

<style lang="scss">
  @import "../../../../lib/scss/variables.scss";

  input {
    font-family: $font-family;
    font-weight: $font-weight-400;

    padding: 15px;
    background-color: #283651;
    border: 0;
    color: #fff;

    &:focus {
      outline: none;
      color: #fff;
    }

    &:disabled {
      background-color: #374154;
    }

    &::placeholder {
      color: #FFFFFF;
    }
  }
</style>