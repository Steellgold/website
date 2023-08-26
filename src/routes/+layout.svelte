<script lang="ts">
  import Navigation from "./sections/__navigation.svelte";
  import Footer from "./sections/__footer.svelte";
  import { Toaster, toast } from "svelte-sonner"
  import "../app.css";
</script>

<Toaster />

<Navigation />

<slot />

<Footer />