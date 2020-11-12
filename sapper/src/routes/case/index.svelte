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
  <style>
    body {
      background-color: #fcfaf6;
    }
  </style>
</svelte:head>

<Layout.Base>
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
      <div class="py-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {#each posts as post}
            <Animation.CardHover>
              <a
                rel="prefetch"
                href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
                <div class="bg-white flex flex-col p-3 h-full">
                  <div
                    class="rounded bg-cover bg-center"
                    style="padding-bottom: 60%; background-image: url({post.feature_image})"
                    title="featured case graphic" />

                  <div class="ml-2 mt-6">
                    <Typography.ParagraphMd>
                      {post.meta_title || post.title}
                    </Typography.ParagraphMd>
                    {#if post.meta_description}
                      <Typography.H3>{post.meta_description}</Typography.H3>
                    {/if}
                  </div>
                </div>
              </a>
            </Animation.CardHover>
          {/each}
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Base>

<ContactBlock.Default />
