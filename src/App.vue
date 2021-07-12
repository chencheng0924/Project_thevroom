<template>
  <div id="app">
    <the-header></the-header>
    <compare-card></compare-card>
    <the-footer></the-footer>
    <router-view />
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
