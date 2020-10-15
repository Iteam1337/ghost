<script>
  let background = 'bg-blue-cornflower'
  let textColor = 'text-white'
</script>

<button
  class={`${background} ${textColor} px-12 py-3 rounded-full tracking-wide`}>
  <slot />
</button>
