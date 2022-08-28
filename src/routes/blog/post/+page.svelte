<script lang="ts">
import Input from "$lib/components/elements/form/Input.svelte";
import Option from "$lib/components/elements/form/Option.svelte";
import TextArea from "$lib/components/elements/form/TextArea.svelte";

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
  <h1>PUBLIER UN NOUVEL ARTICLE</h1>

  <div class="form">
    <div class="infos">
      <Input placeholder="Titre" />
      <Input placeholder="Sous-titre" />
    </div>

    <div class="technology">
      <Option options={
        [
          {
            value: "",
            label: "Sélectionnez une technologie"
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
      <Input placeholder="Auteur" />
    </div>

    <div class="content">
      <TextArea placeholder="Contenu de l'article" />
    </div>
  </div>
</div>

<style lang="scss">
  h1 {
    padding: 10px;
    text-align: center;
  }


  .form {
    padding: 8px;

    .infos {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
    }

    .technology {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 10px;
      gap: 20px;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 10px;
      gap: 20px;
    }
  }

</style>