<script>
  import Strategy from '../assets/illustrations/strategy.svg'
  import Research from '../assets/illustrations/research.svg'
  import StandUp from '../assets/illustrations/stand-up.svg'
  import FlyinCar from '../assets/illustrations/flying-car.svg'
  import Links from '../components/links'
  import Typography from '../components/typography/'
</script>

<!-- Tjänster -->
<svelte:head>
  <title>Iteam | Tjänster</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div class="flex flex-col px-8 sm:px-32 mb-24">
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Våra tjänster</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        Vi är våra kunders digitala partner. Vi utvecklar innovativa digitala
        tjänster, mobila lösningar och API:er baserade på insikter om
        målgruppens behov, verksamhetens mål och tekniska möjligheter. Vi skapar
        digitala tjänster som dina användare faktiskt älskar.
      </Typography.BaseParagraph>

    </div>

  </div>
  <div class="flex flex-col md:flex-row items-center px-8 mb:px-0">
    <div class="w-full md:w-1/4 sm:mr-4 xl:mr-24 mb-8">
      <div class="mb-2">
        <Strategy />
      </div>
      <Typography.H4>Strategi</Typography.H4>
      <Typography.BaseParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/services/strategy">
        Läs mer om strategi
      </Links.ArrowTextLink>
    </div>
    <div class="w-full md:w-1/4 sm:mr-4 xl:mr-24 mb-8">
      <div class="mb-2">
        <Research />
      </div>
      <Typography.H4>Research</Typography.H4>
      <Typography.BaseParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/services/strategy">
        Läs mer om research
      </Links.ArrowTextLink>
    </div>
    <div class="w-full md:w-1/4 sm:mr-4 xl:mr-24 mb-8">
      <div class="mb-2">
        <StandUp />
      </div>
      <Typography.H4>Design</Typography.H4>
      <Typography.BaseParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/services/strategy">
        Läs mer om design
      </Links.ArrowTextLink>
    </div>
    <div class="w-full md:w-1/4 mb-8">
      <div class="mb-2">
        <FlyinCar />
      </div>
      <Typography.H4>Tekning & Utveckling</Typography.H4>
      <Typography.BaseParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        varius sed quis malesuada dui proin gravida.
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/services/strategy">
        Läs mer om teknik & utveckling
      </Links.ArrowTextLink>
    </div>
  </div>
</div>

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

<div class="bg-greenBg h-screen">
  <div class="container lg:mx-auto my-10 lg:my-32 xl:my-40 px-8 sm:px-32">
    <div class="flex">
      <div class="flex-1 flex-grow-1 align-middle sm:py-2">
        <h1 class="text-4xl font-medium py-4 leading-10">
          Våra dedikerade team löser utmaningar tillsammans med er
        </h1>
        <p class="font-light text-base">
          Vi utvecklar din tjänst tillsammans med dig. Det blir mycket bättre
          så. Vi hjälper dig att fokusera på det som är viktigt och som skapar
          värde för dig och dina kunder.
        </p>
      </div>
      <div class="px-10 hidden lg:block mx-8">
        <img class="w-3/5 h-auto" src="TAC-2.jpg" alt="illustration" />
      </div>
    </div>
  </div>
</div>
