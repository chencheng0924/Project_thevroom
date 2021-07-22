<template>
    <div>
        <div id="app">
            <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <addpage></addpage>
                <!-- <v-btn rounded outlined width="100" @click="$refs.fullpage.api.moveSectionDown()">上一步</v-btn> -->
            </div>
            <div class="section">
                <addpage-two></addpage-two>
            </div>
            <div class="section">
                <addpage-three></addpage-three>
            </div>
            <div class="section">
                <addpage-four></addpage-four>
            </div>
            </full-page>
        </div>
    </div>
</template>

<script>
import Addpage from '../components/Addpage.vue'
import AddpageTwo from '../components/AddpageTwo.vue'
import AddpageThree from '../components/AddpageThree.vue'
import AddpageFour from '../components/AddpageFour.vue'

export default {
  name: 'app',
  data () {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4']
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      }
    }
  },
  components: {
    Addpage,
    AddpageTwo,
    AddpageThree,
    AddpageFour
  }
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
</style>
