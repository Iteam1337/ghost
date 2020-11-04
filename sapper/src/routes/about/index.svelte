<script context="module">
  import { API } from '../../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Pages.ByTags(['Medarbetare'])
  }
</script>

<script>
  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
  import Animation from '../../components/animation'
  import ContactBlock from '../../components/contact'
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
<svelte:head>
  <title>Iteam | Om oss</title>
</svelte:head>

<Layout.Base>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="w-full md:px-24">
        <Typography.H1>Vi är en digitaliseringsbyrå</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphMd>
            Genom att kombinera djupt tekniskt kunnande med stor nyfikenhet för
            användarens behov och respekt för affären skapar vi digitala
            tjänster och produkter som förändrar. Alltid i team och alltid
            agilt.
          </Typography.ParagraphMd>
        </div>
      </div>
    </Layout.Content>
    <Layout.Content>
      <div class="mb-12 sm:mt-12 sm:mb-24">
        <div
          class="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-6 px-8">
          <img
            class="h-auto object-cover md:mb-32"
            src="Kitchen-Monday-meeting-Lowres.png"
            alt="beautiful kitchen" />
          <img
            class="h-auto object-cover md:mt-32"
            src="Hopper-Interior-Lowres.png"
            alt="nice room" />
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
  <Animation.WithScrollFadeIn>
    <div class="bg-grey-dark text-white py-20 px-8 lg:px-32">
      <Layout.Content>
        <div class="grid grid-rows justify-center gap-24 lg:mb-12">
          {#each items as item}
            <div class="grid md:grid-cols-3 md:gap-16">
              <div class="md:col-span-1 ">
                <h3
                  class="m-heading font-medium sm:text-lg lg:text-2xl leading-tight tracking-wide mb-0">
                  {item.title}
                </h3>
              </div>
              <div class="md:col-span-2 lg:max-w-xl">
                <Typography.ParagraphMd>{item.body}</Typography.ParagraphMd>
              </div>
            </div>
          {/each}
        </div>
      </Layout.Content>
    </div>
  </Animation.WithScrollFadeIn>
  <Animation.WithScrollFadeIn>
    <div class="py-20 px-8 lg:px-32">
      <Layout.Content>
        <div class="text-center ">
          <Typography.H2>Vi som jobbar här</Typography.H2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-12">
          {#each coworkers as coworker}
            <div>
              <img class="object-cover" src={coworker.image} alt="feature" />
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
          {/each}
        </div>
      </Layout.Content>
      <div class="py-20 px-8 lg:px-32" />
    </div>
  </Animation.WithScrollFadeIn>
  <Animation.WithScrollFadeIn>
    <Layout.Container>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <img
          class="hidden lg:block object-cover"
          src={'looking-into-wall.png'}
          alt="looking into the wall" />
        <div
          class="flex flex-col px-16 py-16 bg-blue-marine text-white justify-center align-middle">
          <Typography.H2>
            Vi skapades ur en vilja att skapa värde, ha kul och göra något bra
            göra något bra
          </Typography.H2>
          <Typography.ParagraphMd>
            Vi är 25 utvecklare, team coacher och UX-designers. Vi drivs alla av
            viljan att skapa digitala lösningar som bidrar till en positiv
            föränding. Teknik ska vara tillgänglig för alla. Teknik ska göra
            gott.
          </Typography.ParagraphMd>
        </div>
      </div>
    </Layout.Container>
  </Animation.WithScrollFadeIn>
  <Animation.WithScrollFadeIn>
    <div class="bg-sand">
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
</Layout.Base>
