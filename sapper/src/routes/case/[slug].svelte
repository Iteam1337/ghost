<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  export let post

  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
</script>

<!-- Ett case -->
<svelte:head>
  <title>Case | {post.title}</title>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2"><img src={post.feature_image} alt={post.title} /></div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.ParagraphSm>{post.excerpt}</Typography.ParagraphSm>
    </div>
  </div>
  <Layout.Content>
    {@html post.html}
  </Layout.Content>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
</Layout.Page>
