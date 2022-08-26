<script lang="ts">

</script>

<div class="article">
  <img class="banner" src="https://media.discordapp.net/attachments/951208784200630392/1012395263828181062/Rectangle_123_1.png" alt="">

  <div class="content">
    <h3>cc</h3>
  </div>
</div>

<style lang="scss">
  @import "../../../lib/scss/variables.scss";
  
  img.banner {
    height: 50%;
    border-radius: 0px 0px 40px 40px;

    @media (max-width: 768px) {
      width: 90%;
      border-radius: 0px 0px 20px 20px;
    }
  }

  .article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      color: $color-gray;
      width: 50%;
      padding: 5px;
      margin: auto;
    }

    img.article-img {
      margin: auto;
      padding: 15px;
      display: block;
    }

    h1, h2, h3, h4, h5, h6 {
      color: #fff;
      padding: 10px;
      margin: auto;
      text-align: center;
      text-transform: uppercase;
    }

    a {
      color: #fff;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      margin: auto;
      text-align: center;
    }

    @media (max-width: 768px) {
      p {
        width: 90%;
      }
    }
  }
</style>