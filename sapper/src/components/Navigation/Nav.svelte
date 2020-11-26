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
    { text: 'Hem', to: '' },
    { text: 'Case', to: 'case' },
    // { text: 'Tjänster', to: 'services' },
    { text: 'Om oss', to: 'om-oss' },
    { text: 'Aktuellt', to: 'aktuellt' },
    { text: 'Karriär', to: 'karriar' },
    { text: 'Kontakta oss 👋', to: 'kontakta-oss' },
  ]
</script>

<div class={!segment || !menuHidden ? 'bg-grey-cod text-white' : ''}>
  <div
    class="px-8 flex justify-between lg:max-w-screen-xxl mx-auto items-center z-50 relative">
    <a
      class="py-8"
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
    <nav class="p-0 m-0 md:flex flex-row items-end hidden ">
      {#each menu.filter((m) => !!m.to) as item}
        <NavItem ariaBorderColor={segment && 'black'} {item} {segment} />
      {/each}
    </nav>

    <!-- Menu visible on mobile. -->
    <div class="md:hidden">
      {#if !menuHidden}
        <div
          class="bg-grey-cod fixed items-start justify-start inset-0 z-40 text-white grid pt-24 px-6">
          <div class="grid gap-y-12">
            <nav class="grid gap-y-10">
              {#each menu as item}
                <NavItem
                  on:menuSelection={() => toggleMenu()}
                  {item}
                  {segment} />
              {/each}
            </nav>
            <SocialMedia />
          </div>
        </div>
      {/if}
      <div
        class="fixed rounded-full z-50 {!menuHidden || !segment ? 'bg-grey-cod' : segment === 'case' || segment === 'aktuellt' ? 'bg-beige' : 'bg-white'}"
        style="top:1rem;right:1rem;width:51px;height:51px;padding:12px;"
        on:click={() => toggleMenu()}>
        {#if menuHidden}
          <Hamburger />
        {:else}
          <Close />
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Mobile nav -->
