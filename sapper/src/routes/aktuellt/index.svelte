<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session })
      .Posts.ByTags(['blog'])
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

<svelte:head>
  <title>Iteam | Aktuellt</title>
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
        <Typography.H1>Artiklar & nyheter</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphLg>
            Vi gillar att experimentera. Vi laborerar med ny teknik,
            omvärldsbevakar och delar vårt lärande med varandra och våra kunder.
            Vår kunskap är din kunskap.
          </Typography.ParagraphLg>
        </div>
      </div>
    </Layout.Content>
    <Layout.Content>
      <div>
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 py-6 gap-6">
          {#each posts as post}
            <Animation.CardHover>
              <a
                rel="prefetch"
                href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
                <div
                  style="height: 407px;"
                  class="flex flex-col rounded p-3 bg-white">
                  <img
                    class="rounded object-cover h-full"
                    src={post.feature_image}
                    alt="feature" />
                  <div class="ml-2 mt-6">
                    <Typography.H3>{post.title}</Typography.H3>
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
