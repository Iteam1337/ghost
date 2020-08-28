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
  <div class="flex items-center w-full">
    <div class="w-1/4">
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
    <div class="w-1/4">
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
    <div class="w-1/4">
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
    <div class="w-1/4">
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
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
    md:mx-auto space-x-3" />
</div>
