<script lang="ts">
  import Articles from "$lib/sections/Articles.svelte";
  import Header from "$lib/sections/Header.svelte";
  import Projects from "$lib/sections/Projects.svelte";

  let metas = {
    title: "Gaëtan | Développeur back-end",
    siteName: "Portfolio de Gaëtan",
    description: "Développeur back-end depuis 2019, spécialisé sur TypeScript et PHP !",
    url: "https://steellgold.fr",
    color: "#15803D"
  };
</script>

<svelte:head>
  <title>{metas.title}</title>
  <meta name="description" content={metas.description} />
  <meta name="og:title" content={metas.title} />
  <meta name="og:site_name" content={metas.siteName} />
  <meta name="og:description" content={metas.description} />
  <meta name="og:url" content={metas.url} />
  <meta name="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Steellgold" />
  <meta name="twitter:creator" content="@Steellgold" />
  <meta name="twitter:title" content={metas.title} />
  <meta name="twitter:description" content={metas.description} />
  <meta name="theme-color" content={metas.color} />
</svelte:head>

<Header />

<Projects />

<Articles />