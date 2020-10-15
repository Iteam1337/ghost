<script>
  let active = false
  let transparentButton = false

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
  class="inline ease-in {active ? (transparentButton ? 'opacity-75' : 'opacity-95') : 'opacity-100'}">
  <slot />
</div>
