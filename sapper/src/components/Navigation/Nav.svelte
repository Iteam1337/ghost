<script>
  import NavItem from './NavItem.svelte'
  import Hamburger from '../../assets/hamburger.svg'
  import Close from '../../assets/close.svg'
  import SocialMedia from '../SocialMedia.svelte'
  export let segment

  let menuHidden = true
  const toggleMenu = () => {
    menuHidden = !menuHidden
  }

  const menu = [
    { text: 'Case', to: 'case' },
    // { text: 'Tjänster', to: 'services' },
    { text: 'Om oss', to: 'om-oss' },
    { text: 'Aktuellt', to: 'aktuellt' },
    { text: 'Kontakta oss 👋', to: 'kontakta-oss' },
  ]
</script>

<div class={(!segment || !menuHidden) && 'bg-grey-cod text-white'}>
  <nav
    class="px-8 flex justify-between lg:max-w-screen-xxl mx-auto items-center z-50 relative">
    <a
      class="py-5 z-50"
      aria-current={segment === undefined ? 'page' : undefined}
      href=".">
      <img
        on:click={!menuHidden && toggleMenu}
        src={segment && menuHidden ? 'iteam.png' : 'iteam-white.png'}
        alt="Iteam"
        class="logo"
        style="width: 100px;" />
    </a>

    <!-- Menu visible on desktop. -->
    <ul class="p-0 m-0 flex flex-col items-end hidden md:block">
      {#each menu as item}
        <NavItem
          ariaBorderColor={segment && menuHidden && 'black'}
          {item}
          {segment} />
      {/each}
    </ul>

    <!-- Menu visible on mobile. -->
    <div
      class="bg-grey-cod w-full h-full fixed left-0 top-0 z-40 pr-6 md:hidden text-white"
      class:hidden={menuHidden}>
      <div class="relative h-full w-full">
        <div class="p-0 m-0 mt-24 md:block absolute left-0 top-0">
          <ul class="flex flex-col">
            {#each menu as item}
              <NavItem on:menuSelection={() => toggleMenu()} {item} {segment} />
            {/each}
          </ul>
          <div class="pl-6 mt-20">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
    <div
      class={`md:hidden h-8 ${menuHidden ? 'w-8' : 'w-6'} z-50 text-${segment ? 'black' : 'white'}`}
      on:click={() => toggleMenu()}>
      {#if menuHidden}
        <Hamburger />
      {:else}
        <Close />
      {/if}
    </div>
  </nav>
</div>

<!-- Mobile nav -->
