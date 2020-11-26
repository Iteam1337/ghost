<script>
  export let item
  export let segment = ''

  export let ariaBorderColor = 'white'

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<style>
  [aria-current] {
    border-color: var(--color);
  }
</style>

<a
  class="flex font-medium text-2xl border-b-2 md:text-base border-transparent md:py-1 md:my-9 md:ml-6 justify-self-start"
  style="--color: {ariaBorderColor};"
  aria-current={segment === item.to ? 'page' : undefined}
  href={item.to}
  on:click={() => {
    dispatch('menuSelection', {})
  }}>
  {item.text}
</a>
