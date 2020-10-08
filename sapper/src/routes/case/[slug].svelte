<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Links from '../../components/links/'
  import ContactBlock from '../../components/ContactBlock.svelte'
  import Layout from '../../components/layout'

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
      <div class="mb-8 flex flex-wrap">
        {#each post.tags as tag}
          {#if tag.slug !== 'case' && tag.visibility === 'public'}
            <Links.RoundedLabel>{tag.name}</Links.RoundedLabel>
          {/if}
        {/each}
      </div>
      <Typography.H1>{post.title}</Typography.H1>
    </div>
  </div>
  <div class="case pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
    {@html post.html}

    {#if post.html.includes('<h3 id="tekniker">Tekniker</h3>')}
      <div class="px-0 sm:px-32 flex flex-wrap">
        {#each filteredTags as tag}
          <img src={tag.feature_image} alt={tag.name} />
        {/each}
      </div>
    {/if}
  </div>
</Layout.Page>

<ContactBlock
  title="Har du en liknande utmaning?"
  text="Vi är redo att hjälpa era att ta det första steget mot att förverkliga er digitala vision. Kontakta oss så berättar vi mer.">
  <div class="self-start flex flex-col flex-shrink-0 md:pt-8">
    <img src="sales.png" alt="sales person" />
    <div class="mt-4">
      <p class="font-medium">Jonna Hjelm</p>
      <p class="font-thin">
        Försäljningsansvarig <br /> 072-975 53 66 <br /> jonna.hjern@iteam.se
      </p>
    </div>
  </div>
</ContactBlock>
