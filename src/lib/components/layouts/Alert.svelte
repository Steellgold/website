<script lang="ts">
  export let type: "error" | "success" | "warning" | "info" = "info";
  export let message: string;
</script>

<div class="alert {type}">
  <!-- TODO: close -->
  {message}
</div>

<style lang="scss">
  .alert {
    padding: 20px;
    color: white;
    margin-bottom: 15px;
  }

  .error {
    background-color: #f44336;
  }

  .success {
    background-color: #4CAF50;
  }

  .warning {
    background-color: #ff9800;
  }

  .info {
    background-color: #51a8b3;
  }

  .closebtn:hover {
    color: black;
  }
</style>