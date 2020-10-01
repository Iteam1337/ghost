<script>
  import ConnectSymbol from '../assets/illustrations/ilustration-collection.svg'
  import Animation from './animation'
  export let text = 'Nyfiken på vad vi kan göra tillsammans?'
  export let ctaText = 'Hör av dig'
</script>

<div class="bg-grey-medium">
  <Animation.WithScrollFadeIn threshold={0.5}>
    <div class="container px-8 md:px-16 lg:px-32">
      <div
        class="flex flex-col md:flex-row items-center justify-between text-white
          py-20 md:py-32">
        <div class="pb-8">
          <h2 class="text-3xl w-full lg:w-2/3 font-medium tracking-wide mb-10">
            {text}
          </h2>
          <a
            class="bg-cornflower text-white py-2 px-10 rounded-full"
            href="/contact">
            {ctaText}
          </a>
        </div>
        <div
          class="ml-8 sm:w-full md:w-1/3 flex justify-center mt-6 md:mt-0 px-16
            md:px-0">
          <ConnectSymbol />
        </div>
      </div>
    </div>
  </Animation.WithScrollFadeIn>
</div>
