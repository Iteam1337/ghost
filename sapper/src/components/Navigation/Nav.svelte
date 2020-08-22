<script>
  import NavItem from './NavItem.svelte'
  export let segment
</script>

<nav class="lg:container lg:mx-auto flex justify-between">
  <a
    class="py-5"
    aria-current={segment === undefined ? 'page' : undefined}
    href=".">
    <img src="iteam.png" alt="Iteam" class="logo" style="width: 100px;" />
  </a>
  <ul class="p-0 m-0">
    <NavItem text="Case" to="case" {segment} />
    <NavItem text="Tjänster" to="services" {segment} />
    <NavItem text="Om oss" to="about" {segment} />
    <NavItem text="Karriär" to="career" {segment} />
    <NavItem text="Kontakt" to="contact" {segment} />
    <NavItem text="Blogg" to="blog" {segment} />
  </ul>
</nav>
