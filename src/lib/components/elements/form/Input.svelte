<script lang="ts">
  export let placeholder: string;
  export let type: "text" | "email" | "password" | "number" = "text";

</script>

<input type={type} placeholder={placeholder}>

<style lang="scss">
  @import "../../../../lib/scss/variables.scss";

  input {
    padding: 15px;
    background-color: #283651;
    border: 0;
    border-radius: 5px;

    &:focus {
      outline: none;
      color: #fff;
    }

    &::placeholder {
      color: #FFFFFF;
    }
  }
</style>