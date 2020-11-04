<script>
  let background = 'bg-blue-cornflower'
  let textColor = 'text-white'
  export let width = ''
</script>

<button
  class={`${background} ${textColor} ${width} px-12 py-3 rounded-full tracking-wide`}>
  <slot />
</button>
