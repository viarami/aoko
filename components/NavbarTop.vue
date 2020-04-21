<template>
  <nav
    class="flex justify-between w-full tracking-wider uppercase dark-mode:text-white dark-mode:bg-gray-800"
  >
    <div class="py-4 pl-8 font-semibold sitename">
      <nuxt-link :to="'/'">{{ sitename }}</nuxt-link>
    </div>

    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed z-30 w-screen h-screen px-8 py-4 bg-gray-200 dark-mode:bg-gray-800 md:bg-transparent md:relative md:z-0 md:w-auto md:h-auto menu md:block"
    >
      <div class="flex justify-between">
        <div class="font-semibold md:hidden">{{ sitename }}</div>
        <div class="cursor-pointer close-menu md:hidden" @click="toogleMenu()">
          <span class="sr-only">Close Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>

      <div
        class="w-1/2 mt-4 ml-auto border-b-2 border-gray-800 dark-mode:border-gray-200 md:hidden line"
      ></div>

      <ul
        class="grid grid-cols-1 gap-4 px-8 mt-8 text-2xl list-none md:text-base md:flex md:justify-between md:px-0 md:mt-0"
      >
        <li v-for="item in menu" :key="item.id" class="mr-4 cursor-pointer">
          <nuxt-link :to="LinkGetter(item.menu_item)">
            {{
            $prismic.asText(item.title)
            }}
          </nuxt-link>
        </li>
      </ul>

      <div class="w-1/2 mt-8 border-b-2 border-gray-800 dark-mode:border-gray-200 md:hidden line"></div>
    </div>

    <div class="block py-4 pr-8 cursor-pointer menu-toggle md:hidden" @click="toogleMenu()">
      <span class="sr-only">Open Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-menu"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </div>
  </nav>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    menu: {
      type: Array,
      default: null
    },
    sitename: {
      type: String,
      default: null
    }
  },
  methods: {
    toogleMenu() {
      this.isOpen = !this.isOpen
    },
    LinkGetter(post) {
      let link = LinkResolver(post)
      return link
    }
  }
}
</script>
