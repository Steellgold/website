<script lang="ts">
import Input from "$lib/components/elements/form/Input.svelte";
import Option from "$lib/components/elements/form/Option.svelte";

  interface Article {
    title: string;
    smallDescription: string;
    primaryTech: string;
    bannerUrl: string;
    content: string;
  }

  let article: Article = {
    title: "",
    smallDescription: "",
    primaryTech: "",
    bannerUrl: "",
    content: ""
  };

  function onClick() {
    const request = fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title: article.title,
        smallDescription: article.smallDescription,
        primaryTech: article.primaryTech,
        bannerUrl: article.bannerUrl,
        content: article.content
      })
    });
  }
</script>

<div class="form">
  <form accept="javascript:void(0)">
    <Input type="text" placeholder="Titre de l'article" bind={article.title} />
    <Input type="text" placeholder="Sous-titre" bind={article.smallDescription}/>
    <Option options={
      [
        {
          value: "none",
          label: "Aucune technologie",
        },
        {
          value: "css",
          label: "CSS"
        },
        {
          value: "discord",
          label: "Discord"
        },
        {
          value: "discordjs",
          label: "DiscordJS"
        },
        {
          value: "figma",
          label: "Figma"
        },
        {
          value: "firebase",
          label: "Firebase"
        },
        {
          value: "html",
          label: "HTML"
        },
        {
          value: "java",
          label: "Java"
        },
        {
          value: "javascript",
          label: "JavaScript"
        },
        {
          value: "maven",
          label: "Maven"
        },
        {
          value: "nodejs",
          label: "NodeJS"
        },
        {
          value: "php",
          label: "PHP"
        },
        {
          value: "pmmp",
          label: "PocketMine-MP"
        },
        {
          value: "sass",
          label: "SCSS"
        },
        {
          value: "spigot",
          label: "Spigot"
        },
        {
          value: "svelte",
          label: "Svelte"
        },
        {
          value: "symfony",
          label: "Symfony"
        },
        {
          value: "typescript",
          label: "TypeScript"
        }
      ]
    } />

    <!-- <label for="subtitle">Sous-titre de l'article</label> -->
    <!-- <input id="subtitle" type="text" bind:value={article.smallDescription}> -->

    <!-- <label for="content">Contenu de l'article</label> -->
    <!-- <textarea id="content" bind:value={article.content}></textarea> -->
<!-- 
    <label for="primaryTech">Technologie principale</label>
    <select id="primaryTech" bind:value={article.primaryTech}>
      <option selected disabled hidden value="">Aucune</option>
      <option value="php">PHP</option>
      <option value="javascript">Javascript</option>
      <option value="typescript">Typescript</option>
      <option value="svelte">Svelte</option>
    </select> -->

    <!-- <label for="bannerUrl">Url de la bannière</label>
    <input id="bannerUrl" type="text" bind:value={article.bannerUrl}>

    <button type="button" on:click={onClick}>Envoyer</button> -->
  </form>

  <p>{JSON.stringify(article, 0, 2)}</p>
  <img src="{article.bannerUrl}" alt="azaz">
</div>

<style lang="scss">
</style>