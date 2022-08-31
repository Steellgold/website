<script lang="ts">
  import Alert from "./alert.svelte";
  export let Hst: any;

  let type: "error" | "success" | "warning" | "info" = "info";
  let message: string = "This is a alert";
</script>

<Hst.Story title="Alert">
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={message} title="Message" />
    <Hst.Select bind:value={type} options={[ "error", "success", "warning", "info" ]} title="Type" />
  </svelte:fragment>

  <Alert type={type} message={message} />
</Hst.Story>