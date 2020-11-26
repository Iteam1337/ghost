<script>
  import CityIcon from '../assets/city_icon.svg'
  import HarborIcon from '../assets/harbor_icon.svg'
  import Layout from './layout'
  import SocialMedia from './SocialMedia.svelte'
</script>

<Layout.Container background={'bg-grey-cod'}>
  <div class="flex items-start md:items-end flex-col md:flex-row text-white">
    <div class="w-2/3 flex flex-col sm:flex-row gap-8">
      <div>
        <div class="mb-4">
          <CityIcon />
        </div>
        <p class="font-medium tracking-wide">Iteam Stockholm</p>
        <p class="font-light text-sm leading-7">
          Östermalmsgatan 26A
          <br />
          114 26 Stockholm
          <br />
          <a
            href="https://goo.gl/maps/cVxFADSToWkbwCjBA"
            target="_blank"
            class="underline">
            Google Maps
          </a>
        </p>
        <p class="font-light text-sm leading-7 mt-3">
          <a href="tel:08267090">08-26 70 90</a>
        </p>
        <p class="font-light text-sm leading-7">
          <a class="underline" href="mailto:info@iteam.se">info@iteam.se</a>
        </p>
      </div>
      <div class="md:pt-0 sm:px-20">
        <div class="mb-4">
          <HarborIcon />
        </div>
        <p class="font-medium tracking-wide">Iteam Göteborg</p>
        <p class="font-light text-sm leading-7">
          Järntorgsgatan 12-14
          <br />
          413 01 Göteborg
          <br />
          <a
            href="https://goo.gl/maps/fDzuuDuUSxU6jLGb8"
            target="_blank"
            class="underline">
            Google Maps
          </a>
        </p>

        <p class="font-light text-sm leading-7 mt-3">
          <a href="tel:0734029112">073-402 91 12</a>
        </p>
        <p class="font-light text-sm leading-7">
          <a
            class="underline"
            href="mailto:johanna.grahn@iteam.se">johanna.grahn@iteam.se</a>
        </p>

        <div />
      </div>
    </div>
    <div class="pt-20 md:pt-0 w-auto md:w-1/3 flex justify-end">
      <SocialMedia />
    </div>
  </div>
</Layout.Container>
