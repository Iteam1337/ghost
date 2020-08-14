<script context="module">
  import { API } from "../services/api.js";

  export async function preload() {
    return API(this.fetch).Posts.ByTags(["erbjudande", "js"]);
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

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
