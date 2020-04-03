<template>
  <div class="dark-mode:text-white">
    <div
      v-if="slice.primary.style === 'Style1'"
      class="grid grid-cols-8 row-gap-16 px-8 py-16 mb-16 mt-8 bg-gray-100 md:mb-32 mt-16 dark-mode:bg-gray-900 text-block"
    >
      <div class="col-start-2 col-end-9 md:cols-start-3">
        <h2
          class="text-4xl font-bold tracking-wider uppercase md:text-6xl"
          v-if="slice.primary.title.length > 0"
        >{{ $prismic.asText(slice.primary.title) }}</h2>
        <div class="w-3/12 mt-4 border-b-2 border-gray-800 dark-mode:border-gray-200 line"></div>
      </div>

      <div class="col-start-1 col-end-9 md:col-end-4">
        <ResponsiveImg
          v-if="slice.primary.image.url !== undefined"
          :imgobject="slice.primary.image"
          :sizes="'(min-width: 768px) 40vw, 98vw'"
        />
      </div>

      <div class="col-start-1 col-end-9 text-sm md:col-start-5 md:col-end-8 text-container">
        <prismic-rich-text :field="slice.primary.text" v-if="slice.primary.text.length > 0" />
        <div class="w-3/12 mt-4 ml-auto border-b-2 border-gray-800 dark-mode:border-gray-200 line"></div>
      </div>
    </div>

    <div
      v-else-if="slice.primary.style === 'Style2'"
      class="relative grid grid-cols-10 row-gap-8 px-8 py-16 mb-16 mt-8 bg-gray-100 md:mb-32 mt-16 text-block"
    >
      <div class="z-10 col-start-2 col-end-11">
        <h2
          class="text-3xl tracking-wider uppercase md:text-5xl"
          v-if="slice.primary.title.length > 0"
        >{{ $prismic.asText(slice.primary.title) }}</h2>
        <div class="w-3/12 mt-4 border-b-2 border-gray-800 dark-mode:border-gray-200 line"></div>
      </div>

      <div class="z-10 col-start-1 col-end-11 text-sm md:col-start-3 md:col-end-9 text-container">
        <prismic-rich-text :field="slice.primary.text" v-if="slice.primary.text.length > 0" />
        <div class="w-3/12 mt-8 ml-auto border-b-2 border-gray-800 dark-mode:border-gray-200 line"></div>
      </div>
      <div
        v-if="slice.primary.image.url !== undefined"
        class="absolute w-full h-full bg-white dark-mode:bg-black"
      >
        <ResponsiveImg
          :imgobject="slice.primary.image"
          :classes="'absolute w-full h-full object-cover opacity-75'"
          :sizes="'100vw'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImg from '~/components/ResponsiveImg'

export default {
  components: {
    ResponsiveImg
  },
  props: {
    slice: {
      type: Object,
      default: null
    }
  }
}
</script>
