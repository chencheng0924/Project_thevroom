<template>
  <div id="app">
    <the-header></the-header>
    <thefooter/>
  </div>
</template>
<script>
import theHeader from './components/layout/theHeader.vue'
import thefooter from './components/layout/footer.vue'
export default {
  components: {
    theHeader,
    thefooter
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
