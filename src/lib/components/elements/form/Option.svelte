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
  @import '../../../scss/variables.scss';

  select {
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