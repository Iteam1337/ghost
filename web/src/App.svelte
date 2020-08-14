<script>
  import page from 'page'

  import Hem from './pages/Hem.svelte'
  import Medarbetare from './pages/Medarbetare.svelte'

  /**
   * Routing
   */
  let current = Hem
  page('/', () => (current = Hem))
  page('/medarbetare', () => (current = Medarbetare))
  page.start()
</script>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Iteam</h1>
  <ul>
    <li>
      <a href="/">Hem</a>
    </li>
    <li>
      <a href="/medarbetare">Medarbetare</a>
    </li>
  </ul>

  <svelte:component this={current} />
</main>
