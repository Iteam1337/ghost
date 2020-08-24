<script>
  import NavItem from './NavItem.svelte'
  import Hamburger from '../../assets/hamburger.svg'

  export let segment

  let menuHidden = true
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
      on:click={() => {
        menuHidden = !menuHidden
      }}
      class="sm:hidden my-5 mx-0 px-0 h-6 w-6 fill-current">
      <Hamburger />
    </button>
    <NavItem hidden={menuHidden} text="Case" to="case" {segment} />
    <NavItem hidden={menuHidden} text="Tjänster" to="services" {segment} />
    <NavItem hidden={menuHidden} text="Om oss" to="about" {segment} />
    <NavItem hidden={menuHidden} text="Karriär" to="career" {segment} />
    <NavItem hidden={menuHidden} text="Kontakt" to="contact" {segment} />
    <NavItem hidden={menuHidden} text="Blogg" to="blog" {segment} />
  </ul>
</nav>
