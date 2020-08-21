<script>
  export let to
</script>

<p class="font-medium text-sm text-cornflower">
  <a href={to}>
    <slot />
    &rightarrow;
  </a>
</p>
