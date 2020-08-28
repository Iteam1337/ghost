<script>
  export let hidden, item, segment

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<li
  class="text-black px-2 py-4 font-medium block float-left pl-6 hidden sm:block"
  class:hidden>
  <a
    aria-current={segment === item.to ? 'page' : undefined}
    href={item.to}
    on:click={() => {
      dispatch('menuSelection', {})
    }}>
    {item.text}
  </a>
</li>
