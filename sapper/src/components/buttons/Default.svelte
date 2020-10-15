<script>
  let background = 'bg-blue-cornflower'
  let textColor = 'text-white'
</script>

<button
  class={`${background} ${textColor} px-16 py-4 rounded-full tracking-wide`}>
  <slot />
</button>
