<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session })
      .Posts.ByTags(['case'])
      .then(({ posts }) => ({ posts }))
  }
</script>

<script>
  import Layout from '../../components/layout'
  import Animation from '../../components/animation'
  import Typography from '../../components/typography/'
  import ContactBlock from '../../components/contact'
  import helpers from '../../utils/helpers.js'

  export let posts
</script>

<!-- Case -->
<svelte:head>
  <title>Iteam | Case</title>
</svelte:head>

<Layout.Page>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="w-full md:px-24">
        <Typography.H1>Våra case</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphLg>
            Under 25 år har vi hjälpt våra kunder att skapa värde. Vi har jobbat
            med en stor variation av kunder, från stora varumärken och
            myndigheter till innovativa startups. Här är några av våra
            samarbeten.
          </Typography.ParagraphLg>
        </div>
      </div>
    </Layout.Content>
    <Layout.Content>
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-8 lg:px-0">
        {#each posts as post}
          <Animation.CardHover>
            <a
              rel="prefetch"
              href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
              <div
                style="height: 468px;"
                class="flex flex-col rounded p-3 bg-white">
                <img
                  class="rounded object-cover h-full"
                  src={post.feature_image}
                  alt="featured case graphic" />
                <div class="ml-2 mt-6">
                  <Typography.ParagraphMd>Kundnamn</Typography.ParagraphMd>
                  <Typography.H3>{post.title}</Typography.H3>
                </div>
              </div>
            </a>
          </Animation.CardHover>
        {/each}
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Page>

<ContactBlock.Default />
