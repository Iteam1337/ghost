<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Pages.ByTags(
      ['Medarbetare'],
      'all'
    )
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
  import Animation from '../../components/animation'
  import ContactBlock from '../../components/contact'
  import Meta from '../../components/Meta.svelte'
  export let pages

  const coworkers = pages.map(({ title, excerpt, feature_image: image }) => {
    const [role, phone, email] = excerpt.split('\n')
    return {
      title,
      role,
      phone,
      email,
      image,
    }
  })

  export let items = [
    {
      title: 'Teknik är vår spetskompetens',
      body:
        'Vi är experter på uteckling och vi är stolta över vår tekniska kompetens. Vi söker alltid efter den bästa tekniken. Den bästa metoden. There is a better way är vårt motto och vi håller oss alltid uppdaterade om det senaste inom vårt område. Vi anordnar även Lounge Hack, bidrar till open source och administrerar forumet Kodapor.',
    },
    {
      title: 'Användarna i fokus',
      body:
        'Nyckeln till framgångsrika digitala tjänster är att utgå från insikter om användarnas behov. Genom att jobba metodiskt med lärande kan vi utveckla tjänster som skapar nytta och som användare älskar.',
    },
    {
      title: 'Respekt för affären',
      body:
        'Vi utvecklar inte bara appar, API:er eller webbtjänster. Vi tar ett helhetsperspektiv på din affär och skapar förändring på riktigt. Genom förståelse och respekt för er nuvarande posiotion hjälper er att utforska nya möjlgheter att digitalisera er affär.',
    },
    {
      title: 'Tvärfunktionella team',
      body:
        'Vi jobbar alltid i små flexibla team. Vi är experter på att samarbeta och effektivt leverera kvalitet. Alla är vi värdefulla var och en för sig och ännu mer ihop. Vi jobbar alltid tillsammans. Alltid nära kunnden, deras anställda och användare.',
    },
  ]

  const iteamFacts = [
    { title: '1995', body: 'I över 25 år har vi fascinerats av ny teknik' },
    { title: '25', body: 'Medarbetare i Stockholm & Göteborg' },
    { title: '300', body: 'Kunder har vi hjälpt sedan starten' },
    { title: '30', body: 'Miljoner SEK i omsättning under 2019' },
  ]
</script>

<!-- Om oss -->
<Meta title="Iteam | Om oss" />

<Animation.WithScrollFadeIn>
  <Layout.Base>
    <Layout.Content>
      <div class="w-full md:px-24">
        <Typography.H1>Vi är en digitaliseringsbyrå</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphLg>
            Genom att kombinera djupt tekniskt kunnande med stor nyfikenhet för
            användarens behov och respekt för affären skapar vi digitala
            tjänster och produkter som förändrar. Alltid i team och alltid
            agilt.
          </Typography.ParagraphLg>
        </div>
      </div>
    </Layout.Content>
  </Layout.Base>
  <div class="px-8">
    <Layout.Content>
      <div class="mb-12 sm:mb-24">
        <div class="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-8">
          <img
            class="h-auto w-full object-cover md:mb-32"
            src="Kitchen-Monday-meeting-Lowres.png"
            alt="beautiful kitchen" />
          <img
            class="h-auto w-full object-cover md:mt-32"
            src="Hopper-Interior-Lowres.png"
            alt="nice room" />
        </div>
      </div>
    </Layout.Content>
  </div>
</Animation.WithScrollFadeIn>
<Animation.WithScrollFadeIn>
  <div class="bg-grey-dark text-white">
    <Layout.Base>
      <Layout.Content>
        <div class="grid grid-rows gap-24 lg:mb-12">
          {#each items as item}
            <div class="grid md:grid-cols-3 md:gap-16">
              <div class="md:col-span-1 ">
                <Typography.H2>{item.title}</Typography.H2>
              </div>
              <div class="md:col-span-2 lg:max-w-xl justify-self-center">
                <Typography.ParagraphMd>{item.body}</Typography.ParagraphMd>
              </div>
            </div>
          {/each}
        </div>
      </Layout.Content>
    </Layout.Base>
  </div>
</Animation.WithScrollFadeIn>
<Animation.WithScrollFadeIn>
  <Layout.Base>
    <Layout.Content>
      <div class="text-center ">
        <Typography.H2>Vi som jobbar här</Typography.H2>
      </div>
      <div
        class="grid gap-12 my-12"
        style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">
        {#each coworkers as coworker}
          <div class="grid" style="grid-template-rows: 284px max-content;">
            <img
              class="block w-full h-full object-cover"
              src={coworker.image}
              alt="feature" />

            <div>
              <p class="mt-4 font-medium">{coworker.title}</p>
              <p class="font-light">{coworker.role}</p>
              <p class="font-light">
                <a href="tel:{coworker.phone}">{coworker.phone}</a>
              </p>
              <p class="font-light text-sm leading-7">
                <a
                  class="underline"
                  href="mailto:{coworker.email}">{coworker.email}</a>
              </p>
            </div>
          </div>
        {/each}
      </div>
    </Layout.Content>
  </Layout.Base>
</Animation.WithScrollFadeIn>
<Animation.WithScrollFadeIn>
  <div class="grid grid-cols-1 lg:grid-cols-2 bg-blue-marine lg:h-banner">
    <div
      class="row-start-1 col-start-1 hidden lg:block bg-cover bg-top"
      style="background-image: url(looking-into-wall.png);"
      title="looking into the wall" />
    <div class="col-span-full relative row-start-1 self-center px-8">
      <div class="py-16 max-w-screen-xl mx-auto w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div
            class="col-start-2 flex flex-col py-16 lg:ml-16 text-white gap-8">
            <Typography.H2>
              Vi skapades ur en vilja att skapa värde, ha kul och göra något bra
              göra något bra
            </Typography.H2>
            <Typography.ParagraphMd>
              Vi är 25 utvecklare, team coacher och UX-designers. Vi drivs alla
              av viljan att skapa digitala lösningar som bidrar till en positiv
              föränding. Teknik ska vara tillgänglig för alla. Teknik ska göra
              gott.
            </Typography.ParagraphMd>
          </div>
        </div>
      </div>
    </div>
  </div>
</Animation.WithScrollFadeIn>
<Animation.WithScrollFadeIn>
  <div class="bg-sand px-8">
    <Layout.Content>
      <div class="pb-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {#each iteamFacts as fact}
          <div class="text-center">
            <div class="text-superblue">
              <Typography.H3 fontWeight="font-black">
                {fact.title}
              </Typography.H3>
            </div>
            <Typography.ParagraphMd>{fact.body}</Typography.ParagraphMd>
          </div>
        {/each}
      </div>
    </Layout.Content>
  </div>
</Animation.WithScrollFadeIn>
<ContactBlock.Default />
