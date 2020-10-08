<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Links from '../../components/links/'
  import ContactBanner from '../../components/ContactBanner.svelte'
  import Layout from '../../components/layout'
  import ParagraphLg from '../../components/typography/ParagraphLg.svelte'
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
  <div class="flex px-8 sm:px-40">
    <div class="flex-initial">
      <Typography.H1>{post.title}</Typography.H1>
      <Typography.ParagraphLg>
        {helpers.splitHTMLOnFirstParagraph(post.html)[0]}
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
    {@html helpers.splitHTMLOnFirstParagraph(post.html)[1]}
    {#if post.html.includes('<h3 id="tekniker">Tekniker</h3>')}
      <div class="px-0 sm:px-32 flex flex-wrap">
        {#each filteredTags as tag}
          <img src={tag.feature_image} alt={tag.name} />
        {/each}
      </div>
    {/if}
  </Layout.Post>
</Layout.Page>

<ContactBanner
  title="Har du en liknande utmaning?"
  text="Vi är redo att hjälpa era att ta det första steget mot att förverkliga er digitala vision. Kontakta oss så berättar vi mer."
  context="sale" />
