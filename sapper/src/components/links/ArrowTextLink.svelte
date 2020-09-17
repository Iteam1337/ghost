<script>
  export let to
  export let linkColor = ''
</script>

<p class={`font-medium text-sm ${linkColor ? linkColor : 'text-cornflower'}`}>
  <a href={to}>
    <slot />
    &rightarrow;
  </a>
</p>
