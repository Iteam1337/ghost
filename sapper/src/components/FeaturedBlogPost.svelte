<script>
  export let post
</script>

<div
  class="shadow-featured bg-white p-4 custom-flex-span-wide rounded-md "
  style="height: 400px;">

  <a rel="prefetch" href="services/{post.slug}">
    <div class="h-full pb-4">
      <img
        class="rounded-md object-cover h-full w-full"
        src={post.feature_image}
        alt="feature" />
      <h2>{post.title}</h2>
    </div>
  </a>

</div>
