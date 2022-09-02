<script lang="ts">
  export let value = '';

  export let placeholder: string | null = null;
  export let type: "text" | "email" | "password" | "number" = "text";
  export let defaultText: string | null = null;
  export let disabled: boolean = false;

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<input type={type} placeholder={placeholder} value={defaultText} disabled={disabled} on:change={changeValue} />

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