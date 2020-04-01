<template>
  <div class="relative w-screen h-screen mb-16 bg-black image-header md:mb-32">
    <div class="absolute z-20 w-full top-1/4">
      <h1
        class="text-4xl font-bold tracking-wider text-center text-white uppercase md:text-6xl"
      >
        {{ $prismic.asText(slice.primary.header_title) }}
      </h1>

      <div class="text-sm text-center text-gray-100 text-container">
        <prismic-rich-text
          :field="slice.primary.subtitle"
          v-if="slice.primary.subtitle.length > 0"
        />
      </div>
    </div>

    <ResponsiveImg
      :imgobject="slice.primary.image"
      :classes="'absolute w-full h-full object-cover opacity-75'"
      :sizes="'100vw'"
    />
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
