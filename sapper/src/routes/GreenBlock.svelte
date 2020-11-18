<script>
  import Layout from '../components/layout'
  import Animation from '../components/animation'
  import Typography from '../components/typography'

  const customers = ['trr', 'tsab', 'vimla', 'tj', 'nh', 'gr']
</script>

<Animation.WithScrollFadeIn>
  <div class="bg-green bg-opacity-30">
    <Layout.Base>
      <Layout.Content>
        <div class="flex flex-col">
          <div class="grid md:grid-cols-2">
            <h3
              class="text-4xl font-medium mb-6 leading-10 max-w-md lg:max-w-xl">
              Våra dedikerade team löser utmaningar tillsammans med er
            </h3>
            <Typography.ParagraphMd>
              Vi utvecklar din tjänst tillsammans med dig. Det blir mycket
              bättre så. Vi hjälper dig att fokusera på det som är viktigt och
              som skapar värde för dig och dina kunder.
            </Typography.ParagraphMd>
          </div>
        </div>
      </Layout.Content>
    </Layout.Base>
    <div class="flex flex-row">
      <Layout.Content>
        <div class="grid grid-cols-12 grid-rows-6 w-full">
          <div
            class="grid col-start-1 col-end-6 row-start-2 row-span-full hidden md:block max-w-xl  z-50">
            <img
              class="h-auto"
              src="Radu-Amir-working-Lowres.jpg"
              alt="illustration" />
          </div>

          <div
            class="grid col-span-full row-span-full md:col-start-5 md:col-end-13 row-start-1 md:row-end-5">
            <div
              class="flex flex-col bg-grey-dark text-white px-8 md:pl-20 py-12 justify-center">
              <div class="md:pl-20">
                <div class="md:max-w-3xl">
                  <h3
                    class="text-4xl font-medium mb-6 leading-10 max-w-md lg:max-w-xl">
                    Vi gillar våra kunder
                  </h3>

                  <Typography.ParagraphMd>
                    Vi vill bidra till en bättre värld på alla sätt vi kan.
                    Därför väljer vi uppdrag med omsorg. Det betyder också att
                    om vi jobbar ihop så tror vi 100% på din tjänst.
                  </Typography.ParagraphMd>
                  <div
                    class="grid grid-cols-3 justify-items-center items-center mt-4 md:w-3/5">
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
        </div>
      </Layout.Content>
    </div>
    <Layout.Base>
      <Layout.Content>
        <div class="grid md:grid-cols-2">
          <div class="col-start-2">
            <h3
              class="text-4xl font-medium mb-6 leading-10 max-w-md lg:max-w-xl">
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
  </div>
</Animation.WithScrollFadeIn>
