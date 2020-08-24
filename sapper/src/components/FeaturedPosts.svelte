<script>
  import FeaturedPost from './FeaturedPost.svelte'

  export let posts
</script>

<div class="flex flex-col lg:flex-row lg:flex-wrap" style="gap: 1rem;">
  {#each posts as post}
    <FeaturedPost {post} />
  {/each}
  {#each posts as post}
    <FeaturedPost {post} />
  {/each}
</div>
