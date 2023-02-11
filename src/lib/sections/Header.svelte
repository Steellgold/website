<script lang="ts">
  import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "$lib/components/icons";
</script>

<section>
  <img src="/images/banner_kitty.jpeg" alt="Kitty's Banner" class="h-96 w-full object-cover block object-center transition-all" />

  <div class="shrink-0 flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
    <img alt="profile" class="-mt-16 h-32 w-32 rounded-full border-white" src="/images/profile_noisette.jpeg" />

    <div class="flex flex-col justify-center ml-auto sm:bg-[#161616] sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="https://github.com/Steellgold" class="block hover:text-white transition-all"><IconBrandGithub /></a>
        <a href="https://discord.com/users/504392983244832780" class="block hover:text-gray-600 transition-all"><IconBrandDiscord /></a>
        <a href="https://youtube.com/c/Steellgold" class="block hover:text-red-600 transition-all"><IconBrandYoutube /></a>
        <a href="https://instagram.com/steellgold" class="block hover:text-pink-600 transition-all"><IconBrandInstagram /></a>
        <a href="https://twitter.com/Steellgold" class="block hover:text-blue-600 transition-all"><IconBrandTwitter /></a>
        <a href="https://linkedin.com/in/gaetanhus" class="block hover:text-blue-600 transition-all"><IconBrandLinkedin /></a>
      </ul>
    </div>
  </div>

  <div id="about" class="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <p class="text-1xl pt-1 text-left">Moi c'est</p>
    <h1 class="text-5xl font-bold text-left">Gaëtan</h1>
    <p class="text-1xl pt-1 text-left">J'ai 18 ans et je suis développeur <span class="line-through opacity-50">spécialisé dans le</span> back-end. Mon langage de prédilection est le PHP, mais je suis également à l'aise avec le Typescript</p>
  </div>
</section>