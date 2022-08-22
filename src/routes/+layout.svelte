<script>
  import Navbar from "$lib/components/layouts/Navbar.svelte"; 
</script>

<Navbar/>

<slot/>

<style lang="scss">
  @import "../lib/scss/variables.scss";

  footer {
    padding: 50px;

    text-align: center;
    color: $color-white;
    
    a {
      text-decoration: none;
      color: $color-gray-200;
    }
  }
</style>

<footer>
  <p>Made with ❤️ by <a href="https://github.com/Steellgold">Gaëtan H</a></p>
  <p>Contributors: <a href="https://github.com/Bluzzi">Bluzzi</a></p>
</footer>