<script>
  import helpers from '../utils/helpers'
  import Animation from './animation'
  export let post
</script>

<Animation.CardHover>
  <div
    class={`bg-white p-4 rounded-md custom-flex-span-${post.primary_tag.slug === 'erbjudande' ? 'wide' : 'narrow'}`}
    style="height: 468px;">
    <a
      rel="prefetch"
      href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
      <div class="h-full pb-4">
        <div class="relative" style="height: 90%;">
          <img
            class={`rounded-md object-cover h-full ${post.primary_tag.slug === 'erbjudande' ? 'w-full' : ''}`}
            src={post.feature_image}
            alt="feature" />
          <div class="absolute" style="bottom: 1rem; left: 1rem;">
            <!-- {#each post.tags as tag}
              <div class="inline-block bg-white rounded-md px-2 py-1 mr-1">
                <p class="font-medium text-xs">{tag.name}</p>
              </div>
            {/each} -->
          </div>
          <div class="ml-2">
            <p class="mt-4 font-medium">{post.title}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</Animation.CardHover>
