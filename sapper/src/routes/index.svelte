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
    <div
      class="flex flex-col md:flex-row-reverse justify-between px-8 md:px-16
        lg:px-32">
      <div class="w-1/2">
        <FeaturedImageIteam />
      </div>
      <div class="flex-initial max-w-md pt-8">
        <Typography.H1>Kod, kultur och strategi</Typography.H1>
        <Typography.ParagraphMd>
          Genom agilitet, användarfokus och i nära samarbete med våra kunder
          skapar vi digital innovation.
        </Typography.ParagraphMd>
        <div class="mt-8">
          <a href="/contact">
            <Animation.ButtonHover>
              <Buttons.Default>Starta ett projekt</Buttons.Default>
            </Animation.ButtonHover>
          </a>
        </div>
      </div>
    </div>
    <Layout.Content>
      <div class="flex flex-col lg:flex-row lg:flex-wrap" style="gap: 1rem;">
        {#each posts as post}
          <FeaturedPost {post} />
        {/each}
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Page>

<!-- Tjänster -->
<div
  class="bg-grey-dark text-center text-white py-20 sm:px-32 lg:px-20">
  <Animation.WithScrollFadeIn>
    <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
    <div class="mt-4 inline-block lg:w-1/2 text-center">
      <Typography.ParagraphMd>
        Vi erbjuder dig ett självgående team som utvecklar din produkt. Man säga
        att du hyr din egen startup. Det inspirerar din organisation att tänka på
        nya sätt och leder till en bättre affär.
      </Typography.ParagraphMd>
    </div>

    <div class="container mb-8 mt-16">
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
          <Buttons.Transparent>
            Alla tjänster
          </Buttons.Transparent>
        </a>
      </Animation.ButtonHover>
    </div>
  </Animation.WithScrollFadeIn>
</div>

<!-- Blocks -->
<Animation.WithScrollFadeIn threshold={0.5}>
  <div class="container lg:mx-auto my-10 lg:my-32 xl:my-40 px-8 sm:px-32">
    <div class="flex">
      <div class="flex-1 flex-grow-1 align-middle sm:py-2">
        <h1 class="text-4xl font-medium py-4 leading-10">Vi är Iteam</h1>
        <p class="font-light text-base">
          Vi är en digital byrå med teknik som spetskompetens. Vi är ett tätt
          sammansvetsat gäng som jobbar med moderna tekniker och metoder. Vi
          brinner för att hjälpa våra kunder att navigera i det digitala
          landskapet och dra nytta av digitaliseringens möjligheter.
        </p>
      </div>
      <div class="px-10 hidden lg:block mx-8">
        <img class="w-3/5 h-auto" src="TAC-2.jpg" alt="illustration" />
      </div>
    </div>
  </div>
</Animation.WithScrollFadeIn>

<Animation.WithScrollFadeIn threshold={0.5}>
  <div class="container lg:mx-auto px-8 sm:px-32">
    <div class="flex flex-row-reverse">
      <div class="flex-1 flex-grow-1 align-middle lg:py-16">
        <h1 class="text-4xl font-medium py-4 leading-10">
          Vi löser komplexa utmaningar
        </h1>
        <p class="font-light text-base">
          Vi kombinerar strategi, kod och kultur för att ta fram digitala
          lösningar som möter användarnas behov. Vi utvecklar inte bara appar.
          Vi tar ett helhetligt perspektiv på din affär för att skapa förändring
          på riktigt. Vi leder förändringsarbetet och hjälper er att
          digitalisera er affär.
        </p>
      </div>
      <div class="flex-1 hidden lg:block mx-2">
        <IteamA />
      </div>
    </div>
  </div>
</Animation.WithScrollFadeIn>

<Animation.WithScrollFadeIn threshold={0.5}>
  <div class="container lg:mx-auto my-10 lg:my-32 xl:my-40 px-8 sm:px-32">
    <div class="flex">
      <div class="flex-1 flex-grow-1 align-middle sm:py-2">
        <h1 class="text-4xl font-medium py-4 leading-10">
          Er digitala partner
        </h1>
        <p class="font-light text-base">
          Med ett långsiktigt engagemang hjälper vi er att navigera i den
          digitala världen. Vi omvandlar visioner till verklighet, utmanar
          föråldrade metoder och tillsammans utvecklar vi digitala tjänster som
          era kunder älskar att använda.
        </p>
      </div>
      <div class="px-10 hidden lg:block mx-8">
        <img
          class="w-64 h-auto"
          src="Monday-meeting-4-Lowres.jpg"
          alt="illustration" />
      </div>
    </div>
  </div>
</Animation.WithScrollFadeIn>

<ContactBlock.Default />
