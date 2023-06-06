<script lang="ts">
  export let targetImage: string;
  export let text: string;

  let showPopover = false;
</script>

<div class="relative">
  <img id="targetImage" class="w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300" src={targetImage} alt="icon" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false} />
  {#if showPopover}
    <!-- This is the popover allow the user to see the name of the skill -->
    <div class="popover absolute bg-gray-800 text-white p-2 rounded-lg shadow-lg top-[-40px]">
      <p>{text}</p>
    </div>
  {/if}
</div>
