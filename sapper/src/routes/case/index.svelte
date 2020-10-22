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
  <div
      class="flex flex-col lg:flex-row justify-between w-full max-w-screen-lg mx-auto px-8 md:px-24">
      
  <Animation.WithScrollFadeIn>
    <div class="flex flex-col px-8 md:px-16 lg:px-32">
      <Layout.Text>
        <Typography.H1>Våra case</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphMd>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            consectetur imperdiet nulla. Diam ullamcorper mauris ipsum facilisis
            in natoque. Eget amet ante non, mauris aenean diam vel, diam nec.
            Vitae, aliquet dui et, velit consequat.
          </Typography.ParagraphMd>
        </div>
      </Layout.Text>
    </div>
    <Layout.Content>
      
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          gap-6">
        {#each posts as post}
          <Animation.CardHover>
            <a
              rel="prefetch"
              href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
              <div
                style="height: 468px;"
                class="flex flex-col rounded-md p-4 bg-white">
                <img
                  class="rounded-md object-cover h-full"
                  src={'https://www.k9ofmine.com/wp-content/uploads/2018/10/black-dog-names.jpg'}
                  alt="feature" />
                <div class="ml-2 mt-6">
                  <Typography.H3>{post.title}</Typography.H3>
                  <Typography.ParagraphMd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography.ParagraphMd>
                </div>
              </div>
            </a>
          </Animation.CardHover>
        {/each}
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</div>
</Layout.Page>

<ContactBlock.Default />
