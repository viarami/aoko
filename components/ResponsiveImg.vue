<template>
  <img
    :srcset="GetImageSrcset(imgobject)"
    :src="GetImageSrc(imgobject)"
    :sizes="sizes"
    :class="classes"
    :alt="imgobject.alt"
  />
</template>

<script>
export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    },
    sizes: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: null
    }
  },
  methods: {
    GetImageSrcset(iobject) {
      let srcset =
        `${iobject['320'].url} ${iobject['320'].dimensions.width}w, ` +
        `${iobject['640'].url} ${iobject['640'].dimensions.width}w, ` +
        `${iobject['768'].url} ${iobject['768'].dimensions.width}w, ` +
        `${iobject['1024'].url} ${iobject['1024'].dimensions.width}w, ` +
        `${iobject['1536'].url} ${iobject['1536'].dimensions.width}w, ` +
        `${iobject.url} ${iobject.dimensions.width}w, `

      return srcset
    },
    GetImageSrc(iobject) {
      return iobject.url
    }
  }
}
</script>
