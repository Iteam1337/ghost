<script>
  import page from 'page'

  import Hem from './Hem.svelte'
  import Medarbetare from './Medarbetare.svelte'

  /**
   * Routing
   */
  let activeArea = 'hem'
  const viewQueryStringParameter = 'show'
  const show = area => {
    activeArea = area
    console.log('set area', activeArea)
  }

  const urlParams = new URLSearchParams(window.location.search)
  const activeView = urlParams.get(viewQueryStringParameter)
  if (!!activeView) {
    show(activeView)
  }

  // set default component
  let current = Hem

  // Map routes to page. If a route is hit the current
  // reference is set to the route's component
  page('/', () => (current = Hem))
  page('/medarbetare', () => (current = Medarbetare))
  // activate router
  page.start()
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
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
