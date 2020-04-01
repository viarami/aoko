<template>
  <div class="text-black dark-mode:text-white">
    <div
      v-if="slice.primary.style === 'Style1'"
      class="grid items-center grid-cols-6 px-8 py-16 my-16 bg-gray-100 dark-mode:bg-gray-900 portfolio-block md:my-32"
    >
      <div
        class="col-start-1 col-end-7 my-8 md:col-start-2 md:col-end-4 md:my-0"
      >
        <div
          class="mb-2 mb-8 text-3xl font-bold tracking-widest uppercase md:text-5xl md:mb-4"
          v-if="slice.primary.portfolio_title.length > 0"
        >
          <h2>{{ $prismic.asText(slice.primary.portfolio_title) }}</h2>
        </div>

        <div v-for="item in portfolioItems" :key="item.id">
          <div
            class="mb-2 text-lg tracking-wide uppercase"
            v-if="item.data.title.length > 0"
          >
            <nuxt-link :to="LinkGetter(item)">
              {{ $prismic.asText(item.data.title) }}</nuxt-link
            >
          </div>

          <div
            class="mb-4 text-sm font-light"
            v-if="item.data.subtitle.length > 0"
          >
            {{ $prismic.asText(item.data.subtitle) }}
          </div>
        </div>
      </div>
      <div
        class="col-start-1 col-end-7 my-8 md:col-start-4 md:col-end-6 md:my-0"
      >
        <ResponsiveImg
          v-if="slice.primary.portfolio_image.url !== undefined"
          :imgobject="slice.primary.portfolio_image"
          :sizes="'(min-width: 768px) 40vw, 98vw'"
        />
      </div>
    </div>

    <div
      v-else-if="slice.primary.style === 'Style2'"
      class="px-8 py-16 my-16 bg-gray-100 dark-mode:bg-gray-900 portfolio-block md:my-32"
    >
      <div v-if="slice.primary.portfolio_title.length > 0">
        <h2 class="text-3xl font-bold tracking-widest uppercase">
          {{ $prismic.asText(slice.primary.portfolio_title) }}
        </h2>
      </div>

      <div class="grid grid-cols-3 gap-8 my-8 md:gap-16">
        <div
          class="col-span-3 my-8 md:col-span-1 md:my-2"
          v-for="item in portfolioItems"
          :key="item.id"
        >
          <nuxt-link :to="LinkGetter(item)">
            <ResponsiveImg
              v-if="item.data.main_image.url !== undefined"
              :imgobject="item.data.main_image"
              :sizes="'(min-width: 768px) 33vw, 98vw'"
            />

            <div
              class="mt-4 text-lg font-medium tracking-wider uppercase title"
              v-if="item.data.title.length > 0"
            >
              {{ $prismic.asText(item.data.title) }}
            </div>
            <div
              class="mt-2 text-sm font-light"
              v-if="item.data.subtitle.length > 0"
            >
              {{ $prismic.asText(item.data.subtitle) }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImg from '~/components/ResponsiveImg'
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  components: {
    ResponsiveImg
  },
  props: {
    slice: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      portfolioItems: null
    }
  },
  async fetch() {
    try {
      this.portfolioItems = (
        await this.$prismic.api.query(
          this.$prismic.predicates.at('document.type', 'portfolio')
        )
      ).results
    } catch (e) {
      this.$nuxt.error({
        statusCode: 404,
        message: 'No portfolio found'
      })
    }
  },
  methods: {
    LinkGetter(post) {
      let link = LinkResolver(post)
      return link
    }
  }
}
</script>
