<script>
  import Typography from '../components/typography'
  import Animation from '../components/animation'
  import Buttons from '../components/buttons'

  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div
  class="text-center justify-center text-white items-center flex flex-col h-screen z-40">
  <div
    class="h-full w-full bg-cover bg-center bg-no-repeat absolute top-0 darkness"
    style="background-image: url(floating-shiba.gif)" />
  <div class="relative">
    <div class="pb-6">
      <Typography.H1>{status}</Typography.H1>
      <Typography.ParagraphMd>{error.message}</Typography.ParagraphMd>
    </div>

    <Animation.ButtonHover>
      <a href="/">
        <Buttons.Default>Till startsidan</Buttons.Default>
      </a>
    </Animation.ButtonHover>
  </div>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
