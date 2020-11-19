<script>
  export let title = 'Iteam - There is a Better Way'
  export let type = 'website'
  export let image = 'https://www-iteam-se.iteamdev.io/illustration-iteam-i.svg'
  export let description =
    'Iteam är en digitaliseringsbyrå som utvecklar digitala tjänster för en hållbar framtid'
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:image" content={image} />
  <meta property="og:type" content={type} />
  <meta property="og:description" content={description} />
</svelte:head>
