<script>
  import FeaturedImageIteam from '../../assets/featured-image-iteam.svg'
  import Links from '../../components/links'
  import Typography from '../../components/typography/'
  import Layout from '../_layout.svelte'
</script>

<!-- Om oss -->
<svelte:head>
  <title>Iteam | Om oss</title>
</svelte:head>

<Layout.Page>
  <div class="flex flex-col md:flex-row-reverse justify-between px-8 sm:px-32">
    <div class="w-1/2">
      <FeaturedImageIteam />
    </div>
    <div class="flex-initial max-w-md pt-8">
      <Typography.H1>Om oss</Typography.H1>
      <Typography.BaseParagraph class="font-light text-sm">
        Lorem ipsum...
      </Typography.BaseParagraph>
      <Links.ArrowTextLink to="/about/coworkers">
        Här är vi som jobbar på Iteam
      </Links.ArrowTextLink>
    </div>
  </div>
  <Layout.Content>Dolor sit amet.</Layout.Content>
  <div
    class="flex flex-wrap justify-center my-20 px-20 items-center md:container
      md:mx-auto space-x-3" />
</Layout.Page>
