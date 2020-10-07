<script>
  import IntersectionObserver from '../IntersectionObserver.svelte'
  export let threshold = 0
</script>

<IntersectionObserver let:intersecting once {threshold}>
  <div
    class={`transition transition-all duration-500 ${intersecting ? 'opacity-100' : 'opacity-0'}`}>
    <slot />
  </div>
</IntersectionObserver>
