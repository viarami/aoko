<template>
  <div>
    <header class="h-screen">
      <div class="my-40 text-center">
        <h1 class="text-6xl font-bold black">404</h1>
        <h2 class="text-4xl color-gray-800">An error occurred!</h2>
        <div>
          <nuxt-link :to="'/'">Go back home</nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: '404'
    }
  }
}
</script>