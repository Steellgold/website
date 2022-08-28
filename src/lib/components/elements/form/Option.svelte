<script lang="ts">
  export let options: {
    value: string | number | boolean;
    label: string;
  }[];

  let i = 0;
</script>

<select>
  {#each options as option}
    {#if i == 0}
      <option value={option.value} selected hidden>{option.label}</option>
    {:else}
      <option value={option.value}>{option.label}</option>
    {/if}
    {i++}
  {/each}
</select>

<style lang="scss">
  select {
    padding: 13px;
    width: 20%;
    background-color: #1E2A42;
    border: 3px solid #1E2A42;
    border-radius: 13px;
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