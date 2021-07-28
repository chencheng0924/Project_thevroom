<template>
  <div id="app">
    <v-app>
      <the-header v-if="showheader"></the-header>
      <div class="fixHeader" :style="nomargin">
        <router-view />
      </div>
      <the-footer></the-footer>
      <home class="d-none"></home>
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import Home from './views/Home.vue'

export default {
  data () {
    return {
      topstyle: 'margin-top: 64px;'
    }
  },
  components: {
    TheHeader,
    TheFooter,
    Home
  },
  computed: {
    showheader () {
      return this.$store.getters.gethappy
    },
    nomargin () {
      return this.$store.getters.getsad
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

*{
  font-family: 'Noto Sans TC', 'Noto Sans';
  text-decoration: none;
  box-sizing: border-box;
}
body{
  box-sizing: border-box;
}
.fixHeader{
  margin-top: 64px;
}
a{
  color: #FFFFFF;
}
</style>
