<script lang="ts">
  import Article from "$lib/components/layouts/Article.svelte";
</script>

<div class="articles">
  <Article title="Test" small_description="blablablabla" published_date="21/01/1939" primaryTechIcon="sass" />
  <Article title="CRÉATION D’UN PLUGIN POCKETMINE-MP" small_description="Voyons ensemble comment faire la base de [...]" published_date="23/08/2022" primaryTechIcon="php" />
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