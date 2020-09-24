<script context="module">
  // import { API } from '../../services/api.js'

  // export async function preload(_page, session) {
  //   return API({ fetch: this.fetch, session }).Posts.ByTags(['case'])
  // }
</script>

<script>
  import Animation from '../../components/animation'
  import Tag from '../../components/Tag.svelte'
  import Typography from '../../components/typography/'

  export let posts = [
    {
      title: 'Taxi Stockholm',
      slug: 'taxi-stockholm',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Tjejjouren Väst',
      slug: 'tjejjouren-vast',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Vimla',
      slug: 'vimla',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Predictive Movement',
      slug: 'predictive-movement',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Mass Predict',
      slug: 'mass-predict',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Searchat',
      slug: 'searchat',
      primary_tag: {
        name: 'Case',
      },
    },
    {
      title: 'Egendata',
      slug: 'egendata',
      primary_tag: {
        name: 'Case',
      },
    },
  ]
</script>

<!-- Case -->
<svelte:head>
  <title>Iteam | Case</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex flex-col px-8 md:px-16 lg:px-32">
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Våra case</Typography.H1>
      <Typography.LeadingParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
        consectetur imperdiet nulla. Diam ullamcorper mauris ipsum facilisis in
        natoque. Eget amet ante non, mauris aenean diam vel, diam nec. Vitae,
        aliquet dui et, velit consequat.
      </Typography.LeadingParagraph>
    </div>
  </div>
  <div class="px-8 md:px-16 lg:px-32 pt-32">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
        gap-6">
      {#each posts as post}
        <Animation.CardHoover>
          <div
            style="height: 468px;"
            class="flex flex-col shadow-featured rounded-md p-4">
            <div class="bg-gray-400 h-full rounded-md relative">
              <div class="absolute" style="bottom: 1rem; left: 1rem;">
                <Tag text={post.primary_tag.name} />
              </div>
            </div>
            <div class="ml-2">
              <p class="mt-6 font-medium">{post.title}</p>
              <Typography.BaseParagraph spacing={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography.BaseParagraph>
            </div>
          </div>
        </Animation.CardHoover>
      {/each}
    </div>
  </div>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
</div>
