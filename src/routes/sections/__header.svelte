<script lang="ts">
  import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandYoutube,
    IconMinusVertical
  } from "$lib/components/icons";
  import {
    Netflix,
    Twitch,
    PrimeVideo,
    YouTube,
    Figma,
    StackOverflow,
    VisualStudioCode,
    GitHub,
    Coinbase,
    Twitter,
    Instagram,
    DisneyPlus,
    CanalPlus
  } from "$lib/components/renders/activity/list";
  import { Spotify } from "$lib/components/renders/spotify";

  let isHover: boolean = false;

  function image(element: MouseEvent, hover: boolean) {
    const img = element.target as HTMLImageElement
    img.setAttribute("src", hover ? "/images/me.jpeg" : "/images/profile_noisette.jpeg")
    isHover = hover;    
  }
</script>

<section>
  <img src="/images/banner_kitty.jpeg" alt="Kitty's Banner" class="h-[405px] w-full object-cover block object-center" />

  <div class="shrink-0 flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
    <img
      alt="profile"
      class="-mt-16 h-32 w-32 rounded-lg border-white transform transition-all hover:scale-110 hover:rotate-12"
      src="/images/profile_noisette.jpeg"
      class:border-black={isHover}
      on:mouseenter={(e) => image(e, true)}
      on:mouseleave={(e) => image(e, false)}
    />

    <div class="flex flex-col justify-center ml-auto sm:bg-[#161616] sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <div class="flex gap-2">
          <a href="https://github.com/Steellgold" class="block hover:text-white transition-all hover:-rotate-12"><IconBrandGithub /></a>
          <a href="https://linkedin.com/in/gaetanhus" class="block hover:text-blue-600 transition-all hover:rotate-12"><IconBrandLinkedin /></a>
          <span class="hidden sm:block"><IconMinusVertical /></span>
        </div>
        <div class="flex gap-2">
          <a href="https://discord.com/users/504392983244832780" class="block hover:text-gray-600 transition-all hover:-rotate-12"><IconBrandDiscord /></a>
          <a href="https://instagram.com/steellgold" class="block hover:text-pink-600 transition-all hover:rotate-12"><IconBrandInstagram /></a>
          <a href="https://twitter.com/Steellgold" class="block hover:text-blue-600 transition-all hover:-rotate-12"><IconBrandTwitter /></a>
          <a href="https://youtube.com/c/Steellgold" class="block hover:text-red-600 transition-all hover:rotate-12"><IconBrandYoutube /></a>
        </div>
      </ul>
    </div>
  </div>

  <div id="about" class="pt-9 text-white flex flex-col justify-center mx-auto w-5/6 lg:w-2/4">
    <p class="text-1xl pt-1 text-left">Salut, moi c'est</p>
    <h1 class="text-5xl font-bold text-left">Gaëtan</h1>
    <p class="text-1xl pt-1 text-left">Je suis développeur back-end sur TypeScript, ainsi que sur PHP.</p>
  </div>
  
  <Spotify />
  <Netflix />
  <PrimeVideo />
  <Twitch />
  <YouTube />
  <Figma />
  <VisualStudioCode />
  <StackOverflow />
  <GitHub />
  <Coinbase />
  <Twitter />
  <Instagram />
  <DisneyPlus />
  <CanalPlus />
</section>