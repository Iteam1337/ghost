<script>
  export let post
</script>

<div
  class="shadow-featured bg-white p-4 rounded-md custom-flex-span-narrow "
  style="height: 400px; ">
  <!-- style="height: 400px; flex-basis: 33.3333%"> -->

  <a rel="prefetch" href="case/{post.slug}">
    <div class="h-full pb-4">
      <img
        class="rounded-md object-cover h-full"
        src={post.feature_image}
        alt="feature" />
      <h2>{post.title}</h2>
    </div>
  </a>

</div>
