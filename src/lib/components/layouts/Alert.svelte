<script lang="ts">
  export let type: "error" | "success" | "warning" | "info" = "info";
  export let message: string;
</script>

<div class="alert {type}">
  <span class="closebtn">&times;</span>
  {message}
</div>

<style lang="scss">
  .alert {
    padding: 20px;
    color: white;
    margin-bottom: 15px;
  }

  .error {
    background-color: #f44336; /* Red */
  }

  .success {
    background-color: #4CAF50; /* Green */
  }

  .warning {
    background-color: #ff9800; /* Yellow */
  }

  .info {
    background-color: #51a8b3; /* Blue */
  }

  /* The close button */
  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* When moving the mouse over the close button */
  .closebtn:hover {
    color: black;
  }
</style>