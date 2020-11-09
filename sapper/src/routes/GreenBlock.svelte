<script>
  import Layout from '../components/layout'
  import Animation from '../components/animation'
  import Typography from '../components/typography'

  const customers = ['trr', 'tsab', 'vimla', 'tj', 'nh', 'gr']
</script>

<div class="bg-green bg-opacity-30">
  <Animation.WithScrollFadeIn>
    <Layout.Base>
      <Layout.Content>
        <div class="flex flex-col">
          <div class="grid grid-cols-2">
            <div>
              <h3 class="text-4xl font-medium mb-6 leading-10">
                Våra dedikerade team löser utmaningar tillsammans med er
              </h3>
              <Typography.ParagraphMd>
                Vi utvecklar din tjänst tillsammans med dig. Det blir mycket
                bättre så. Vi hjälper dig att fokusera på det som är viktigt och
                som skapar värde för dig och dina kunder.
              </Typography.ParagraphMd>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout.Base>
    <div class="flex flex-row ">
      <div class="grid grid-cols-12">
        <div class="grid col-start-4hidden md:block max-w-xl">
          <img
            class="h-auto"
            src="Radu-Amir-working-Lowres.jpg"
            alt="illustration" />
        </div>
        <div
          class="flex flex-col w-9/12 bg-grey-dark text-white p-20 justify-center">
          <div class="w-3/6">
            <h3 class="text-4xl font-medium mb-6 leading-10">
              Vi gillar våra kunder
            </h3>
            <Typography.ParagraphMd>
              Vi vill bidra till en bättre värld på alla sätt vi kan. Därför
              väljer vi uppdrag med omsorg. Det betyder också att om vi jobbar
              ihop så tror vi 100% på din tjänst.
            </Typography.ParagraphMd>
            <div class="grid grid-cols-3 items-center">
              {#each customers as customer}
                <img
                  class="h-auto"
                  src="{customer}.png"
                  alt="customer {customer}" />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Layout.Base>
      <Layout.Content>
        <div class="grid grid-cols-2">
          <div class="col-start-2">
            <h3 class="text-4xl font-medium mb-6 leading-10">
              Långsiktigt engagemang
            </h3>
            <Typography.ParagraphMd>
              Med ett långsiktigt engagemang hjälper vi er att navigera i den
              digitala världen. Vi omvandlar visioner till verklighet, utmanar
              föråldrade metoder och tillsammans utvecklar vi digitala tjänster
              som era kunder älskar att använda.
            </Typography.ParagraphMd>
          </div>
        </div>
      </Layout.Content>
    </Layout.Base>
  </Animation.WithScrollFadeIn>
</div>
