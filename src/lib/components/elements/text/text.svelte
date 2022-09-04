<script lang="ts">
  export let type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p";
  export let size: "default" | "1xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" = "default";
  export let color: "white" | "primary" | "secondary" | "tertiary" | "default" = "default";
  export let align: "left" | "center" | "right" | "default" = "default";
  export let italic: boolean = false;
  export let textTransform: "none" | "capitalize" | "uppercase" | "lowercase" = "none";
  export let weight: "normal" | "bold" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = "normal";
  export let width: "default" | "auto" | 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 = "default";
  
  let classes = "";
  
  $: classes = `text-size-${size} text-${type} text-color-${color} text-align-${align} ${italic ? "text-italic" : ""} text-transform-${textTransform} text-weight-${weight} text-width-${width}`;
</script>

<svelte:element this={type}>
  <p class={classes}><slot /></p>
</svelte:element>

<style lang="scss">
  @import "../../../scss/colors.scss";
  @import "../../../scss/variables.scss";

  .text-size-1xl {
    font-size: 1.5rem;
  }

  .text-size-2xl {
    font-size: 2.5rem;
  }

  .text-size-3xl {
    font-size: 3.5rem;
  }

  .text-size-4xl {
    font-size: 4.5rem;
  }

  .text-size-5xl {
    font-size: 5.5rem;
  }

  .text-size-6xl {
    font-size: 6.5rem;
  }

  .text-size-7xl {
    font-size: 7.5rem;
  }

  .text-size-8xl {
    font-size: 8.5rem;
  }

  .text-size-9xl {
    font-size: 9.5rem;
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

  .text-transform-none {
    text-transform: none;
  }

  .text-weight-bold {
    font-weight: bold;
  }

  .text-weight-normal {
    font-weight: normal;
  }

  .text-weight-100 {
    font-weight: 100;
  }

  .text-weight-200 {
    font-weight: 200;
  }

  .text-weight-300 {
    font-weight: 300;
  }

  .text-weight-400 {
    font-weight: 400;
  }

  .text-weight-500 {
    font-weight: 500;
  }

  .text-weight-600 {
    font-weight: 600;
  }

  .text-weight-700 {
    font-weight: 700;
  }

  .text-weight-800 {
    font-weight: 800;
  }

  .text-weight-900 {
    font-weight: 900;
  }

  .text-width-100 {
    width: 100%;
  }

  .text-width-90 {
    width: 90%;
  }

  .text-width-80 {
    width: 80%;
  }

  .text-width-70 {
    width: 70%;
  }

  .text-width-60 {
    width: 60%;
  }

  .text-width-50 {
    width: 50%;
  }

  .text-width-40 {
    width: 40%;
  }

  .text-width-30 {
    width: 30%;
  }

  .text-width-20 {
    width: 20%;
  }

  .text-width-10 {
    width: 10%;
  }

  .text-width-auto {
    width: auto;
  }
</style>