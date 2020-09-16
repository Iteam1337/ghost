<script>
  import Strategy from '../assets/illustrations/strategy.svg'
  import Research from '../assets/illustrations/research.svg'
  import StandUp from '../assets/illustrations/stand-up.svg'
  import FlyinCar from '../assets/illustrations/flying-car.svg'
  import Links from '../components/links'
  import Typography from '../components/typography/'
  import ContactBanner from '../components/ContactBanner.svelte'
</script>

<!-- Tjänster -->
<svelte:head>
  <title>Iteam | Tjänster</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex flex-col px-8 sm:px-32 mb-24">
    <div class="flex-initial pt-8">
      <Typography.H1>Våra tjänster</Typography.H1>
      <p class="font-light text-lg">
        Vi är våra kunders digitala partner. Vi utvecklar innovativa digitala
        tjänster, mobila lösningar och API:er baserade på insikter om
        målgruppens behov, verksamhetens mål och tekniska möjligheter. Vi skapar
        digitala tjänster som dina användare faktiskt älskar.
      </p>

    </div>

  </div>

  <div class="grid grid-cols-2 grid-rows-2 gap-20 px-8 sm:px-32 mb-24">
    <div class="w-full md:w-full">
      <div class="mb-2">
        <Strategy />
      </div>
      <Typography.H4>Digital strategi</Typography.H4>
      <p class="text-base font-light">
        Förtydliga vad som är viktigt. Ert nuläge, er målbild och vad som
        urskiljer er från era konkurrenter. Definiera nyttan som lösningen ska
        bidra till.
      </p>
      <ul class="mt-4">
        <li>
          <a href="/services/strategy">• Teknisk utvärdering</a>
        </li>
        <li>
          <a href="/services/strategy">• Tjänstedesign</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Effektkartläggning</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Agil coaching</a>
          href
        </li>
      </ul>

    </div>
    <div class="w-full md:w-full">
      <div class="mb-2">
        <Research />
      </div>
      <Typography.H4>Research & insikter</Typography.H4>
      <p class="text-base font-light">
        Vägen för att skapa innovativa tjänster börjar med förståelse för dina
        kunders behov och teknisk genomförbarhet. Genom kvalitativa och
        kvantitativa metoder skaffar vi oss ständigt nya insikter.
      </p>
      <ul class="mt-4">
        <li>
          <a href="/services/strategy">• Intervjuer</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Användningstest</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Målgruppsanalys</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• A/B-tesning</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Snabb prototyping</a>
          href
        </li>
      </ul>

    </div>
    <div class="w-full md:w-full">
      <div class="mb-2">
        <StandUp />
      </div>
      <Typography.H4>Design</Typography.H4>
      <p class="text-base font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </p>
      <ul class="mt-4">
        <li>
          <a href="/services/strategy">• Designsprint</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Designstudio</a>
          href
        </li>
        <li>
          <a href="/services/strategy">• Designsystem</a>
          href
        </li>

      </ul>

    </div>
    <div class="w-full md:w-full">
      <div class="mb-2">
        <FlyinCar />
      </div>
      <Typography.H4>Teknik & Utveckling</Typography.H4>
      <p class="text-base font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </p>
      <ul class="mt-4">
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            • API
          </Links.ArrowTextLink>
        </li>
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            • AI
          </Links.ArrowTextLink>
        </li>
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            • Apputveckling
          </Links.ArrowTextLink>
        </li>
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            • Webbutveckling
          </Links.ArrowTextLink>
        </li>
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            • Digital plattform
          </Links.ArrowTextLink>
        </li>
      </ul>

    </div>
  </div>

  <div class="flex px-8 sm:px-32 mb-24">
    <div class="self-center w-3/4">
      <h1 class="text-4xl font-medium py-4 leading-10">Vi är Iteam</h1>
      <p class="font-light text-base">
        Vi är en digital byrå med teknik som spetskompetens. Vi är ett tätt
        sammansvetsat gäng som jobbar med moderna tekniker och metoder. Vi
        brinner för att hjälpa våra kunder att navigera i det digitala
        landskapet och dra nytta av digitaliseringens möjligheter.
      </p>
    </div>
    <div class="w-2/4 relative top-0 pb-16">

      <img
        class="h-auto w-3/4 relative top-0"
        src="TAC-2.jpg"
        alt="illustration" />

      <img
        class="h-auto absolute bottom-0 right-0 w-1/2"
        src="TAC-2.jpg"
        alt="illustration" />

    </div>
  </div>

</div>

<div class="bg-greenBg py-16">
  <div class="container px-8 sm:px-32">
    <div class="flex">
      <div class="flex-1 flex-grow-1 align-middle lg:pb-16">
        <h1 class="text-4xl font-medium py-4 leading-10">
          Våra dedikerade team löser utmaningar tillsammans med er
        </h1>
        <p class="font-light text-base">
          Vi utvecklar din tjänst tillsammans med dig. Det blir mycket bättre
          så. Vi hjälper dig att fokusera på det som är viktigt och som skapar
          värde för dig och dina kunder.
        </p>
      </div>
      <div class="flex-1 hidden lg:block mx-2" />
    </div>

  </div>

  <div class="container w-5/6 ml-auto mr-0 text-white relative top-0">
    <div
      class="bg-grey-medium w-5/6 ml-auto pr-8 sm:pr-32 lg:py-16 relative top-0">
      <div class="flex flex-row-reverse">
        <div class="w-4/5 ml-auto pl-8 sm:pl-32">

          <div>
            <h1 class="text-4xl font-medium py-4 leading-10">
              Vi gillar våra kunder
            </h1>
            <p class="font-light text-base">
              Vi vill bidra till en bättre värld på alla sätt vi kan. Därför
              väljer vi uppdrag med omsorg. Det betyder också att om vi jobbar
              ihop så tror vi 100% på din tjänst.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="container lg:mx-auto px-8 sm:px-32">
    <div class="flex flex-row-reverse">
      <div class="flex-1 flex-grow-1 align-middle lg:py-16">
        <h1 class="text-4xl font-medium py-4 leading-10">I team</h1>
        <p class="font-light text-base">
          Vi jobbar metodiskt för att skapa förståelse för användares behov och
          lösa komplexa problem. Alla är vi värdefulla var och en för sig och
          ännu mer ihop. Vi jobbar alltid tillsammans. Alltid i tvärfunktionella
          team. Alltid nära våra kunder, deras anställda och deras användare.
          Aldrig uthyrda. Aldrig ensamma.
        </p>
      </div>
      <div class="flex-1 hidden lg:block mx-2" />
    </div>
  </div>
</div>

<ContactBanner
  text="Nyfiken på vad vi kan göra tillsammans?"
  ctaText="Hör av dig" />
