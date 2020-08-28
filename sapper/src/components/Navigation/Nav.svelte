<script>
  import NavItem from './NavItem.svelte'
  import Hamburger from '../../assets/hamburger.svg'

  export let segment

  let menuHidden = true
  const toggleMenu = () => {
    menuHidden = !menuHidden
  }

  const menu = [
    { text: 'Case', to: 'case' },
    { text: 'Tjänster', to: 'services' },
    { text: 'Om oss', to: 'about' },
    { text: 'Karriär', to: 'career' },
    { text: 'Kontakt', to: 'contact' },
    { text: 'Blogg', to: 'blog' },
  ]
</script>

<nav class="sm:container flex justify-between mx-5">
  <a
    class="py-5"
    aria-current={segment === undefined ? 'page' : undefined}
    href=".">
    <img src="iteam.png" alt="Iteam" class="logo" style="width: 100px;" />
  </a>

  <ul class="p-0 m-0 flex flex-col items-end sm:block">
    <button
      on:click={() => toggleMenu()}
      class="sm:hidden my-5 mx-0 px-0 h-6 w-6 fill-current">
      <Hamburger />
    </button>

    {#each menu as item}
      <NavItem
        on:menuSelection={() => toggleMenu()}
        hidden={menuHidden}
        {item}
        {segment} />
    {/each}
  </ul>
</nav>
