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
        <Typography.H1>Bli en del av teamet</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphLg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography.ParagraphLg>
        </div>
      </div>
    </Layout.Content>

    {#if posts.length > 0}
      <Layout.Content>
        <div class="py-6">
          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {#each posts as post}
              <div class="mt-8 md:mt-12">
                <a href={`/karriar/${post.slug}`}>
                  <div class="text-blue-cornflower">
                    <Typography.H2>{post.title}</Typography.H2>
                  </div>
                  <Typography.ParagraphMd>
                    {post.excerpt.split('\n')[0]}
                  </Typography.ParagraphMd>
                </a>
              </div>
            {/each}
          </div>
        </div>
      </Layout.Content>
    {:else}
      <Layout.Content>
        <Typography.ParagraphMd>Inga lediga tjänster</Typography.ParagraphMd>
      </Layout.Content>
    {/if}

    <Layout.Content>
      <div class="mt-8 md:mt-12">
        <div class="text-blue-cornflower">
          <Typography.H2>Spontanansökan & praktik</Typography.H2>
        </div>
        <Typography.ParagraphMd>
          Hittar du ingen tjänst som passar? Gör en
          <b><a
              href="mailto:joinus@iteam.se"
              class="underline">spontanansökan</a></b>
          eller anmäl intresse för
          <b><a
              href="mailto:internship@iteam.se"
              class="underline">praktik</a></b>
        </Typography.ParagraphMd>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Base>
<ContactBlock.Default />
