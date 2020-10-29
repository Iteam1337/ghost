<script context="module">
  import { API } from '../services/api.js'
  import Typography from '../components/typography/'
  import ContactBlock from '../components/contact'
  import FeaturedPost from '../components/FeaturedPost.svelte'
  import FeaturedImageIteam from '../assets/featured-image-iteam.svg'
  import FeaturedImageCraneIteam from '../assets/featured_image_crane.svg'
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

<div class="pb-16">
  <Animation.WithScrollFadeIn>
    <div class="bg-grey-cod pb-16">
      <Layout.Content>
        <div
          class="flex flex-col text-white md:px-8 lg:px-0 lg:flex-row justify-between w-full">
          <div class="max-w-xl">
            <Typography.H1>Vi utvecklar framtidens tjänster</Typography.H1>
            <Typography.ParagraphLg>
              Genom agilitet, användarfokus och i nära samarbete med våra kunder
              skapar vi digital innovation.
            </Typography.ParagraphLg>

            <div class="mt-8">
              <a href="/case">
                <Animation.ButtonHover>
                  <Buttons.Default>Se våra case</Buttons.Default>
                </Animation.ButtonHover>
              </a>
            </div>
          </div>
          <div class="w-full max-w-md self-center mt-8 lg:mt-0 ">
            <FeaturedImageCraneIteam />
          </div>
        </div>
      </Layout.Content>
    </div>

    <Layout.Content>
      <div
        class="flex flex-col md:flex-row md:flex-wrap md:px-8 lg:px-0"
        style="gap: 1rem;">
        {#each posts as post}
          <FeaturedPost {post} />
        {/each}
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</div>

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
<div class="max-w-screen-lg mx-auto px-8 md:px-24 lg:px-0">
  <Animation.WithScrollFadeIn threshold={0.5}>
    <div class=" lg:mx-auto my-10 lg:my-32">
      <div class="flex justify-between">
        <div class="align-middle sm:py-2 max-w-lg">
          <h1 class="text-4xl font-medium py-6 leading-10">
            Vi är en digital byrå med teknik som spetskompetens
          </h1>
          <Typography.ParagraphMd>
            Vi är ett tätt sammansvetsat gäng som jobbar med moderna tekniker
            och metoder. Vi brinner för att hjälpa våra kunder att navigera i
            det digitala landskapet och dra nytta av digitaliseringens
            möjligheter.
          </Typography.ParagraphMd>
        </div>
        <div class="hidden lg:block">
          <img class="h-auto" src="TAC-2.jpg" alt="illustration" />
        </div>
      </div>
    </div>
  </Animation.WithScrollFadeIn>

  <Animation.WithScrollFadeIn threshold={0.5}>
    <div class="flex justify-between">
      <div class="hidden lg:block">
        <IteamA />
      </div>
      <div class="max-w-lg lg:pt-12">
        <h1 class="text-4xl font-medium py-6 leading-10">
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
    <div class=" lg:mx-auto my-10 lg:my-32 xl:my-40">
      <div class="flex justify-between">
        <div class="align-middle sm:py-2 max-w-lg">
          <h1 class="text-4xl font-medium py-6 leading-10">
            Er digitala partner
          </h1>
          <Typography.ParagraphMd>
            Med ett långsiktigt engagemang hjälper vi er att navigera i den
            digitala världen. Vi omvandlar visioner till verklighet, utmanar
            föråldrade metoder och tillsammans utvecklar vi digitala tjänster
            som era kunder älskar att använda.
          </Typography.ParagraphMd>
        </div>
        <div class="hidden lg:block">
          <img
            class="ml-auto w-4/5"
            src="Monday-meeting-4-Lowres.jpg"
            alt="illustration" />
        </div>
      </div>
    </div>
  </Animation.WithScrollFadeIn>
</div>

<ContactBlock.Default />
