<script>
  import Layout from '../../components/layout'
  import Typography from '../../components/typography/'
  import Animation from '../../components/animation'
  import Meta from '../../components/Meta.svelte'
</script>

<!-- Kontakt -->

<Meta title="Iteam | Kontakta oss" />

<Animation.WithScrollFadeIn>
  <Layout.Container>
    <div class="max-w-4xl mx-auto">
      <Typography.H1>Behöver du hjälp med en digital produkt?</Typography.H1>
      <Typography.ParagraphLg>
        Vi jobbar med kunder i alla storlekar, från startups till stora företag.
        Låt oss prata om ditt projekt och hur vi kan hjälpa till att skapa
        värde.
      </Typography.ParagraphLg>
      <div class="md:px-24 py-12 max-w-2xl">
        <div class="text-blue-cornflower">
          <Typography.H2>Nya samarbeten</Typography.H2>
        </div>
        <Typography.ParagraphMd>
          Det bästa sättet för att komma i kontakt med oss är att mejla vår
          försäljningsansvarig Jonna på
          <b><a
              href="mailto:jonna.hjern@iteam.se"
              class="underline">jonna.hjern@iteam.se</a></b>. Vi svarar
          vanligtvis inom en dag. Du kan även ringa till henne på
          <b><a href="callto:+46 72 975 53 66" class="underline">+46 72 975 53
              66.</a></b>
        </Typography.ParagraphMd>

        <div class="mt-8 md:mt-12">
          <div class="text-blue-cornflower">
            <Typography.H2>Jobba hos oss</Typography.H2>
          </div>
          <Typography.ParagraphMd>
            Är du intresserad av att jobba hos oss är du välkommen att skicka
            din spontantansökan till
            <b><a
                href="mailto:joinus@iteam.se"
                class="underline">joinus@iteam.se</a></b>.
          </Typography.ParagraphMd>
        </div>
        <div class="mt-8 md:mt-12">
          <div class="text-blue-cornflower">
            <Typography.H2>Övriga ärenden</Typography.H2>
          </div>
          <Typography.ParagraphMd>
            Har du övriga frågor om lokal, ekonomi eller juridik kan du kontakta
            Hans Rollman på
            <b>
              <a href="callto:‭+46 73 813 37 87" class="underline">‭+46 73 813
                37 87</a>
            </b>‬ eller
            <b>
              <a
                href="mailto:hans.rollman@iteam.se"
                class="underline">hans.rollman@iteam.se</a>
            </b>.
          </Typography.ParagraphMd>
        </div>
      </div>
    </div>
  </Layout.Container>
</Animation.WithScrollFadeIn>
