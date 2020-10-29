<script>
  import CityIcon from '../assets/city_icon.svg'
  import FacebookIcon from '../assets/facebook_icon.svg'
  import HarborIcon from '../assets/harbor_icon.svg'
  import InstagramIcon from '../assets/instagram_icon.svg'
  import LinkedinIcon from '../assets/linkedin_icon.svg'
  import YouTubeIcon from '../assets/youtube_icon.svg'
  import Layout from './layout'
</script>

<div class="bg-grey-cod pt-8 pb-24">
  <Layout.Content>
    <div class="flex items-start md:items-end flex-col md:flex-row">
      <div class="w-2/3 flex flex-col sm:flex-row gap-8">
        <div>
          <div class="mb-4">
            <CityIcon />
          </div>
          <p class="text-white font-medium tracking-wide">Iteam Stockholm</p>
          <p class="text-white font-light text-sm leading-7">
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
          <p class="text-white font-light text-sm leading-7 mt-3">
            <a href="tel:08267090">08-26 70 90</a>
          </p>
          <p class="text-white font-light text-sm leading-7">
            <a class="underline" href="mailto:info@iteam.se">info@iteam.se</a>
          </p>
        </div>
        <div class="md:pt-0 sm:px-20">
          <div class="mb-4">
            <HarborIcon />
          </div>
          <p class="text-white font-medium tracking-wide">Iteam Göteborg</p>
          <p class="text-white font-light text-sm leading-7">
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

          <p class="text-white font-light text-sm leading-7 mt-3">
            <a href="tel:0734029112">073-402 91 12</a>
          </p>
          <p class="text-white font-light text-sm leading-7">
            <a
              class="underline"
              href="mailto:johanna.grahn@iteam.se">johanna.grahn@iteam.se</a>
          </p>

          <div />
        </div>
      </div>
      <div
        class="pt-20 md:pt-0 md:py-20 w-auto md:w-1/3 flex justify-end text-white">
        <a href="https://www.facebook.com/iteam1337/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com/iteam1337" target="_blank" class="ml-4">
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/270569/"
          target="_blank"
          class="ml-4">
          <LinkedinIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCU2TdLZ7p0jEuuGUxaod4lw"
          target="_blank"
          class="ml-4">
          <YouTubeIcon />
        </a>
      </div>
    </div>
  </Layout.Content>
</div>
