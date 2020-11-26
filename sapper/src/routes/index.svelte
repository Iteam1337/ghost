<script context="module">
  import { API } from '../services/api.js'
  import Typography from '../components/typography/'
  import ContactBlock from '../components/contact'
  import FeaturedPost from '../components/FeaturedPost.svelte'
  import FeaturedImageCraneIteam from '../assets/featured_image_crane.svg'
  import Card from '../components/Card.svelte'
  import BeakerSymbol from '../assets/illustrations/beakers.svg'
  import EmojiSymbol from '../assets/illustrations/emoji.svg'
  import MagnifyingGlassSymbol from '../assets/illustrations/magnifying-glass.svg'
  import VRGlassesSymbol from '../assets/illustrations/vr-glasses.svg'
  import IteamA from '../assets/illustrations/a.svg'
  import Buttons from '../components/buttons'
  import Animation from '../components/animation'
  import GreenBlock from './GreenBlock.svelte'
  import Layout from '../components/layout'
  import Meta from '../components/Meta.svelte'

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
  <style>
    body {
      background-color: #fcfaf6;
    }
  </style>
</svelte:head>

<Meta title="Iteam - There is a Better Way" />

<Layout.Container background={'bg-grey-cod'}>
  <div
    class="flex flex-col-reverse text-white lg:flex-row justify-between w-full items-center">
    <div class="lg:max-w-xl mt-12 lg:mt-0">
      <Typography.H1>Vi utvecklar framtidens tjänster</Typography.H1>
      <Typography.ParagraphLg>
        Iteam är en digitaliseringsbyrå som utvecklar digitala tjänster för en
        hållbar framtid
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
</Layout.Container>
<Animation.WithScrollFadeIn>
  <Layout.Container>
    <div class="flex flex-col md:flex-row md:flex-wrap gap-6">
      {#each posts as post}
        <FeaturedPost {post} />
      {/each}
    </div>
  </Layout.Container>
</Animation.WithScrollFadeIn>

<!-- Tjänster -->
<Animation.WithScrollFadeIn>
  <Layout.Container background={'bg-grey-dark'}>
    <div class="text-center text-white">
      <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
      <div class="mt-4 inline-block max-w-2xl text-center">
        <Typography.ParagraphMd>
          Vi erbjuder dig ett självgående team som utvecklar din produkt. Man
          kan säga att du hyr din egen startup. Det inspirerar din organisation
          att tänka på nya sätt och leder till en bättre affär.
        </Typography.ParagraphMd>
      </div>

      <div class="flex flex-wrap mt-16 justify-center gap-4">
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
  </Layout.Container>
</Animation.WithScrollFadeIn>

<!-- Blocks -->
<Layout.Container>
  <div class="flex flex-col gap-16">
    <Animation.WithScrollFadeIn threshold={0.5}>
      <div class="flex justify-between items-center gap-8">
        <div class="align-middle max-w-md lg:max-w-lg">
          <h3 class="text-4xl font-medium mb-6 leading-10">
            Vi skapar nytta genom utveckling
          </h3>
          <Typography.ParagraphMd>
            Vi är 25 utvecklare, Team Coacher och UX-designers. Vi hjälper dig
            att ta fram digitala lösningar som möter användarnas behov. Vi
            utvecklar inte bara appar. Vi tar ett helhetsperspektiv på din affär
            för att skapa värde på riktigt. Vi leder förändringsarbetet och
            hjälper er att digitalisera er affär.
          </Typography.ParagraphMd>
        </div>
        <div class="hidden md:block max-w-xl">
          <img
            class="h-auto"
            src="Mikael-Nisse-Mimmi-Lowres.jpg"
            alt="illustration" />
        </div>
      </div>
    </Animation.WithScrollFadeIn>
    <Animation.WithScrollFadeIn threshold={0.5}>
      <div class="flex justify-between items-center gap-8">
        <div class="hidden md:block max-w-xl">
          <IteamA />
        </div>
        <div class="max-w-md lg:max-w-lg">
          <h3 class="text-4xl font-medium mb-6 leading-10 ">
            Startuptänk och snabbrörlighet
          </h3>
          <Typography.ParagraphMd>
            Det räcker inte att utveckala tjänster och hoppas att dina användare
            är nöjda. Du behöver en process som hjälper dig att hitta rätt.
            Genom smidig utveckling i korta iterativa cykler testar vi hypoteser
            för att undersöka vad som fungerar bäst för användarna och
            verksamheten.
          </Typography.ParagraphMd>
        </div>
      </div>
    </Animation.WithScrollFadeIn>
    <Animation.WithScrollFadeIn threshold={0.5}>
      <div class="flex justify-between items-center gap-8">
        <div class="align-middle max-w-md lg:max-w-lg">
          <h3 class="text-4xl font-medium mb-6 leading-10">
            Du blir en del av oss
          </h3>
          <Typography.ParagraphMd>
            Inför varje nytt projekt plockar vi ihop de kompetenserna du
            behöver. Det är när personer med olika kompetenser och varierande
            bakgrunder samarbetar i tvärfunktionella team som innovation
            verkligen sker. Därför är våra kunder självklara medlemmar i våra
            team och vi jobbar tillsammans mot våra gemensamma mål.
          </Typography.ParagraphMd>
        </div>
        <div class="hidden md:block max-w-xl">
          <img
            class="ml-auto"
            src="Dennis-Radu-Amir-Lowres.jpg"
            alt="illustration" />
        </div>
      </div>
    </Animation.WithScrollFadeIn>
  </div>
</Layout.Container>

<GreenBlock />

<ContactBlock.Default />
