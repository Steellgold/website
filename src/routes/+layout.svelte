<script lang="ts">
  import Navigation from "./sections/__navigation.svelte";
  import Footer from "./sections/__footer.svelte";
  import "../app.css";
</script>

<Navigation />

<slot />

<Footer />
