<script lang="ts">
  export let type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p";
  export let color: "white" | "primary" | "secondary" | "tertiary" | "default" = "default";
  export let align: "left" | "center" | "right" | "default" = "default";
  export let italic: boolean = false;
  export let textTransform: "none" | "capitalize" | "uppercase" | "lowercase" = "none";
  
  let classes = "";
  
  $: classes = `text-${type} text-color-${color} text-align-${align} ${italic ? "text-italic" : ""} text-transform-${textTransform}`;
</script>

<p class={classes}><slot /></p>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .text-p {
    font-size: 16px;
    font-weight: 400;
  }

  .text-h1 {
    font-size: 32px;
    font-weight: 700;
  }

  .text-h2 {
    font-size: 24px;
    font-weight: 700;
  }

  .text-h3 {
    font-size: 18px;
    font-weight: 700;
  }

  .text-h4 {
    font-size: 16px;
    font-weight: 700;
  }

  .text-h5 {
    font-size: 13px;
    font-weight: 700;
  }

  .text-h6 {
    font-size: 10px;
    font-weight: 700;
  }

  .text-color-white {
    color: $white;
  }

  .text-color-primary {
    color: $primary;
  }

  .text-color-secondary {
    color: $secondary;
  }

  .text-color-tertiary {
    color: $tertiary;
  }

  .text-italic {
    font-style: italic;
  }

  .text-align-left {
    text-align: left;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-right {
    text-align: right;
  }

  .text-transform-capitalize {
    text-transform: capitalize;
  }

  .text-transform-uppercase {
    text-transform: uppercase;
  }

  .text-transform-lowercase {
    text-transform: lowercase;
  }
</style>