<script>
  export let segment, to, text, hidden

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<li
  class="text-black px-2 py-4 font-medium block float-left pl-6 hidden sm:block"
  class:hidden>
  <a
    aria-current={segment === to ? 'page' : undefined}
    href={to}
    on:click={() => {
      dispatch('menuSelection', {})
    }}>
    {text}
  </a>
</li>
