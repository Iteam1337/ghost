<script>
  import NavItem from './NavItem.svelte'
  import Hamburger from '../../assets/hamburger.svelte'
  import Close from '../../assets/close.svelte'

  export let segment

  let menuHidden = true
  const toggleMenu = () => {
    menuHidden = !menuHidden
  }

  const menu = [
    { text: 'Case', to: 'case' },
    { text: 'Tjänster', to: 'services' },
    { text: 'Om oss', to: 'about' },
    { text: 'Aktuellt', to: 'blog' },
    { text: 'Kontakta oss 👋', to: 'contact' },
  ]
</script>

<div class={!segment && 'bg-grey-cod text-white'}>
  <nav
    class="px-8 flex justify-between lg:max-w-screen-xl mx-auto items-center">
    <a
      class="py-5 z-50"
      aria-current={segment === undefined ? 'page' : undefined}
      href=".">
      <img
        src={!segment ? 'iteam-white.png' : 'iteam.png'}
        alt="Iteam"
        class="logo"
        style="width: 100px;" />
    </a>

    <!-- Menu visible on desktop. -->
    <ul class="p-0 m-0 flex flex-col items-end hidden md:block">
      {#each menu as item}
        <NavItem {item} {segment} />
      {/each}
    </ul>

    <!-- Menu visible on mobile. -->
    <div
      class="{!segment ? 'bg-grey-cod' : 'bg-white'} w-full h-full fixed left-0 top-0 z-40 bg-opacity-95 pr-6 md:hidden"
      class:hidden={menuHidden}>
      <div class="relative h-full w-full">
        <ul class="p-0 m-0 mt-24 flex flex-col md:block absolute left-0 top-0">
          {#each menu as item}
            <NavItem on:menuSelection={() => toggleMenu()} {item} {segment} />
          {/each}
        </ul>
      </div>
    </div>
    <div class="md:hidden h-8 w-8 z-50" on:click={() => toggleMenu()}>
      {#if menuHidden}
        <Hamburger stroke={!segment && 'white'} />
      {:else}
        <Close fill={!segment && 'white'} />
      {/if}
    </div>
  </nav>
</div>

<!-- Mobile nav -->
