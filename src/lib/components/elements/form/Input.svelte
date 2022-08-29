<script lang="ts">
  export let placeholder: string;
  export let type: "text" | "email" | "password" | "number" = "text";

</script>

<input type={type} placeholder={placeholder}>

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

    &::placeholder {
      color: #FFFFFF;
    }
  }
</style>