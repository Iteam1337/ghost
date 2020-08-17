<script>
  export let segment
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    padding-right: 1em;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  img.logo {
    width: 100px;
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <img src="iteam.png" alt="Iteam" class="logo" />
  </a>
  <ul>
    <li />
    <li>
      <a aria-current={segment === 'case' ? 'page' : undefined} href="case">
        Case
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'services' ? 'page' : undefined}
        href="services">
        Tjänster
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        Om oss
      </a>
    </li>
    <li>
      <a aria-current={segment === 'career' ? 'page' : undefined} href="career">
        Karriär
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">
        Kontakt
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blogg
      </a>
    </li>
  </ul>
</nav>
