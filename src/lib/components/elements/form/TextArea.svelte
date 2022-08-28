<script lang="ts">
  export let placeholder: string;
</script>

<textarea placeholder={placeholder}></textarea>

<style lang="scss">
  textarea {
    padding: 13px;
    width: 50%;
    max-width: 50%;
    background-color: #1E2A42;
    border: 3px solid #1E2A42;
    border-radius: 5px;
    color: #A9A9A9;
    font-weight: 600;

    &:focus {
      outline: none;
      border: 3px solid #37435E;
    }
    
    &::placeholder {
      text-transform: uppercase;
    }
    
    @media (max-width: 768px) {
      width: 50%;
    }
    
    @media (max-width: 820px) {
      width: 40%;
    }
  }
</style>