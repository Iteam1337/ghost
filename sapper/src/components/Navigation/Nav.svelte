<script>
  import NavItem from './NavItem.svelte'
  import Hamburger from '../../assets/hamburger.svg'

  export let segment

  let menuHidden = true
  const toggleMenu = () => {
    menuHidden = !menuHidden
  }
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
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Case"
      to="case"
      {segment} />
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Tjänster"
      to="services"
      {segment} />
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Om oss"
      to="about"
      {segment} />
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Karriär"
      to="career"
      {segment} />
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Kontakt"
      to="contact"
      {segment} />
    <NavItem
      on:menuSelection={() => toggleMenu()}
      hidden={menuHidden}
      text="Blogg"
      to="blog"
      {segment} />
  </ul>
</nav>
