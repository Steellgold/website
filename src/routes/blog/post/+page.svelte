<script lang="ts">
  import { FileDrop } from "$lib/components/elements/form/file-drop";
  import { Select } from "$lib/components/elements/form/select";
  import Input from "$lib/components/elements/form/Input.svelte";
  import TextArea from "$lib/components/elements/form/TextArea.svelte";

  let title: string;
  let subtitle: string;
  let content: string;
  let tech: string;

  function submit() {
    const request = fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        smallDescription: subtitle,
        primaryTech: tech,
        bannerUrl: "https://images-ext-2.discordapp.net/external/8wJ_e55ylxIJFQoXjUiDzAWtatuW6Sy9e0COOR7nsNg/https/www.media.pokekalos.fr/img/jeux/vignettes/pokekalos.jpg",
        content: content
      })
    });
  }
</script>

<div class="page">
  <h1>Création d'un nouvel article</h1>

  <div class="row">
    <div class="col1">
      <Input type="text" placeholder="Title" bind:value={title} />
      <Input type="text" placeholder="Sous-titre" bind:value={subtitle} />
      <Select options={
        [
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
      } bind:value={tech} />
      <Input type="text" placeholder="Auteur" defaultText="Steellgold" disabled={true} />
    </div>

    <div class="col2">
      <FileDrop />
    </div>
  </div>

  <p>{tech}</p>

  <div class="row">
    <div class="col1">
      <TextArea bind:value={content} />
    </div>

    <div class="col2">
      <FileDrop isMultiple={true} label="Additional files" />
    </div>
  </div>

  <div class="center">
    <input type="submit" value="Créer l'article" on:click={submit} />
  </div>
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";

  .page {
    padding: 10px;

    h1 {
      padding: 10px;
      text-align: center;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;

      .col1 {
        display: flex;
        flex-direction: column;
        gap: 10px;  
      }

      .col2 {
        
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      input {
        font-family: $font-family;
        font-weight: $font-weight-400;

        padding: 15px;
        background-color: #283651;
        border: 0;
        color: #fff;

        &:focus {
          outline: none;
          color: #fff;
        }

        &:disabled {
          background-color: #374154;
        }

        &::placeholder {
          color: #FFFFFF;
        }
      }
    }
  }
</style>