<script context="module">
  import { API } from '../../services/api.js'

  export async function preload({ params: { slug } }, session) {
    return API({ fetch: this.fetch, session }).Coworkers.BySlug(slug)
  }
</script>

<script>
  import Animation from '../../components/animation/'
  import Layout from '../../components/layout'
  import Typography from '../../components/typography'
  import md5 from 'md5'

  export let coworker
  const [workTitle, phone, email] = coworker.custom_excerpt.split('\n')
</script>

<Animation.WithScrollFadeIn>
  <Layout.Container>
    <img
      class="rounded-full h-48 sm:h-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-16"
      src={`https://www.gravatar.com/avatar/${md5(email)}?s=300`}
      alt={coworker.title} />
    <Typography.H1>{coworker.title}</Typography.H1>
    <div class="max-w-4xl">
      <Typography.ParagraphLg>{workTitle}</Typography.ParagraphLg>
      <div>
        <div class="md:px-24 py-12 max-w-2xl">
          <div class="text-blue-cornflower">
            <Typography.H2>Kontakt:</Typography.H2>
          </div>
          <Typography.ParagraphMd>
            <b><a href={`callto:${phone}`}>{phone}</a></b>
          </Typography.ParagraphMd>
          <Typography.ParagraphMd>
            <b><a href={`mailto:${email}`}>{email}</a></b>
          </Typography.ParagraphMd>
          <div class="mt-8 md:mt-12">
            <div class="text-blue-cornflower">
              <Typography.H2>Bakgrund</Typography.H2>
            </div>
            <Typography.ParagraphMd>
              Här är lite bakgrund om mig
            </Typography.ParagraphMd>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 py-6 gap-6" />
    </div>
  </Layout.Container>
</Animation.WithScrollFadeIn>
