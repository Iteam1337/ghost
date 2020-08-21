<script>
  export let to
</script>

<p class="font-medium text-sm" style="color: var(--cornflower);">
  <a href={to}>
    <slot />
    &rightarrow;
  </a>
</p>
