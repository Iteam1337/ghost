<script context="module">
  import { API } from '../services/api.js'

  export async function preload(page, session) {
    return API({ fetch: this.fetch, session }).Posts.List()
  }
</script>

<script>
  export let posts
</script>

<style>
  a,
  a:visited {
    font-weight: 500;
    color: var(--cornflower);
  }

  div.services {
    background-color: var(--dark-grey);
  }

  div.service {
    background-color: var(--medium-dark-grey);
  }
</style>

<svelte:head>
  <title>Iteam Solutions</title>
</svelte:head>

<div class="lg:container lg:mx-auto py-20">
  <div class="flex px-20 max-w-3xl">
    <div class="flex-initial">
      <h1>Kod, kultur och strategi</h1>
      <p>
        Genom agilitet, användarfokus och i nära samarbete med våra kunder
        skapar vi digital innovation.
      </p>
      <p>
        <a href="/about">Så här går det till &rightarrow;</a>
      </p>
    </div>
    <div class="flex-initial text-right">TODO: Illustrationer</div>
  </div>

  <div class="flex flex-wrap px-20 my-20">
    {#each posts as post}
      <div class="flex-initial shadow-md bg-white-400 px-4 py-2 m-2">
        <img src={post.feature_image} alt="feature" />
        <h2>{post.title}</h2>
      </div>
    {/each}
  </div>
</div>

<div class="services w-screen text-center text-white py-20">
  <h2 class="text-3xl font-medium tracking-wide">Våra tjänster</h2>
  <p class="text-base font-light tracking-wider">
    Lorem meow ipsum purr dolor meow meow fräs.
  </p>

  <div class="flex my-20 px-40 items-center md:container md:mx-auto space-x-3">
    <div class="service flex-initial rounded-lg">
      <img src="iteam.png" alt="meow" width="100" class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">User research</h3>
      <p class="mx-4 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-initial rounded-lg">
      <img src="iteam.png" alt="meow" width="100" class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Digital strategi</h3>
      <p class="mx-4 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-initial rounded-lg">
      <img src="iteam.png" alt="meow" width="100" class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Apputveckling</h3>
      <p class="mx-4 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
    <div class="service flex-initial rounded-lg">
      <img src="iteam.png" alt="meow" width="100" class="object-center my-8" />

      <h3 class="text-xl font-medium tracking-wide">Systemutveckling</h3>
      <p class="mx-4 text-base font-light tracking-wider">
        Lorem ipsum dolor sit meow meow meow.
      </p>
    </div>
  </div>
  <a class="bordered" href="/services">Alla tjänster</a>
</div>

<h2>Vi är Iteam</h2>
