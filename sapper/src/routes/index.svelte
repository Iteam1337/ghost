<script context="module">
  import { API } from '../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Posts.List()
  }
</script>

<script>
  export let posts
</script>

<style>
  div.intro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4em;
    margin-top: 4em;
  }

  div.intro:first-child {
    max-width: 32em;
  }

  a,
  a:visited {
    font-weight: 500;
    color: var(--cornflower);
  }
</style>

<svelte:head>
  <title>Iteam Solutions</title>
</svelte:head>

<div class="intro">
  <div>
    <h1>Kod, kultur och strategi</h1>
    <p>
      Genom agilitet, användarfokus och i nära samarbete med våra kunder skapar
      vi digital innovation.
    </p>
    <p>
      <a href="/about">Så här går det till &rightarrow;</a>
    </p>
  </div>
  <div>TODO: Illustrationer</div>
</div>

{#each posts as post}
  <div>
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <p>
      {@html post.html}
    </p>
    <p>
      <img src={post.feature_image} alt="feature" />
    </p>
  </div>
{/each}
