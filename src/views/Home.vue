<template>
  <div>
    <search-banner/>
    <select-car></select-car>
    <direct-buy />
    <about-us />
    <index-forum/>
  </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue'
import DirectBuy from '../components/DirectBuy.vue'
import SelectCar from '../components/SelectCar.vue'
import indexForum from '../components/indexForum.vue'
import SearchBanner from '../components/SearchBanner.vue'

export default {
  name: 'Home',
  components: {
    AboutUs,
    DirectBuy,
    SelectCar,
    indexForum,
    SearchBanner
  }
}
</script>
