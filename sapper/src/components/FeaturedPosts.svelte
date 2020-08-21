<script>
  import FeaturedCase from './FeaturedCase.svelte'
  import FeaturedBlogPost from './FeaturedBlogPost.svelte'

  export let posts

  function componentFromPostTag(post) {
    switch (post.primary_tag.slug) {
      case 'case':
        return FeaturedCase
      case 'erbjudande':
        return FeaturedBlogPost
    }
  }
</script>

<div class="flex flex-wrap" style="gap: 1rem;">
  {#each posts as post}
    <svelte:component this={componentFromPostTag(post)} {post} />
  {/each}
  {#each posts as post}
    <svelte:component this={componentFromPostTag(post)} {post} />
  {/each}
</div>
