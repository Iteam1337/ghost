<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
  import helpers from '../../utils/helpers.js'
  import Animation from '../../components/animation'
  import Meta from '../../components/Meta.svelte'

  export let post
</script>

<Meta
  title="Iteam | Karriär - {post.meta_title || post.title}"
  description={post.meta_description || post.excerpt}
  image={post.feature_image} />

<Animation.WithScrollFadeIn>
  <Layout.Base>
    <Layout.Content>
      <div class="sm:px-16 md:px-24">
        <Typography.H1>{post.title}</Typography.H1>
        <Typography.ParagraphMd>
          {post.excerpt.split('\n')[0]}
        </Typography.ParagraphMd>
      </div>
    </Layout.Content>
    <Layout.Post>
      {@html helpers.getHTMLBlobWithoutIngress(post.html)}
    </Layout.Post>
  </Layout.Base>
</Animation.WithScrollFadeIn>
