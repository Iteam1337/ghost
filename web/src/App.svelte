<script>
  import { API } from './services/api.js'

  const postPromise = API.Posts.Filter(['erbjudande', 'js'])

  const structure = {
    Start: { tags: '', types: 'posts,pages' },
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
  <p>Startsida - flöde med allt</p>
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
</main>
