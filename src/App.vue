<template>
  <div id="app">
    <the-header></the-header>
    <the-footer></the-footer>
    <router-view/>
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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
