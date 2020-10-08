<script>
  let active = false

  const handleHover = (e) => {
    e.preventDefault()
    active = !active
  }
</script>

<div
  on:touchstart={() => (active = true)}
  on:touchend={() => (active = false)}
  on:mouseenter={handleHover}
  on:mouseleave={handleHover}
  class="inline-block transform transition duration-150 ease-in {active ? 'shadow-hover' : 'shadow-featured'}">
  <slot />
</div>
