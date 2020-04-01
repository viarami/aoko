<template>
  <footer
    class="flex flex-wrap justify-between w-full px-8 py-4 tracking-wider uppercase dark-mode:text-white dark-mode:bg-gray-800"
  >
    <div class="mt-2 copyright">© 2020 Aoko Photography</div>

    <div>
      <ul class="flex justify-endlist-none">
        <li
          v-for="item in menu"
          :key="item.id"
          class="mt-2 mr-4 cursor-pointer"
        >
          <nuxt-link :to="LinkGetter(item.menu_item)">{{
            $prismic.asText(item.title)
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  props: {
    menu: {
      type: Array,
      default: null
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

<style scoped></style>
