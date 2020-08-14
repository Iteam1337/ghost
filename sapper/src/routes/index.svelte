<script>
  import { API } from "../services/api.js";

  const postPromise = API.Posts.ByTags(["erbjudande", "js"]);
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

{#await postPromise then data}
  {#each data.posts as post}
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
{/await}
