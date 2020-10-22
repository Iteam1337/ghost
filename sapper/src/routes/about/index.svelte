<script>
  import FeaturedImageIteam from '../../assets/featured-image-iteam.svg'
  import Typography from '../../components/typography/'
  import Layout from '../../components/layout'
  import Animation from '../../components/animation'
</script>

<!-- Om oss -->
<svelte:head>
  <title>Iteam | Om oss</title>
</svelte:head>

<Layout.Page>
  <Animation.WithScrollFadeIn>
    <Layout.Content>
      <div
      class="flex flex-col lg:flex-row justify-between w-full md:px-24">
        <div class="flex-initial max-w-md">
          <Typography.H1>Om oss</Typography.H1>
          <Typography.ParagraphMd>Lorem ipsum...</Typography.ParagraphMd>
        </div>
        <div class="w-full max-w-md self-center mt-8 lg:mt-0 ">
          <FeaturedImageIteam />
        </div>
      </div>
    </Layout.Content>
    <div
      class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
  </Animation.WithScrollFadeIn>
</Layout.Page>
