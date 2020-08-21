<script>
  export let segment
</script>

<style>
  /* clearfix */

  a,
  a:visited {
    color: black;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-weight: 500;
  }

  img.logo {
    width: 100px;
  }
</style>

<nav class="lg:container lg:mx-auto flex justify-between">
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <img src="iteam.png" alt="Iteam" class="logo" />
  </a>
  <ul class="p-0 m-0">
    <li class="block float-left pl-6">
      <a aria-current={segment === 'case' ? 'page' : undefined} href="case">
        Case
      </a>
    </li>
    <li class="block float-left pl-6">
      <a
        aria-current={segment === 'services' ? 'page' : undefined}
        href="services">
        Tjänster
      </a>
    </li>
    <li class="block float-left pl-6">
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        Om oss
      </a>
    </li>
    <li class="block float-left pl-6">
      <a aria-current={segment === 'career' ? 'page' : undefined} href="career">
        Karriär
      </a>
    </li>
    <li class="block float-left pl-6">
      <a
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">
        Kontakt
      </a>
    </li>
    <li class="block float-left pl-6">
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blogg
      </a>
    </li>
  </ul>
</nav>
