<script>
  import helpers from '../utils/helpers'
  import Animation from './animation'
  import Typography from './typography'
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
            <div class="inline-block bg-white rounded-md px-2 py-1 mr-1">
              <p class="font-medium text-xs capitalize">
                {post.primary_tag.slug}
              </p>
            </div>
          </div>
          <div class="p-1 pt-5">
            <Typography.H3>{post.title}</Typography.H3>
          </div>
        </div>
      </div>
    </a>
  </div>
</Animation.CardHover>
