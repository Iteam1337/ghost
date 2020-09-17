<script>
  import WithScrollFadeIn from '../WithScrollFadeIn.svelte'

  export let title
  export let text
  export let imageOne
  export let imageTwo
</script>

<WithScrollFadeIn>
  <div class="flex flex-col-reverse lg:flex-row px-8 sm:px-32 mb-24">
    <div
      class="self-start lg:self-center w-full lg:w-3/4 lg:pr-32 mt-12 lg:mt-0">
      <h1 class="text-4xl font-medium py-4 leading-10">{title}</h1>
      <p class="font-light text-base">{text}</p>
    </div>
    <div class="w-full lg:w-2/4 relative top-0 pb-32">

      <img class="h-auto w-3/4 relative top-0" src={imageOne} alt={imageOne} />

      <img
        class="h-auto absolute bottom-0 right-0 w-1/2"
        src={imageTwo}
        alt={imageTwo} />

    </div>
  </div>
</WithScrollFadeIn>
