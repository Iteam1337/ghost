<script context="module">
  import { API } from '../services/api.js'
  import Typography from '../components/typography/'
  import ContactBlock from '../components/contact'
  import FeaturedPost from '../components/FeaturedPost.svelte'
  import FeaturedImageIteam from '../assets/featured-image-iteam.svg'
  import Card from '../components/Card.svelte'
  import BeakerSymbol from '../assets/illustrations/beakers.svg'
  import EmojiSymbol from '../assets/illustrations/emoji.svg'
  import MagnifyingGlassSymbol from '../assets/illustrations/magnifying-glass.svg'
  import VRGlassesSymbol from '../assets/illustrations/vr-glasses.svg'
  import IteamA from '../assets/illustrations/a.svg'
  import Layout from '../components/layout'
  import Buttons from '../components/buttons'
  import Animation from '../components/animation'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session })
      .Posts.ByTags(['blog', 'case'])
      .then(({ posts }) => ({ posts }))
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Iteam - There is a Better Way</title>
</svelte:head>

<Layout.Page>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="flex flex-col lg:flex-row justify-between w-full md:px-24">
        <div class="max-w-xl">
          <Typography.H1>Vi utvecklar framtidens tjänster</Typography.H1>
          <Typography.ParagraphLg>
            Genom agilitet, användarfokus och i nära samarbete med våra kunder
            skapar vi digital innovation.
          </Typography.ParagraphLg>

          <div class="mt-8">
            <a href="/contact">
              <Animation.ButtonHover>
                <Buttons.Default>Starta ett projekt</Buttons.Default>
              </Animation.ButtonHover>
            </a>
          </div>
        </div>
        <div class="w-full max-w-md self-center mt-8 lg:mt-0 ">
          <FeaturedImageIteam />
        </div>
      </div>
    </Layout.Content>
    <Layout.Content>
      <div class="py-6">
        <div class="flex flex-col md:flex-row md:flex-wrap gap-6">
          {#each posts as post}
            <FeaturedPost {post} />
          {/each}
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Page>

<!-- Tjänster -->
<div class="bg-grey-dark text-center text-white py-20 px-8 lg:px-20">
  <Animation.WithScrollFadeIn>
    <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
    <div class="mt-4 inline-block max-w-2xl text-center">
      <Typography.ParagraphMd>
        Vi erbjuder dig ett självgående team som utvecklar din produkt. Man kan
        säga att du hyr din egen startup. Det inspirerar din organisation att
        tänka på nya sätt och leder till en bättre affär.
      </Typography.ParagraphMd>
    </div>

    <div class="mb-8 mt-16">
      <div class="flex flex-wrap justify-center px-8 md:px-12 gap-4">
        <Card
          symbol={BeakerSymbol}
          title={'User research'}
          text={'Systematiskt lärande och experimenterande'} />
        <Card
          symbol={MagnifyingGlassSymbol}
          title={'Digital strategi'}
          text={'Lorem ipsum dolor sit meow meow meow.'} />
        <Card
          symbol={EmojiSymbol}
          title={'Apputveckling'}
          text={'Lorem ipsum dolor sit meow meow meow.'} />
        <Card
          symbol={VRGlassesSymbol}
          title={'Systemutveckling'}
          text={'Lorem ipsum dolor sit meow meow meow.'} />
        <Card
          symbol={VRGlassesSymbol}
          title={'Machine Learning'}
          text={'Lorem ipsum dolor sit meow meow meow.'} />
        <Card
          symbol={VRGlassesSymbol}
          title={'Forskning'}
          text={'Lorem ipsum dolor sit meow meow meow.'} />
      </div>
    </div>
    <div class="mt-12">
      <Animation.ButtonHover transparentButton>
        <a href="/services">
          <Buttons.Transparent>Alla tjänster</Buttons.Transparent>
        </a>
      </Animation.ButtonHover>
    </div>
  </Animation.WithScrollFadeIn>
</div>

<!-- Blocks -->
<div class="max-w-screen-xl mx-auto px-8 xl:px-0 py-24">
  <div class="flex flex-col gap-16">
    <Animation.WithScrollFadeIn threshold={0.5}>
        <div class="flex justify-between items-center gap-8">
          <div class="align-middle max-w-md lg:max-w-lg">
            <h1 class="text-4xl font-medium mb-6 leading-10">
              Vi är en digital byrå med teknik som spetskompetens
            </h1>
            <Typography.ParagraphMd>
              Vi är ett tätt sammansvetsat gäng som jobbar med moderna tekniker
              och metoder. Vi brinner för att hjälpa våra kunder att navigera i
              det digitala landskapet och dra nytta av digitaliseringens
              möjligheter.
            </Typography.ParagraphMd>
          </div>
          <div class="hidden md:block max-w-xl">
            <img class="h-auto" src="TAC-2.jpg" alt="illustration" />
          </div>
        </div>
    </Animation.WithScrollFadeIn>
    <Animation.WithScrollFadeIn threshold={0.5}>
      <div class="flex justify-between items-center gap-8">
        <div class="hidden md:block max-w-xl">
          <IteamA />
        </div>
        <div class="max-w-md lg:max-w-lg">
          <h1 class="text-4xl font-medium mb-6 leading-10 ">
            Vi löser komplexa utmaningar
          </h1>
          <Typography.ParagraphMd>
            Vi kombinerar strategi, kod och kultur för att ta fram digitala
            lösningar som möter användarnas behov. Vi utvecklar inte bara appar.
            Vi tar ett helhetligt perspektiv på din affär för att skapa förändring
            på riktigt. Vi leder förändringsarbetet och hjälper er att
            digitalisera er affär.
          </Typography.ParagraphMd>
        </div>
      </div>
    </Animation.WithScrollFadeIn>
    <Animation.WithScrollFadeIn threshold={0.5}>
      <div class="flex justify-between items-center gap-8">
        <div class="align-middle max-w-md lg:max-w-lg">
          <h1 class="text-4xl font-medium mb-6 leading-10">
            Er digitala partner
          </h1>
          <Typography.ParagraphMd>
            Med ett långsiktigt engagemang hjälper vi er att navigera i den
            digitala världen. Vi omvandlar visioner till verklighet, utmanar
            föråldrade metoder och tillsammans utvecklar vi digitala tjänster
            som era kunder älskar att använda.
          </Typography.ParagraphMd>
        </div>
        <div class="hidden md:block max-w-xl">
          <img
            class="ml-auto"
            src="Monday-meeting-4-Lowres.jpg"
            alt="illustration" />
        </div>
      </div>
    </Animation.WithScrollFadeIn>
  </div>
</div>

<ContactBlock.Default />
