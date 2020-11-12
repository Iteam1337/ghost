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
  import Animation from '../../components/animation/'

  export let post

  const bio = post.primary_author.bio?.split('\n') ?? []
</script>

<svelte:head>
  <title>Aktuellt | {post.title}</title>
  <style>
    body {
      background-color: white;
    }
  </style>
</svelte:head>

<Layout.Base>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="sm:px-16 md:px-24">
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
              •
              {moment(post.published_at).format('DD MMMM YYYY')}
            </Typography.ParagraphSm>
          </div>
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>

  <Layout.Post type="blog">
    <div class="sm:px-24">
      {@html helpers.getHTMLBlobWithoutIngress(post.html)}
    </div>
  </Layout.Post>
  <div class="px-8 md:px-0 max-w-screen-lg mx-auto w-full">
    <div class="mt-24 sm:px-16 md:px-24">
      <Typography.H4>{post.primary_author.name}</Typography.H4>
      <Typography.ParagraphSm spacing={false}>
        {#each bio as line}
          {#if line.includes('@')}
            <a href={`mailto:${line}`} class="underline">{line}</a>
            <br />
          {:else}{line}<br />{/if}
        {/each}
      </Typography.ParagraphSm>
    </div>
  </div>
</Layout.Base>

<ContactBlock.Default />
