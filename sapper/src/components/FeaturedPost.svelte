<script>
  import helpers from '../utils/helpers'
  import Animation from './animation'
  export let post
</script>

<div
  class={`bg-white rounded-md ${post.primary_tag.slug === 'blog' ? 'md:flex-customnarrow lg:flex-customwide' : 'lg:flex-customwide xl:flex-customnarrow'}`}>
  <Animation.CardHover>
    <div class="p-4" style="height: 468px;">
      <a
        rel="prefetch"
        href={`${helpers.getRouteFromPostTag(post.primary_tag.slug)}/${post.slug}`}>
        <div class="h-full pb-4">
          <div class="relative" style="height: 90%;">
            <img
              class={`rounded-md object-cover h-full ${post.primary_tag.slug === 'erbjudande' ? 'w-full' : 'w-full'}`}
              src={'https://www.k9ofmine.com/wp-content/uploads/2018/10/black-dog-names.jpg'}
              alt="feature" />
            <div class="absolute" style="bottom: 1rem; left: 1rem;">
              {#each post.tags as tag}
                <div
                  class="inline-block bg-white rounded-md px-2 py-1 mr-1 mb-1">
                  <p class="font-medium text-xs">{tag.name}</p>
                </div>
              {/each}
            </div>
            <div class="ml-2">
              <p class="mt-4 font-medium">{post.title}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </Animation.CardHover>
</div>
