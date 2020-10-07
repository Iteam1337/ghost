<script>
  export let to
</script>

<p class="font-medium text-sm text-blue-cornflower">
  <a href={to}>
    <slot />
    &rightarrow;
  </a>
</p>
