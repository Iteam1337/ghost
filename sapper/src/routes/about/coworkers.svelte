<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Pages.ByTags(['medarbetare'])
  }
</script>

<script>
  export let pages
</script>

<style>
  img {
    width: 256px;
  }

  div.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  }
</style>

<!-- Medarbetare -->
<svelte:head>
  <title>Medarbetare</title>
</svelte:head>

<h1>Medarbetare</h1>

<div class="grid">
  {#each pages as medarbetare}
    <div>
      <img src={medarbetare.feature_image} alt={medarbetare.title} />
    </div>
  {/each}
</div>
