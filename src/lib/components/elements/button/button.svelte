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
    display: flex;
    align-items: center;


    }


  }
</style>
