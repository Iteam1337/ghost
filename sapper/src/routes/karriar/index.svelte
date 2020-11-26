<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session })
      .Posts.ByTags(['karriar'])
      .then(({ posts }) => ({ posts }))
  }
</script>

<script>
  import Layout from '../../components/layout'
  import Animation from '../../components/animation'
  import Typography from '../../components/typography/'
  import ContactBlock from '../../components/contact'
  import Meta from '../../components/Meta.svelte'

  export let posts
</script>

<svelte:head>
  <style>
    body {
      background-color: #fcfaf6;
    }
  </style>
</svelte:head>

<Meta title="Iteam | Karrär" />

<Layout.Base>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="w-full md:px-24">
        <Typography.H1>Bli en del av vårt team</Typography.H1>
      </div>
    </Layout.Content>
    <Layout.Content>
      <div class="py-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {#each posts as post}
            <div class="mt-8 md:mt-12">
              <div class="text-blue-cornflower">
                <Typography.H2>{post.title}</Typography.H2>
              </div>
              <Typography.ParagraphMd>
                {post.excerpt.split('\n')[0]}
              </Typography.ParagraphMd>
            </div>
          {/each}
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Base>

<ContactBlock.Default />
