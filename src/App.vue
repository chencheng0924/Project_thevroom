<template>
  <div id="app">
    <v-app>
      <the-header></the-header>
      <router-view />
      <the-footer></the-footer>
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

* {
  /* font-family: 'Noto Sans TC', sans-serif; */
  font-family: 'Noto Sans TC', sans-serif !important;
}
</style>
