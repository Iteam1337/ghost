<script>
  import Typography from '../typography'
  import Buttons from '../buttons'
  import Animation from '../animation'
  import Layout from '../layout'

  export let title = 'Nyfiken på vad vi kan göra tillsammans?'
  export let text =
    'Oavsett om du har en idé du vill förverkliga eller ett problem du vill lösa hjälper vi dig.'
  export let ctaText = 'Kontakta oss'
</script>

<Animation.WithScrollFadeIn threshold={0.5}>
  <Layout.Container background={'bg-grey-medium'}>
    <div
      class="grid gap-12 md:grid-cols-2 items-center text-white justify-items-center md:justify-items-end">
      <div class="grid gap-y-10">
        <h2 class="text-4xl w-full lg:w-4/5 font-medium tracking-wide">
          {title}
        </h2>
        <Typography.ParagraphLg>{text}</Typography.ParagraphLg>
        <Animation.ButtonHover>
          <a class="block" href="/kontakta-oss">
            <Buttons.Default width={'w-full md:w-auto'}>
              {ctaText}
            </Buttons.Default>
          </a>
        </Animation.ButtonHover>
      </div>
      <slot />
    </div>
  </Layout.Container>
</Animation.WithScrollFadeIn>
