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
  import Meta from '../../components/Meta.svelte'
  import ResponsiveImage from '../../components/ResponsiveImage.svelte'

  export let posts
</script>

<!-- Case -->
<svelte:head>
  <style>
    body {
      background-color: #fcfaf6;
    }
  </style>
</svelte:head>

<Meta title="Iteam | Case" />

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
              <div class="bg-white h-full rounded">
                <a
                  rel="prefetch"
                  href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
                  <div
                    class="grid p-3"
                    style="grid-template-rows: 325px max-content;">
                    <ResponsiveImage
                      src={post.feature_image}
                      alt="ok"
                      classNames="rounded object-cover h-full w-full" />

                    <div class="ml-2 my-4">
                      <Typography.ParagraphMd>
                        {post.meta_title || post.title}
                      </Typography.ParagraphMd>
                      {#if post.meta_description}
                        <Typography.H3>{post.meta_description}</Typography.H3>
                      {/if}
                    </div>
                  </div>
                </a>
              </div>
            </Animation.CardHover>
          {/each}
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Base>

<ContactBlock.Default />
