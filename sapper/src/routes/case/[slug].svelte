<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  export let post

  import Typography from '../../components/typography/'
</script>

<!-- Ett case -->
<svelte:head>
  <title>Case | {post.title}</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <img src={post.feature_image} alt={post.title} />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        {post.excerpt}
      </Typography.BaseParagraph>
    </div>

  </div>
  <div class="px-8 md:px-16 lg:px-32 pt-32">
    {@html post.html}
  </div>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
    md:mx-auto space-x-3" />
</div>
