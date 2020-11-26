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
  import Animation from '../../components/animation'
  import Meta from '../../components/Meta.svelte'

  export let post
  export let filteredTags = post.tags.filter((tag) => tag.name.includes('#'))
</script>

<!-- Ett case -->
<Meta
  title="Iteam | Case - {post.meta_title || post.title}"
  description={post.meta_description || post.excerpt}
  image={post.feature_image} />

<Animation.WithScrollFadeIn>
  <Layout.Container>
    <div class="max-w-4xl mx-auto">
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
    <Layout.Post type="case">
      {@html helpers.getHTMLBlobWithoutIngress(post.html)}
      {#if post.html.includes('<h3 id="tekniker">Tekniker</h3>')}
        <div class="sm:px-16">
          <div class="flex flex-wrap max-w-4xl">
            {#each filteredTags as tag}
              <img src={tag.feature_image} alt={tag.name} />
            {/each}
          </div>
        </div>
      {/if}
    </Layout.Post>
  </Layout.Container>
</Animation.WithScrollFadeIn>

<ContactBlock.Challenge />
