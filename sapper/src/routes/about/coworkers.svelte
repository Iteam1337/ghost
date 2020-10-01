<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Pages.ByTags(['Medarbetare'])
  }
</script>

<script>
  export let pages
  import Layout from '../../components/layout'
  import Typography from '../../components/typography/'
  import Links from '../../components/links'
  import FeaturedImageIteam from '../../assets/featured-image-iteam.svg'
</script>

<!-- Medarbetare -->
<svelte:head>
  <title>Iteam | Medarbetare</title>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <FeaturedImageIteam />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Medarbetare</Typography.H1>
      <Typography.BaseParagraph>
        Här är vi som jobbar på Iteam.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/career">
        Vill du se ditt ansikte här?
      </Links.ArrowTextLink>
    </div>
  </div>

  <div class="flex flex-wrap justify-center px-8 md:px-12 pt-32">
    {#each pages as coworker}
      <div
        class="transform hover:shadow-hover transition duration-500 ease-in
          hover:bg-white p-4 rounded-md my-2 mx-2 w-full sm:w-2/5 xl:w-1/5">
        <a rel="prefetch" href={`/about/coworker/${coworker.slug}`}>
          <div class="h-full pb-4">
            <div class="relative" style="height: 90%;">
              <img
                class="rounded-full object-cover"
                src={coworker.feature_image}
                alt="feature" />
              <p class="mt-4 font-medium text-center">{coworker.title}</p>
              <p class="font-light text-center mt-4">
                {@html coworker.excerpt.replace('\n', '<br />')}
              </p>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</Layout.Page>
