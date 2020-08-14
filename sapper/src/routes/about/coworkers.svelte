<script>
  import { API } from '../../services/api.js'
  const contentPromise = API.Pages.ByTags(['medarbetare'])
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
  {#await contentPromise then data}
    {#each data.pages as medarbetare}
      <div>
        <img src={medarbetare.feature_image} alt={medarbetare.title} />
      </div>
    {/each}
  {/await}
</div>
