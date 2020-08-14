<script>
  import { API } from '../services/api.js'

  const postPromise = API.Posts.ByTags(['erbjudande', 'js'])
</script>

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
