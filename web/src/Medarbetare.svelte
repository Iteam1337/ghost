<script>
  import { API } from './services/api.js'
  const contentPromise = API.Pages.Filter(['medarbetare'])
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

<div class="grid">
  {#await contentPromise then data}
    {#each data.pages as medarbetare}
      <div>
        <img src={medarbetare.feature_image} />
      </div>
    {/each}
  {/await}
</div>
