<script lang="ts">
  export let link: string | null = "";
  export let icon: string | null = null;
  // export let icon_colored: string | null = null; [TODO]
</script>

{#if link}
  <a href="{link}" target="_blank">
    {#if icon}
      <img src="/icons/{icon}" alt="Icon">
      <span>|</span>
    {/if}
    <slot></slot>
  </a>
{:else}
  <a>
    {#if icon}
      <img src="/icons/{icon}" alt="Icon">
      <span>|</span>
    {/if}
    <slot></slot>
  </a>
{/if}

<style lang="scss">
  @import "../../../scss/variables.scss";

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-size: 16px;
    padding: 14px 18px;
    opacity: 0.9;
    border-radius: 18px;
    transition: background 0.3s;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(249, 249, 249, 0.25);

    background-color: $color-white;
    color: $color-background;

    span {
      opacity: 20%;
    }

    img {
      height: 20px;
    }
  }

  a:hover:not(.active) {
      background-color: $color-gray-100;
  }
</style>