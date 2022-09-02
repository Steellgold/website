<footer>
  <p>Made with ❤️ by <a href="https://github.com/Steellgold">Gaëtan H</a></p>
  <p>Project is open-source on <a href="https://github.com/Steellgold/Portfolio">Github</a></p>
</footer>

<style lang="scss">
  @import "../../../scss/colors.scss";

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 25px;
    background-color: $primary;

    p {
      text-align: center;
    }

    a {
      color: $white;

      &:hover {
        color: $white-100;
      }
    }
  }
</style>