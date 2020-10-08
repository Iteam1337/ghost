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
  import ContactBlock from '../../components/contact/'
  import helpers from '../../utils/helpers'
  export let post

  const bio = [] || post.primary_author.bio.split('\n').map((i) => i)
</script>

<svelte:head>
  <title>Blog | {post.title}</title>
  <style>
    body {
      background-color: white;
    }
  </style>
</svelte:head>

<Layout.Page>
  <div class="flex px-8 sm:px-40">
    <div class="flex-initial">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.ParagraphLg>
        {helpers.getIngressFromHTMLBlob(post.html)}
      </Typography.ParagraphLg>
      <div class="flex w-full items-center mt-8 flex-wrap">
        <img
          src={post.primary_author.profile_image}
          alt="author"
          class="rounded-full w-8 sm:w-10 mr-3" />
        <div class="flex items-baseline">
          <Typography.H4>{post.primary_author.name}</Typography.H4>
          &nbsp;
          <Typography.ParagraphSm spacing={false}>
            • {moment(post.published_at).format('DD MMMM YYYY')}
          </Typography.ParagraphSm>
        </div>
      </div>
    </div>
  </div>

  <Layout.Post type="blog">
    {@html helpers.getHTMLBlobWithoutIngress(post.html)}
  </Layout.Post>

  <div class="px-8 md:px-16 lg:px-32">
    <div class="px-2 sm:px-8">
      <Typography.H4>{post.primary_author.name}</Typography.H4>
      <Typography.ParagraphSm>
        {#each bio as line}
          {#if line.includes('@')}
            <a href="www.iteam.se" class="underline">{line}</a>
          {:else}{line}<br />{/if}
        {/each}
      </Typography.ParagraphSm>
    </div>
  </div>
</Layout.Page>

<ContactBlock.Default />
