<script lang="ts">
  export let title: string = "Gaëtan | Développeur back-end";
  export let siteName: string = "Portfolio de Gaëtan";
  export let description: string = "Développeur back-end depuis 2018, spécialisé sur TypeScript et PHP !";
  export let url: string = "https://steellgold.fr";
  export let color: string = "#15803D";
  export let image: string | null = null;
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="og:title" content={title} />
<meta name="og:site_name" content={siteName} />
<meta name="og:description" content={description} />
<meta name="og:url" content={url} />
<meta name="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@Steellgold" />
<meta name="twitter:creator" content="@Steellgold" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="theme-color" content={color} />
{#if image !== null}
  <meta name="og:image" content={image} />
  <meta name="twitter:image" content={image} />
{/if}