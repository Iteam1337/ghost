<script>
  import Medarbetare from './Medarbetare.svelte'

  import { API } from './services/api.js'

  const postPromise = API.Posts.Filter(['erbjudande', 'js'])

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
      <a href="?{viewQueryStringParameter}=hem" on:click={() => show('hem')}>
        Hem
      </a>
    </li>
    <li>
      <a
        href="?{viewQueryStringParameter}=medarbetare"
        on:click={() => show('medarbetare')}>
        Medarbetare
      </a>
    </li>
  </ul>

  {#if activeArea == 'hem'}
    {#await postPromise then data}
      {#each data.posts as post}
        <div>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <p>
            {@html post.html}
          </p>
          <p>
            <img src={post.feature_image} />
          </p>
        </div>
      {/each}
    {/await}
  {/if}

  {#if activeArea == 'medarbetare'}
    <Medarbetare />
  {/if}

</main>
