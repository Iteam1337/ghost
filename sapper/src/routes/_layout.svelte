<script>
  import Nav from '../components/Navigation/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<Nav {segment} />

<slot />

<Footer />
