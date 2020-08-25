<script context="module">
  import { API } from '../services/api.js'
  import Typography from '../components/typography/'
  import ContactBanner from '../components/ContactBanner.svelte'
  import FeaturedPosts from '../components/FeaturedPosts.svelte'
  import Links from '../components/links'
  import FeaturedImageIteam from '../assets/featured-image-iteam.svg'

  import BeakerSymbol from '../assets/illustrations/beakers.svg'
  import EmojiSymbol from '../assets/illustrations/emoji.svg'
  import MagnifyingGlassSymbol from '../assets/illustrations/magnifying-glass.svg'
  import VRGlassesSymbol from '../assets/illustrations/vr-glasses.svg'

  export async function preload(_page, session) {
    return API({ fetch: this.fetch, session }).Posts.ByTags([
      'erbjudande',
      'case',
    ])
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Iteam - There is a Better Way</title>
</svelte:head>

<div class="container py-10 sm:py-24">
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <FeaturedImageIteam />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Kod, kultur och strategi</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        Genom agilitet, användarfokus och i nära samarbete med våra kunder
        skapar vi digital innovation.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/about">Så här går det till</Links.ArrowTextLink>
    </div>

  </div>
  <div class="px-8 md:px-16 lg:px-32 pt-32">
    <FeaturedPosts {posts} />
  </div>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
    md:mx-auto space-x-3" />
</div>

<div class="bg-grey-medium w-screen text-center text-white py-20">
  <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
  <p class="text-base font-light tracking-wider">
    Lorem meow ipsum purr dolor meow meow fräs.
  </p>

  <div
    class="flex my-20 items-center items-stretch md:container md:mx-auto
    space-x-3">
    <div
      class="bg-grey-dark flex-shrink-1 rounded-lg px-5 flex-col justify-center">
      <div class="flex justify-center py-8">
        <BeakerSymbol />
      </div>

      <h3 class="text-xl font-medium tracking-wide">User research</h3>
      <p class="px-5 py-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="bg-grey-dark flex-shrink-1 rounded-lg px-5">
      <div class="flex justify-center py-8">
        <MagnifyingGlassSymbol />
      </div>

      <h3 class="text-xl font-medium tracking-wide">Digital strategi</h3>
      <p class="px-5 py-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="bg-grey-dark flex-shrink-1 rounded-lg px-5">
      <div class="flex justify-center py-8">
        <EmojiSymbol />
      </div>

      <h3 class="text-xl font-medium tracking-wide">Apputveckling</h3>
      <p class="px-5 py-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="bg-grey-dark flex-shrink-1 rounded-lg px-5">
      <div class="flex justify-center py-8">
        <VRGlassesSymbol />
      </div>

      <h3 class="text-xl font-medium tracking-wide">Systemutveckling</h3>
      <p class="px-5 py-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
  </div>
  <a class="border px-10 py-5 rounded-lg text-white" href="/services">
    Alla tjänster
  </a>
</div>

<div class="lg:container lg:mx-auto py-20 px-20">
  <div class="flex justify-around max-w-3xl">
    <div class="">
      <h1 class="text-4xl font-medium">Vi är Iteam</h1>
      <p class="font-light text-base">
        Vi är en digital byrå med teknik som spetskompetens. Vi är ett tätt
        sammansvetsat gäng som jobbar med moderna tekniker och metoder. Vi
        brinner för att hjälpa våra kunder att navigera i det digitala
        landskapet och dra nytta av digitaliseringens möjligheter.
      </p>
    </div>
    <div class="px-10">
      <img class="" src="Commodore-Joystick-Lowres.jpg" alt="commodore" />
    </div>
  </div>
</div>

<div class="lg:container lg:mx-auto py-20 px-20">
  <div class="flex justify-around max-w-3xl">
    <div class="px-10">
      <img class="" src="Neon-Sign-Lowres.jpg" alt="commodore" />
    </div>
    <div class="">
      <h1 class="text-4xl font-medium">Vi löser komplexa utmaningar</h1>
      <p class="font-light text-base">
        Vi kombinerar strategi, kod och kultur för att ta fram digitala
        lösningar som möter användarnas behov. Vi utvecklar inte bara appar. Vi
        tar ett helhetligt perspektiv på din affär för att skapa förändring på
        riktigt. Vi leder förändringsarbetet och hjälper er att digitalisera er
        affär.
      </p>
    </div>
  </div>
</div>

<div class="lg:container lg:mx-auto py-20 px-20">
  <div class="flex justify-around max-w-lg">
    <div class="">
      <h1 class="text-4xl font-medium">Er digitala partner</h1>
      <p class="font-light text-base">
        Med ett långsiktigt engagemang hjälper vi er att navigera i den digitala
        världen. Vi omvandlar visioner till verklighet, utmanar föråldrade
        metoder och tillsammans utvecklar vi digitala tjänster som era kunder
        älskar att använda.
      </p>
    </div>
    <div class="px-10" />
  </div>
</div>

<ContactBanner />
