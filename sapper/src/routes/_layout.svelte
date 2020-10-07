<script>
  import Nav from '../components/Navigation/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<svelte:head>
  <style>
    body {
      background-color: #fcfbfb;
    }
  </style>
</svelte:head>
<Nav {segment} />

<slot />

<Footer />
