<script>
  import ConnectSymbol from '../assets/illustrations/ilustration-collection.svg'
  import Typography from './typography/'
  import Animation from './animation'

  export let title = 'Nyfiken på vad vi kan göra tillsammans?'
  export let text = ''
  export let ctaText = 'Hör av dig'
  export let context = 'basic'
</script>

<div class="bg-grey-medium">
  <Animation.WithScrollFadeIn threshold={0.5}>
    <div
      class="flex flex-col md:flex-row justify-center items-center text-white
        w-screen py-20 md:py-32">
      <div class="w-screen sm:w-4/5 md:w-1/2 xl:w-1/3 pb-8 px-10 md:px-0">
        <h2 class="text-3xl font-medium tracking-wide">{title}</h2>
        <Typography.ParagraphLg>{text}</Typography.ParagraphLg>
        <div class="mt-10">
          <a
            class="bg-cornflower text-white py-2 px-10 rounded-full"
            href="/contact">
            {ctaText}
          </a>
        </div>
      </div>
      <div
        class="w-screen md:w-1/3 lg:w-1/4 flex justify-center md:ml-8 mt-6
          md:mt-0 px-16 md:px-0">
        {#if context === 'basic'}
          <ConnectSymbol />
        {:else}
          <div class="flex flex-col">
            <img src="sales.png" alt="sales person" />
            <div class="mt-4">
              <p class="font-medium">Jonna Hjelm</p>
              <p class="font-thin">
                Försäljningsansvarig <br /> 072-975 53 66 <br /> jonna.hjern@iteam.se
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </Animation.WithScrollFadeIn>
</div>
