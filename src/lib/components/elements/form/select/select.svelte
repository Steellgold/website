<script lang="ts">
  export let options: {
    value: string | number | boolean;
    label: string;
  }[];

  export let value = '';

  function changeValue(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<select on:change={changeValue}>
  <option disabled hidden selected>Select a option</option>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<style lang="scss">
  @import "../../../../scss/variables.scss";

  select {
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