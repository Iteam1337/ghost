<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
  import moment from 'moment'

  export let post
  console.log(post)
  const bio = post.primary_author.bio.split('\n').map((i) => i)
  console.log('bio', bio)
</script>

<svelte:head>
  <title>Blog | {post.title}</title>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col px-8 sm:px-32">
    <div class="flex w-full items-center">
      <img
        src={post.primary_author.profile_image}
        alt="author"
        class="rounded-full w-10 mr-3" />
      <Typography.ParagraphSm bold={true} spacing={false}>
        {post.primary_author.name}
      </Typography.ParagraphSm>
      <Typography.ParagraphSm spacing={false}>
        &nbsp;•&nbsp;{moment(post.published_at).format('DD MMMM YYYY')}
      </Typography.ParagraphSm>
    </div>
    <div class="flex-initial pt-8">
      <Typography.H1>{post.title}</Typography.H1>
    </div>
  </div>
  <Layout.Content>
    {@html post.html}
  </Layout.Content>
  <Layout.Content>
    <Typography.ParagraphSm bold={true} spacing={false}>
      {post.primary_author.name}
    </Typography.ParagraphSm>
    <Typography.ParagraphSm>
      {#each bio as line}{line}<br />{/each}
    </Typography.ParagraphSm>
  </Layout.Content>

  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
</Layout.Page>
