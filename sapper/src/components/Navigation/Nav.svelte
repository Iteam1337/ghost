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
    // { text: 'Tjänster', to: 'services' },
    { text: 'Om oss', to: 'about' },
    { text: 'Aktuellt', to: 'blog' },
    { text: 'Kontakta oss 👋', to: 'contact' },
  ]
</script>

<nav class="px-8 flex justify-between lg:max-w-screen-xl mx-auto">
  <a
    class="py-5"
    aria-current={segment === undefined ? 'page' : undefined}
    href=".">
    <img src="iteam.png" alt="Iteam" class="logo" style="width: 100px;" />
  </a>

  <!-- Menu visible on desktop. -->
  <ul class="p-0 m-0 flex flex-col items-end hidden md:block">
    {#each menu as item}
      <NavItem {item} {segment} />
    {/each}
  </ul>

  <!-- Menu visible on mobile. -->
  <div
    class="bg-white w-full h-full fixed left-0 top-0 z-40 bg-opacity-95 pr-6 md:hidden"
    class:hidden={menuHidden}>
    <div class="relative h-full w-full">
      <ul
        class="p-0 m-0 flex flex-col items-end md:block absolute right-0
        bottom-0 pb-24">
        {#each menu as item}
          <NavItem on:menuSelection={() => toggleMenu()} {item} {segment} />
        {/each}
      </ul>
    </div>
  </div>
</nav>

<!-- Mobile nav -->
<div class="md:hidden w-12 fixed bottom-0 right-0 z-50 m-6">
  <div class="bg-green rounded-full p-3" on:click={() => toggleMenu()}>
    <Hamburger />
  </div>
</div>
