<script lang="ts">
  export let link: string = "";
  export let icon: string | null = null;
  export let color: string = "white";
</script>

<a href="{link}">
  {#if icon}
    <img src="/icons/{icon}" alt="Icon">
  {/if}
  <slot></slot>
</a>

<style lang="scss">
  @import "../../../scss/variables.scss";

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-size: 16px;
    padding: 14px 25px;
    opacity: 0.9;
    border-radius: 15px;
    transition: background 0.3s;

    background-color: $color-white;
    color: $color-background;

    img {
      height: 20px;
    }
  }

  a:hover:not(.active) {
      background-color: $color-gray-100;
  }
</style>