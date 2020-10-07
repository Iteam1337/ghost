<script>
  export let spacing = true
  export let bold = false
</script>

<p
  class="{bold ? 'font-bold' : 'font-light'} text-sm tracking-wide {spacing && 'mb-2'}">
  <slot />
</p>
