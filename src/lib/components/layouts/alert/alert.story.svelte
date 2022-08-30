<script lang="ts">
  import Alert from "./alert.svelte";

  export let Hst: any;
</script>

<Hst.Story title="Alert">
  <Alert type="error" message="cc" />
</Hst.Story>