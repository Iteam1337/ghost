<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'
  export let segment
</script>

<style>
  main {
    position: relative;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    max-width: 60em;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
