<script>
  import FeaturedImageIteam from '../assets/featured-image-iteam.svg'
  import Layout from '../components/layout'
  import Typography from '../components/typography/'
</script>

<!-- Tjänster -->
<svelte:head>
  <title>Iteam | Tjänster</title>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <FeaturedImageIteam />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Tjänster</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        Lorem ipsum...
      </Typography.BaseParagraph>
    </div>
  </div>
  <Layout.Content>Dolor sit amet.</Layout.Content>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
</Layout.Page>
