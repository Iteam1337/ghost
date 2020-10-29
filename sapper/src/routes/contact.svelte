<script>
  import Layout from '../components/layout'
  import Content from '../components/layout/Content.svelte'
  import Typography from '../components/typography/'
  import ParagraphMd from '../components/typography/ParagraphMd.svelte'
  import Animation from '../components/animation'
</script>

<!-- Kontakt -->
<svelte:head>
  <title>Kontakt</title>
</svelte:head>

<Layout.Page>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="w-full md:px-24">
        <Typography.H1>Behöver du hjälp med en digital produkt?</Typography.H1>
        <div class="max-w-4xl">
          <Typography.ParagraphMd>
            Vi jobbar med kunder i alla storlekar, från startups till stora
            företag. Låt oss prata om ditt projekt och hur vi kan hjälpa till
            att skapa värde.
          </Typography.ParagraphMd>
        </div>
        <div class="md:px-24 py-12">
          <div class="text-blue-cornflower">
            <Typography.H2>Nya samarbeten</Typography.H2>
          </div>
          <Typography.ParagraphSm>
            Det bästa sättet för att komma i kontakt med oss är att mejla vår
            försäljningsansvarig Jonna på
            <a
              href="mailto:jonna.hjern@iteam.se"
              class="underline">jonna.hjern@iteam.se</a>. Vi svarar vanligtvis
            inom en dag. Du kan även ringa till henne på
            <a href="callto:+46 72 975 53 66" class="underline">+46 72 975 53
              66.</a>
          </Typography.ParagraphSm>
          <div>
            <div class="text-blue-cornflower">
              <Typography.H2>Jobba hos oss</Typography.H2>
            </div>
            <Typography.ParagraphSm>
              Är du intresserad av att jobba hos oss är du välkommen att skicka
              din spontantansökan till
              <a
                href="mailto:joinus@iteam.se"
                class="underline">joinus@iteam.se</a>.
            </Typography.ParagraphSm>
          </div>
          <div>
            <div class="text-blue-cornflower">
              <Typography.H2>Övriga ärenden</Typography.H2>
            </div>
            <Typography.ParagraphSm>
              Har du övriga frågor om lokal, ekonomi eller juridik kan du
              kontakta Hans Rollman på
              <a href="callto:‭+46 73 813 37 87" class="underline">‭+46 73 813
                37 87</a>‬ eller
              <a
                href="mailto:hans.rollman@iteam.se"
                class="underline">hans.rollman@iteam.se</a>.
            </Typography.ParagraphSm>
          </div>
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Page>
