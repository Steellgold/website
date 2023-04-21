<script>
  import "../app.css";
  
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import Navigation from "./sections/Navigation.svelte";
  import Footer from "./sections/Footer.svelte";

  inject({ mode: dev ? 'development' : 'production' });
</script>

<Navigation />

<slot />

<Footer />
