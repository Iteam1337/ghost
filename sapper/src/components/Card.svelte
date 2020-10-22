<script>
  export let symbol, title, text

  import Typography from '../components/typography/'
</script>

<div class="bg-grey-medium rounded-lg" style="max-width: 225px;">
  <div class="flex justify-center pb-4 pt-6 h-24">
    <svelte:component this={symbol} />
  </div>

  <Typography.H4>{title}</Typography.H4>
  <p class="pb-4 px-2 md:px-4 text-sm font-light tracking-wider align-top">
    {text}
  </p>
</div>
