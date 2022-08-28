<script lang="ts">
  export let value: string | null = null;
  export let type: "text" | "number" | "email" | "tel" | "url" | "password" = "tewt";
  export let placeholder: string | null = null;
</script>

<input type={type} placeholder={placeholder} value={value ?? ""}>

<style lang="scss">
  input {
    padding: 13px;
    width: 20%;

    background-color: #1E2A42;
    border: 3px solid #1E2A42;
    border-radius: 13px;
    color: #A9A9A9;
    font-weight: 600;
    font-family: 'Inter';

    &:focus {
      outline: none;
      border: 3px solid #37435E;
    }

    @media (max-width: 768px) {
      width: 50%;
    }

    @media (max-width: 820px) {
      width: 40%;
    }
  }
</style>