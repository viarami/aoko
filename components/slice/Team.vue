<template>
  <div
    class="grid grid-cols-4 gap-8 px-8 py-16 my-16 bg-gray-100 dark-mode:bg-gray-900 dark-mode:text-white team-slice md:my-32"
  >
    <div class="col-span-4 md:col-span-1">
      <div class="mb-4 text-2xl font-bold uppercase title">
        {{ $prismic.asText(slice.primary.team_title) }}
        <div
          class="w-3/12 mt-2 border-b-2 border-gray-800 dark-mode:border-gray-200 line"
        ></div>
      </div>

      <div class="text-sm text-container description">
        <prismic-rich-text :field="slice.primary.team_description" />
      </div>
    </div>

    <div class="grid grid-cols-3 col-span-4 gap-8 md:col-span-3">
      <div
        class="col-span-3 md:col-span-1"
        v-for="item in slice.items"
        :key="item.id"
      >
        <div class="mb-4 text-xl font-semibold uppercase title">
          {{ $prismic.asText(item.team_name) }}
          <div
            class="w-3/12 mt-2 border-b-2 dark-mode:border-gray-200 line"
          ></div>
        </div>
        <div class="font-light uppercase subtitle">
          {{ $prismic.asText(item.team_role) }}
        </div>
        <div class="pr-8 my-8 profile-pic">
          <ResponsiveImg
            :imgobject="item.team_image"
            :sizes="'(min-width: 768px) 25vw, 98vw'"
          />
        </div>

        <div class="text-sm text-container description">
          <prismic-rich-text :field="item.description" />
        </div>
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
