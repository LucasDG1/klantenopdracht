<script lang="ts">
  export let includeSnap = true;
</script>

{#if includeSnap}
<div class="md:snap-y md:snap-mandatory md:overflow-scroll w-screen h-screen">
  <slot />
</div>
{:else}
 <slot />
{/if} 