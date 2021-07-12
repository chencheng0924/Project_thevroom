<template>
  <div>
    <direct-buy />
    <about-us />
    <v-container class="mt-10" style="border: 1px solid red">
      <v-row justify="space-around" style="border: 1px solid green">
        <v-col cols="8">
          <v-img
          ref="indexcar"
          max-width="800"
          src="../assets/indexbenz.png"
          class="photo"
          style="border: 1px solid yellow; pointer-events: none;"
          @move-car="letCarMove"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <quick-search></quick-search>
        </v-col>
        <v-btn
        rounded
        color="#F34841"
        class="btn"
        dark
        @click="wantmove"
        >進入競標場</v-btn>
      </v-row>
    </v-container>
    <select-car></select-car>
  </div>
</template>

<script>
import AboutUs from '../components/pages/AboutUs.vue'
import DirectBuy from '../components/pages/DirectBuy.vue'
import QuickSearch from '../components/QuickSearch.vue'
import SelectCar from '../components/SelectCar.vue'
export default {
  name: 'Home',

  components: {
    AboutUs,
    DirectBuy
    QuickSearch,
    SelectCar
  },
  methods: {
    letCarMove () {
      console.log('yo')
      this.$refs.indexcar.style.transform = 'translateX(0px)'
    },
    wantmove () {
      this.$refs.indexcar.style.transform = 'translateX(0px)'
    }
  }
}
</script>

<style>
  .photo{
    position: relative;
    transform: translateX(130px);
    z-index: 10;
  }
  .btn{
    position: relative;
    bottom: 180px;
  }
</style>
