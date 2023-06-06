<script lang="ts">
  export let targetImage: string;
  export let text: string;

  let showPopover = false;
</script>

<div class="relative">
  <img class="w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300" src={targetImage} alt="icon" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false} />
  {#if showPopover}
    <!-- This is the popover allow the user to see the name of the skill -->
    <div class="absolute bg-gray-800 text-white p-2 rounded-lg shadow-lg top-[-45px] left-[50%] transform translate-x-[-50%]">
      <div class="absolute w-3 h-3 bg-gray-800 transform rotate-45 -translate-y-[20px] -bottom-6 left-[50%] translate-x-[-50%]"></div>
      <p>{text}</p>
    </div>
  {/if}
</div>
