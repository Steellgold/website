<script lang="ts">
  import { MetaTags } from "$lib/components/meta";
  import Header from "./sections/__header.svelte";
  import Projects from "./sections/__projects.svelte";
</script>

<svelte:head>
  <title>Gaëtan | Développeur back-end</title>
  <MetaTags />
</svelte:head>

<Header />

<Projects />