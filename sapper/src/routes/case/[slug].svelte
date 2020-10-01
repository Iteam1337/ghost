<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  export let post

  import Typography from '../../components/typography/'
  import Links from '../../components/links/'
  import ContactBanner from '../../components/ContactBanner.svelte'
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

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex px-8 sm:px-40">
    <div class="flex-initial">
      <div class="mb-8 flex flex-wrap">
        {#each post.tags as tag}
          {#if tag.name !== 'case'}
            <Links.RoundedLabel>{tag.name}</Links.RoundedLabel>
          {/if}
        {/each}
      </div>
      <Typography.H1>{post.title}</Typography.H1>
      <div class="case">
        {@html post.html}
      </div>
    </div>
  </div>
</div>

<ContactBanner
  title="Har du en liknande utmaning?"
  text="Vi är redo att hjälpa era att ta det första steget mot att förverkliga er digitala vision. Kontakta oss så berättar vi mer."
  context="sale" />
