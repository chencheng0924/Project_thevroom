<template>
  <div id="app">
    <v-app>
      <the-header></the-header>
      <router-view />
      <!-- <the-footer></the-footer> -->
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
// import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    TheHeader
    // TheFooter
  }
}
</script>
