<template>
  <div>
    <NavbarTop :sitename="settings.site_name[0].text" :menu="settings.menu" />
    <Slices :slicedata="slices" />
    <NavbarBottom :menu="settings.menu_bottom" />
  </div>
</template>

<script>
import NavbarTop from '~/components/NavbarTop'
import NavbarBottom from '~/components/NavbarBottom'
import Slices from '~/components/Slices'
import CreateMetadata from '~/plugins/metadata.js'

export default {
  components: {
    NavbarBottom,
    NavbarTop,
    Slices
  },
  head() {
    return this.metadata
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query Settings
      const settings = await $prismic.api.getSingle('settings')

      // Query post content
      const post = await $prismic.api.getByUID('page', 'portfolio')

      // Get Meta Data
      const metadata = CreateMetadata(post)

      // Returns data to be used in template
      return {
        slices: post.data.body,
        metadata: metadata,
        settings: settings.data
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Portfolio page not found' })
    }
  }
}
</script>
