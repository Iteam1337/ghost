<script>
  import ConnectSymbol from '../assets/illustrations/ilustration-collection.svg'
  import WithScrollFadeIn from './WithScrollFadeIn.svelte'
  export let text
  export let ctaText
</script>

<div class="bg-grey-medium">
  <WithScrollFadeIn threshold={0.5}>
    <div
      class="flex flex-col md:flex-row justify-center items-center text-white
      w-screen py-20 md:py-32">
      <div class="w-screen sm:w-4/5 md:w-1/4 pb-8 px-10 md:px-0">
        <h2 class="text-3xl font-medium tracking-wide mb-10">{text}</h2>
        <a
          class="bg-cornflower text-white py-2 px-10 rounded-full"
          href="/contact">
          {ctaText}
        </a>
      </div>
      <div
        class="w-screen md:w-1/3 lg:w-1/4 flex justify-center md:ml-8 mt-6
        md:mt-0 px-16 md:px-0">

        <ConnectSymbol />
      </div>

    </div>
  </WithScrollFadeIn>
</div>
