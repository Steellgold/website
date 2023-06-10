<script lang="ts">
  export let targetImage: string;
  export let text: string;
  export let link: string | null = null;
  export let isFirst: boolean = false;
  
  let showPopover = false;
</script>

<div class="relative">
  {#if link}
    <a href="{link}" target="_blank">
      <img class="w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300" src={targetImage} alt="icon" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false} />
    </a>
  {:else}
    <img class="w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300" src={targetImage} alt="icon" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false} />
  {/if}

  {#if showPopover && isFirst}
    <div class="absolute bg-gray-800 text-white p-2 rounded-lg shadow-lg top-[-45px] left-[90%] transform translate-x-[-50%]">
      <div class="absolute w-3 h-3 bg-gray-800 transform rotate-45 -translate-y-[20px] -bottom-6 left-[34%] translate-x-[-50%]"></div>
      {text}
    </div>
  {:else if showPopover}
    <div class="absolute bg-gray-800 text-white p-2 rounded-lg shadow-lg top-[-45px] left-[50%] transform translate-x-[-50%]">
      <div class="absolute w-3 h-3 bg-gray-800 transform rotate-45 -translate-y-[20px] -bottom-6 left-[50%] translate-x-[-50%]"></div>
      {text}
    </div>
  {/if}
</div>
