<script>
  import FeaturedImageIteam from '../assets/featured-image-iteam.svg'
  import Layout from '../components/layout'
  import Typography from '../components/typography/'
  import Animation from '../components/animation'
</script>

<!-- Tjänster -->
<svelte:head>
  <title>Iteam | Tjänster</title>
</svelte:head>

<Layout.Base>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div class="flex flex-col lg:flex-row justify-between w-full md:px-24">
        <div class="flex-initial max-w-md">
          <Typography.H1>Tjänster</Typography.H1>
          <Typography.ParagraphMd>Lorem ipsum...</Typography.ParagraphMd>
        </div>
        <div class="w-full max-w-md self-center mt-8 lg:mt-0 ">
          <FeaturedImageIteam />
        </div>
      </div>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Base>
