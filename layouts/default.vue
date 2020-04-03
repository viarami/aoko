<template>
  <div class="bg-white dark-mode:bg-black">
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Inter', sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.text-container {
  font-family: 'Libre Baskerville', serif;
}
.text-container p {
  @apply tracking-wide my-2;
}
.text-container h2 {
  @apply text-3xl;
}
.text-container h3 {
  @apply text-2xl;
}
.text-container h4 {
  @apply text-xl;
}
.text-container h5 {
  @apply text-lg;
}
</style>
