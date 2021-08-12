<template>
  <div id="app">
    <v-app>
      <the-header v-if="showheader"></the-header>
      <div class="fixHeader" :style="nomargin">
        <router-view />
      </div>
      <!-- <v-btn @click="test">123</v-btn> -->
      <testfileload/>
      <!-- <button @click="test123">123</button> -->
      <the-footer></the-footer>
      <home class="d-none"></home>
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import Home from './views/Home.vue'
import testfileload from './components/testfileload.vue'

export default {
  mounted () {
    console.log(this.$store.getters)
    const ac = localStorage.getItem('memberac')
    const ps = localStorage.getItem('memberpa')
    if (ac) {
      this.$store.dispatch('keepsign', [ac, ps])
      console.log(this.$store.getters)
    }
    // console.log(ac)
    // console.log(ps)
    // const fc = new FormData()
    // fc.append('SIGNEM', ac)
    // fc.append('SIGNPA', ps)
    // const res = await fetch('http://localhost:8080/phpfile/testsignin.php', {
    //   method: 'POST',
    //   body: fc
    // })
    // const reslist = await res.json()
    // console.log(reslist)
  },
  data () {
    return {
      memberac: '',
      memberps: '',
      abc: '',
      topstyle: 'margin-top: 64px;'
    }
  },
  components: {
    TheHeader,
    TheFooter,
    Home,
    testfileload
  },
  computed: {
    showheader () {
      return this.$store.getters.gethappy
    },
    nomargin () {
      return this.$store.getters.getsad
    }
  },
  methods: {
    test123 () {
      const memberinfo = this.$store.getters.getmember
      if (memberinfo === 0) {
      } else {
        // console.log(memberinfo[0].EMAIL)
        // console.log(memberinfo[0].PASSWORD)
        this.memberid = localStorage.getItem('memberac')
        this.memberps = localStorage.getItem('memberpa')
        console.log(this.memberid)
        console.log(this.memberps)
        // this.$cookies.set('memberac', account)
        // this.$cookies.set('memberpa', password)
        // console.log(document.$cookie)
        // console.log(this.$cookies.isKey('memberpa'))
        // console.log(this.$cookies.get('memberac'))
      }
    },
    async test () {
      const response = await fetch('http://localhost:8080/test2.php')
      const responsedata = await response.json()

      console.log(response)
      console.log(responsedata)
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
