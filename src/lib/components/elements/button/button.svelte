<script lang="ts">
  export let link: string | null = "";
  export let size: "large" | "default" = "default";

  export let iconSize: "sm" | "md" | "lg" | "default" = "default"; 
  export let icon: string | null = null;

  export let disabled: boolean = false;
</script>

<a href={disabled == true ? "#" : link} class={size} class:disabled={disabled}>
  {#if icon}
    <span class="icon {iconSize}">
      <i class={icon} />
    </span>
  {/if}
  <slot />
</a>

<style lang="scss">
  @import "../../../../lib/scss/colors.scss";
  @import "../../../../lib/scss/variables.scss";

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

    background-color: $white;
    color: #000;
  }

  a.small {
    width: 60%;
    margin: auto;
  }

  a:hover:not(.active) {
      background-color: #d4d4d4;
  }
</style>
