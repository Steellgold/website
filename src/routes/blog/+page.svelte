<script lang="ts">
import Article from "$lib/components/layouts/Article.svelte";

  /** @type {import('./$types').PageServerLoad} */
  export let data: any;
</script>

<div class="articles">
  {#each data.articles as article}
    <Article {...article} />
  {/each}
</div>

<style lang="scss">
  .articles {
    padding: 30px;
    gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>