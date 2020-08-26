<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Pages.ByTags(['Medarbetare'])
  }
</script>

<script>
  export let pages

  import Typography from '../../components/typography/'
  import FeaturedPosts from '../../components/FeaturedPosts.svelte'
  import Links from '../../components/links'
  import FeaturedImageIteam from '../../assets/featured-image-iteam.svg'
</script>

<!-- Medarbetare -->
<svelte:head>
  <title>Iteam | Medarbetare</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <FeaturedImageIteam />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Medarbetare</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        Här är vi som jobbar på Iteam.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/career">
        Vill du se ditt ansikte här?
      </Links.ArrowTextLink>
    </div>

  </div>
  <div class="px-8 md:px-16 lg:px-32 pt-32">
    {#each pages as page}
      <img src={page.feature_image} alt={page.title} />
    {/each}
  </div>

  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
    md:mx-auto space-x-3" />
</div>
