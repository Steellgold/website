<script lang="ts">
  export let link: string | null = "";
  export let size: "large" | "default" = "default";

  export let iconType: "fontawesome" | "custom" | null = null;
  export let iconSize: "sm" | "md" | "lg" | "default" = "default"; 
  export let icon: string | null = null;

  export let disabled: boolean = false;
</script>

<a href={disabled == true ? "#" : link} class={size} class:disabled={disabled}>
  {#if icon}
    <span class="icon {iconSize}">
      {#if iconType === "fontawesome"}
        <i class={icon} />
      {:else}
        <img src="/icons/{icon}" alt="icon" />
      {/if}
    </span>
  {/if}
  <slot />
</a>

<style lang="scss">
  @import "../../../../lib/scss/colors.scss";
  @import "../../../../lib/scss/variables.scss";


  a {
    padding: 10px;
    background-color: #134074;
    border-radius: 7px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in-out;

    display: flex;
    align-items: center;
    gap: 10px;

    span.icon {
      &.sm {
        font-size: 12px;
      }

      &.md {
        font-size: 16px;
      }

      &.lg {
        font-size: 20px;
      }
    }

    &:hover {
      background-color: $button-hover;
    }

    &.disabled {
      background-color: $button-disabled;
      cursor: not-allowed;
    }
  }
</style>
