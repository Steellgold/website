<script>
  import "../app.css";
  
  import Navigation from "./sections/Navigation.svelte";
  import Footer from "./sections/Footer.svelte";
</script>

<Navigation />

<slot />

<Footer />