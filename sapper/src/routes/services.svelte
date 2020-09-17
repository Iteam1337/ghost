<script>
  import Strategy from '../assets/illustrations/strategy.svg'
  import Research from '../assets/illustrations/research.svg'
  import StandUp from '../assets/illustrations/stand-up.svg'
  import FlyinCar from '../assets/illustrations/flying-car.svg'
  import Links from '../components/links'
  import Section from '../components/section'
  import Typography from '../components/typography/'
  import ContactBanner from '../components/ContactBanner.svelte'
  import WithScrollFadeIn from '../components/WithScrollFadeIn.svelte'
  import SeviceInfo from '../components/SeviceInfo.svelte'
</script>

<!-- Tjänster -->
<svelte:head>
  <title>Iteam | Tjänster</title>
</svelte:head>

<div class="container py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <WithScrollFadeIn>
    <div class="flex flex-col px-8 sm:px-32 mb-24">
      <div class="flex-initial pt-8">
        <Typography.H1>Våra tjänster</Typography.H1>
        <p class="font-light text-lg">
          Vi är våra kunders digitala partner. Vi utvecklar innovativa digitala
          tjänster, mobila lösningar och API:er baserade på insikter om
          målgruppens behov, verksamhetens mål och tekniska möjligheter. Vi
          skapar digitala tjänster som dina användare faktiskt älskar.
        </p>

      </div>
    </div>
  </WithScrollFadeIn>

  <div class="grid md:grid-cols-2 grid-rows-2 gap-20 px-8 sm:px-32 mb-24">

    <SeviceInfo
      title="Digital strategi"
      description="Förtydliga vad som är viktigt. Ert nuläge, er målbild och vad
      som urskiljer er från era konkurrenter. Definiera nyttan som lösningen ska
      bidra till."
      links={[' Teknisk utvärdering', 'Tjänstedesign', 'Effektkartläggning', 'Agil coaching']}>
      <Strategy />
    </SeviceInfo>

    <SeviceInfo
      title="Research & insikter"
      description="Vägen för att skapa innovativa tjänster börjar med förståelse
      för dina kunders behov och teknisk genomförbarhet. Genom kvalitativa och
      kvantitativa metoder skaffar vi oss ständigt nya insikter."
      links={['Intervjuer', 'Användningstest', 'Målgruppsanalys', 'A/B-tesning', 'Snabb prototyping']}>
      <Research />
    </SeviceInfo>

    <SeviceInfo
      title="Design"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      egestas varius sed quis malesuada dui proin gravida."
      links={['Designsprint', 'Designstudio', 'Designsystem']}>
      <StandUp />
    </SeviceInfo>

    <SeviceInfo
      title="Teknik & Utveckling"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      egestas varius sed quis malesuada dui proin gravida."
      links={['API', 'AI', 'Apputveckling', 'Webbutveckling', 'Digital plattform']}>
      <FlyinCar />
    </SeviceInfo>

  </div>
  <Section.TextWithTwoPictures
    title="Vi är Iteam"
    text="Vi är en digital byrå med teknik som spetskompetens. Vi är ett tätt
    sammansvetsat gäng som jobbar med moderna tekniker och metoder. Vi brinner
    för att hjälpa våra kunder att navigera i det digitala landskapet och dra
    nytta av digitaliseringens möjligheter."
    imageOne="Neon-sign-Lowres.jpg"
    imageTwo="Hopper-Interior-Lowres.jpg" />

</div>

<div class="bg-greenBg py-20">
  <div class="container px-8 sm:px-32 pb-20">
    <WithScrollFadeIn>
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
    </WithScrollFadeIn>
  </div>

  <div
    class="container w-full lg:w-5/6 ml-auto mr-0 xxl:mr-auto text-white
    relative top-0 pb-16 lg:pb-48">
    <WithScrollFadeIn>
      <div
        class="bg-grey-medium w-full lg:w-5/6 ml-auto pr-8 sm:pr-32 py-8
        lg:py-16 relative top-0">
        <div class="flex flex-row-reverse">
          <div class="w-full lg:w-4/5 ml-auto pl-8 sm:pl-32">
            <div>
              <div class="mb-16">
                <h1 class="text-4xl font-medium py-4 leading-10">
                  Vi gillar våra kunder
                </h1>
                <p class="font-light text-base pb-4">
                  Vi vill bidra till en bättre värld på alla sätt vi kan. Därför
                  väljer vi uppdrag med omsorg. Det betyder också att om vi
                  jobbar ihop så tror vi 100% på din tjänst.
                </p>
                <Links.ArrowTextLink to="/case" linkColor="text-white">
                  Se våra case
                </Links.ArrowTextLink>
              </div>
              <div
                class="grid grid-cols-3 grid-rows-2 justify-items-center
                items-center gap-8">
                <img src="trr.svg" alt="trr logo" />
                <img src="taxi_stockholm.svg" alt="taxi stockholm logo" />
                <img src="vimla.svg" alt="vimla logo" />
                <img src="tjejjouren.svg" alt="tjejjouren logo" />
                <img src="nectarine.svg" alt="nectarine logo" />
                <img
                  src="goteborgs_regionen.svg"
                  alt="göteborgs regionen logo" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <img
        class="absolute bottom-0 left-0 w-2/6 xxl:w-1/4 hidden lg:block"
        src="Radu-Amir-working-Lowres.jpg"
        alt="co-workers" />
    </WithScrollFadeIn>

  </div>

  <div class="container lg:mx-auto px-8 sm:px-32">
    <WithScrollFadeIn>
      <div class="flex flex-row-reverse">
        <div class="flex-1 flex-grow-1 align-middle lg:pb-16">
          <h1 class="text-4xl font-medium py-4 leading-10">I team</h1>
          <p class="font-light text-base">
            Vi jobbar metodiskt för att skapa förståelse för användares behov
            och lösa komplexa problem. Alla är vi värdefulla var och en för sig
            och ännu mer ihop. Vi jobbar alltid tillsammans. Alltid i
            tvärfunktionella team. Alltid nära våra kunder, deras anställda och
            deras användare. Aldrig uthyrda. Aldrig ensamma.
          </p>
        </div>
        <div class="flex-1 hidden lg:block mx-2" />
      </div>
    </WithScrollFadeIn>
  </div>
</div>

<ContactBanner
  text="Nyfiken på vad vi kan göra tillsammans?"
  ctaText="Hör av dig" />
