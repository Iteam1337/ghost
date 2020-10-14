<script>
  import Typography from '../typography'
  import Animation from '../animation'

  export let title = 'Nyfiken på vad vi kan göra tillsammans?'
  export let text = ''
  export let ctaText = 'Hör av dig'
</script>

<div class="bg-grey-medium">
  <Animation.WithScrollFadeIn threshold={0.5}>
    <div class="container px-8 md:px-16 lg:px-32">
      <div
        class="flex flex-col md:flex-row items-center text-white py-20 md:py-32
          justify-between">
        <div class="mb-12 md:mb-0">
          <h2 class="text-4xl w-full lg:w-2/3 font-medium tracking-wide mb-10">
            {title}
          </h2>
          <div class="lg:w-2/3">
            <Typography.ParagraphLg>{text}</Typography.ParagraphLg>
          </div>
          <div class="mt-10">
            <a
              class="bg-blue-cornflower text-white py-2 px-10 rounded-full"
              href="/contact">
              {ctaText}
            </a>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </Animation.WithScrollFadeIn>
</div>
