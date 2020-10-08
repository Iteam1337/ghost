<script>
  export let item, segment

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<style>
  [aria-current] {
    padding-bottom: 0.3rem;
    border-bottom: 2px solid black;
  }
</style>

<li class="text-black px-2 py-4 font-medium block float-left pl-6 sm:block">
  <a
    aria-current={segment === item.to ? 'page' : undefined}
    href={item.to}
    on:click={() => {
      dispatch('menuSelection', {})
    }}>
    {item.text}
  </a>
</li>
