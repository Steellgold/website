<script lang="ts">
  import type { LayoutData } from './$types';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import Navigation from "./sections/Navigation.svelte";
  import Footer from "./sections/Footer.svelte";
  import "../app.css";

  export let data: LayoutData;

  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<Navigation />

<slot />

<Footer />
