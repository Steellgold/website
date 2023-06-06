<script lang="ts">
  export let targetImage: string;
  export let text: string;

  let showPopover = false;
</script>

<div class="relative">
  <img id="targetImage" class="w-8 h-8 border-2 rounded-full border-gray-800" src={targetImage} alt="icon" on:mouseenter={() => showPopover = true} on:mouseleave={() => showPopover = false} />
  {#if showPopover}
  <!-- in top of the image -->
    <div class="popover absolute bg-gray-800 text-white p-2 rounded-lg shadow-lg top-[-35px]">
      <p>{text}</p>
    </div>
  {/if}
</div>
