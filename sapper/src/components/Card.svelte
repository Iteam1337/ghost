<script>
  export let symbol, title, text
</script>

<div class="bg-grey-dark flex-1 rounded-lg lg:px-5 flex-col w-full md:w-80">
  <div class="flex justify-center py-8 h-32">
    <svelte:component this={symbol} />
  </div>

  <h3 class="text-xl font-medium tracking-wide align-top">{title}</h3>
  <p class="py-5 px-8 md:px-4 text-base font-light tracking-wider align-top">
    {text}
  </p>
</div>
