<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session }).Posts.ByTags(['case'])
  }
</script>

<script>
  export let posts
</script>

<!-- Case -->
<svelte:head>
  <title>Case</title>
</svelte:head>

<div class="lg:container lg:mx-auto py-20">
  <div class="flex px-20 max-w-3xl">
    <div class="flex-initial">
      <h1 class="text-4xl font-medium">Kundcase</h1>
      <p>Här är några exempel på projekt vi har gjort...</p>
      {#each posts as post}
        <div class="shadow-md bg-white-400 px-4 py-2 m-2">
          <a class="main-title" rel="prefetch" href="case/{post.slug}">
            {post.title}
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
