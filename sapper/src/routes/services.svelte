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

<Layout.Page>
  <Animation.WithScrollFadeIn>
    <Layout.Text>
      <div
        class="flex flex-col lg:flex-row justify-between px-8 md:px-16 lg:px-32 w-full">
        <div class="flex-initial max-w-md">
          <Typography.H1>Tjänster</Typography.H1>
          <Typography.ParagraphMd>Lorem ipsum...</Typography.ParagraphMd>
        </div>
        <div class="w-1/2">
          <FeaturedImageIteam />
        </div>
      </div>
    </Layout.Text>

    <Layout.Content>
      <Layout.Text>Dolor sit amet.</Layout.Text>
    </Layout.Content>
  </Animation.WithScrollFadeIn>
</Layout.Page>
