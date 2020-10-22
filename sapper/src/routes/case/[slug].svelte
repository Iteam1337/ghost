<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Links from '../../components/links/'
  import ContactBlock from '../../components/contact'
  import Layout from '../../components/layout'
  import helpers from '../../utils/helpers.js'

  export let post
  export let filteredTags = post.tags.filter((tag) => tag.name.includes('#'))
</script>

<!-- Ett case -->
<svelte:head>
  <title>Case | {post.title}</title>
  <style>
    body {
      background-color: white;
    }
  </style>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col px-8 md:px-16 lg:px-32">
    <div class="max-w-4xl pt-8 mx-2 md:mx-10 lg:mx-20">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.ParagraphLg>
        {helpers.getIngressFromHTMLBlob(post.html)}
      </Typography.ParagraphLg>
      <div class="flex flex-wrap mt-8">
        {#each post.tags as tag}
          {#if tag.slug !== 'case' && tag.visibility === 'public'}
            <Links.RoundedLabel>{tag.name}</Links.RoundedLabel>
          {/if}
        {/each}
      </div>
    </div>
  </div>
  <Layout.Post type="case">
    {@html helpers.getHTMLBlobWithoutIngress(post.html)}
    {#if filteredTags.length}
      <div class="px-8 md:px-16 lg:px-32">
        <div class="flex flex-wrap max-w-4xl pt-8 mx-2 md:mx-10 lg:mx-20">
          {#each filteredTags as tag}
            <img src={tag.feature_image} alt={tag.name} />
          {/each}
        </div>
      </div>
    {/if}
  </Layout.Post>
</Layout.Page>

<ContactBlock.Challenge />
