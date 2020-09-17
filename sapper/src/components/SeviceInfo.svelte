<script>
  import WithScrollFadeIn from './WithScrollFadeIn.svelte'
  import Links from '../components/links'
  import Typography from '../components/typography/'

  export let title
  export let description
  export let links
</script>

<div class="w-full">
  <WithScrollFadeIn>
    <div class="mb-2">
      <slot />
    </div>
    <Typography.H4>{title}</Typography.H4>
    <p class="text-base font-light">{description}</p>
    <ul class="mt-4">
      {#each links as link}
        <li>
          <Links.ArrowTextLink to="/services/strategy">
            {link}
          </Links.ArrowTextLink>
        </li>
      {/each}
    </ul>
  </WithScrollFadeIn>
</div>
