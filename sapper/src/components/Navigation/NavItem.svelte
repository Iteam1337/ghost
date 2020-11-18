<script>
  export let item
  export let segment = ''

  export let ariaBorderColor = 'white'

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<style>
  [aria-current] {
    padding-bottom: 0.3rem;
    border-bottom: 2px solid var(--color);
  }
</style>

<li
  class="px-2 py-4 font-medium text-2xl md:text-base block float-left pl-6 sm:block">
  <a
    style="--color: {ariaBorderColor};"
    aria-current={segment === item.to ? 'page' : undefined}
    href={item.to}
    on:click={() => {
      dispatch('menuSelection', {})
    }}>
    {item.text}
  </a>
</li>
