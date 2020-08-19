<script context="module">
  import { API } from '../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Posts.List()
  }
</script>

<script>
  export let posts
</script>

<style>
  a,
  a:visited {
    font-weight: 500;
    color: var(--cornflower);
  }

  div.services {
    background-color: var(--dark-grey);
  }

  div.service {
    background-color: var(--medium-dark-grey);
  }
</style>

<svelte:head>
  <title>Iteam Solutions</title>
</svelte:head>

<div class="lg:container lg:mx-auto py-20">
  <div class="flex px-20 max-w-3xl">
    <div class="flex-initial">
      <h1 class="text-4xl font-medium">Kod, kultur och strategi</h1>
      <p class="font-light text-sm">
        Genom agilitet, användarfokus och i nära samarbete med våra kunder
        skapar vi digital innovation.
      </p>
      <p class="font-medium text-sm">
        <a href="/about">Så här går det till &rightarrow;</a>
      </p>
    </div>
    <div class="flex-initial text-right">TODO: Illustrationer</div>
  </div>

  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
    md:mx-auto space-x-3">
    {#each posts as post}
      <div class="shadow-md bg-white-400 px-4 py-2 m-2">
        <img src={post.feature_image} alt="feature" />
        <h2>{post.title}</h2>
      </div>
    {/each}
  </div>
</div>

<div class="services w-screen text-center text-white py-20">
  <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
  <p class="text-base font-light tracking-wider">
    Lorem meow ipsum purr dolor meow meow fräs.
  </p>

  <div class="flex my-20 items-center md:container md:mx-auto space-x-3">
    <div class="service flex-shrink-1 rounded-lg px-5 flex-col justify-center">
      <img src="broken.png" alt="illustration" width="100" class="my-8" />

      <h3 class="text-xl font-medium tracking-wide">User research</h3>
      <p class="px-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-shrink-1 rounded-lg px-5">
      <img
        src="broken.png"
        alt="illustration"
        width="100"
        class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Digital strategi</h3>
      <p class="px-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-shrink-1 rounded-lg px-5">
      <img
        src="broken.png"
        alt="illustration"
        width="100"
        class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Apputveckling</h3>
      <p class="px-5 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-shrink-1 rounded-lg px-5">
      <img
        src="broken.png"
        alt="illustration"
        width="100"
        class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Systemutveckling</h3>
      <p class="px-5 text-base font-light tracking-wider">
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
