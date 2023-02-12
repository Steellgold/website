<script lang="ts">
  import { MetaTags } from "$lib/components/meta";
  import Articles from "./sections/Articles.svelte";
  import Header from "./sections/Header.svelte";
  import Projects from "./sections/Projects.svelte";
</script>

<svelte:head>
  <MetaTags />
</svelte:head>

<Header />

<Projects />

<Articles />