<script lang="ts">
  export let link: string | null = "";
  export let icon: string | null = null;
  export let small: boolean;
</script>

<a href="{link}" target="_blank" class="{small ? 'small' : ''}">
  {#if icon}
    <img src="/icons/{icon}" alt="Icon">
    <span>|</span>
  {/if}
  <slot></slot>
</a>

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

  a.small {
    width: 60%;
    margin: auto;
  }

  a:hover:not(.active) {
      background-color: $color-gray-100;
  }
</style>