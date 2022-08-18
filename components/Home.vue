<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="text-white text-8xl font-black">Salut <span class="wave">👋🏻</span></h1>
      <p class="text-gray-300 font-normal text-2xl">azaz</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>
  span.wave {
      animation-name: wave-animation;
      animation-duration: 2.5s;
      animation-iteration-count: infinite;
      transform-origin: 70% 70%;
      display: inline-block;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
  }
</style>