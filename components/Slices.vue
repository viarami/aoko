<template>
  <div>
    <section v-for="(slice, index) in slicedata" :key="'slice-' + index">
      <div v-if="slice.slice_type === 'team'">
        <Team :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'list'">
        <List :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'text'">
        <TextSlice :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'image'">
        <ImageSlice :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'gallery'">
        <Gallery :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'image_header'">
        <ImageHeader :slice="slice" />
      </div>

      <div v-else-if="slice.slice_type === 'portfolio_overview'">
        <PortfolioOverview :slice="slice" />
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from '~/components/slice/Gallery'
import ImageSlice from '~/components/slice/ImageSlice'
import List from '~/components/slice/List'
import Team from '~/components/slice/Team'
import TextSlice from '~/components/slice/TextSlice'
import ImageHeader from '~/components/slice/ImageHeader'
import PortfolioOverview from '~/components/slice/PortfolioOverview'

export default {
  components: {
    Gallery,
    ImageSlice,
    List,
    Team,
    TextSlice,
    PortfolioOverview,
    ImageHeader
  },
  props: {
    slicedata: {
      type: Array,
      default: null
    }
  }
}
</script>
