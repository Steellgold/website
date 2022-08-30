<script lang="ts">
  import Alert from "./alert.svelte";
  export let Hst: any;

  let type: "error" | "success" | "warning" | "info" = "info";
  let message: string = "This is a " + type + " alert";
</script>

<Hst.Story title="Alert">
  <svelte:fragment slot="controls">
    Message: <input type="text" bind:value={message}>
    <br>
    Type: <select bind:value={type}>
      <option value="error">Error</option>
      <option value="success">Success</option>
      <option value="warning">Warning</option>
      <option value="info">Info</option>
    </select>
  </svelte:fragment>

  <Alert type={type} message={message} />
</Hst.Story>