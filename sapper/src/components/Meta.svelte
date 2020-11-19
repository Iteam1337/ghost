<script>
  export let title = 'Iteam - There is a Better Way'
  export let type = 'website'
  export let image = 'https://www-iteam-se.iteamdev.io/illustration-iteam-i.svg'
  export let description = ''
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:image" content={image} />
  <meta property="og:type" content={type} />
  {#if description}
    <meta property="og:description" content={description} />
  {/if}
</svelte:head>
