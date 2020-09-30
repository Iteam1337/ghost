<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  export let post

  import Typography from '../../components/typography/'
  import Links from '../../components/links/'
</script>

<!-- Ett case -->
<svelte:head>
  <title>Case | {post.title}</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex px-40">
    <div class="flex-initial">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.Paragraph>{post.excerpt}</Typography.Paragraph>
      <div class="mt-8">
        {#each post.tags as tag}
          {#if tag.name !== 'case'}
            <Links.RoundedLabel>{tag.name}</Links.RoundedLabel>
          {/if}
        {/each}
      </div>
      <div class="case">
        {@html post.html}
      </div>
    </div>
  </div>
</div>
