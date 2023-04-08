<script lang="ts">
  import { MetaTags } from "$lib/components/meta";
  import Navigation from "./sections/Navigation.svelte";
  import Footer from "./sections/Footer.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>Gaëtan | Développeur back-end</title>
  <MetaTags />
</svelte:head>

<Navigation />

<slot />

<Footer />