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
  <div class="bg-grey-medium">
    <Layout.Base>
      <Layout.Content>
        <div
          class="grid grid-cols-1 gap-12 md:grid-cols-2 items-center text-white justify-items-end pb-16">
          <div class="mb-12 md:mb-0">
            <h2
              class="text-4xl w-full lg:w-4/5 font-medium tracking-wide mb-10">
              {title}
            </h2>
            <div>
              <Typography.ParagraphLg>{text}</Typography.ParagraphLg>
            </div>
            <div class="mt-10">
              <Animation.ButtonHover>
                <a class="block" href="/contact">
                  <Buttons.Default width={'w-full md:w-auto'}>
                    {ctaText}
                  </Buttons.Default>
                </a>
              </Animation.ButtonHover>
            </div>
          </div>
          <slot />
        </div>
      </Layout.Content>
    </Layout.Base>
  </div>
</Animation.WithScrollFadeIn>
