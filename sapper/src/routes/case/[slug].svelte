<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Post.BySlug(slug)
  }
</script>

<script>
  export let post
</script>

<!-- Case -->
<svelte:head>
  <title>Case | {post.title}</title>
</svelte:head>

<div class="lg:container lg:mx-auto py-20">
  <div class="flex px-20 max-w-3xl">
    <div class="flex-initial">
      <h1 class="text-4xl font-medium">{post.title}</h1>
    </div>
  </div>
</div>
