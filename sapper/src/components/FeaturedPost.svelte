<script>
  import helpers from '../utils/helpers'
  import Animation from './animation'
  import Typography from './typography'
  export let post
</script>

<div
  class={`bg-white rounded ${post.primary_tag.slug === 'blog' ? 'md:flex-customwide ' : 'md:flex-customwide lg:flex-customnarrow'}`}>
  <Animation.CardHover>
    <div class="p-3 h-cardSm lg:h-card">
      <a
        rel="prefetch"
        href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
        <div class="h-full">
          <div class="relative" style="height: 90%;">
            <img
              class="rounded object-cover h-full w-full"
              src={post.feature_image}
              alt="feature" />
            <div class="absolute" style="bottom: 1rem; left: 1rem;">
              {#each post.tags as tag}
                <div class="inline-block bg-white rounded px-2 py-1 mr-2 mb-2">
                  <p class="font-medium text-xs">{tag.name}</p>
                </div>
              {/each}
            </div>
            <div class="ml-2 mt-4">
              <Typography.H3>{post.title}</Typography.H3>
            </div>
          </div>
        </div>
      </a>
    </div>
  </Animation.CardHover>
</div>
