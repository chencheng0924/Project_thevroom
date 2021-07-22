<template>
  <div style="max-width:1200px;" class="ma-auto">
    <div
      class="d-flex mb-10 align-center"
      style="border-bottom:1px dashed rgba(0,0,0,.3)"
      v-for="list in prolist"
      :key="list.id"
    >
      <div class="py-3" style="width:15%;text-align:center;">
        <img style="width:80px;height:80px" :src="list.proSrc" alt="圖壞了" />
      </div>
      <div class="py-3" style="width:45%;text-align:center;">
        {{ list.proName }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.proPrice }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.proCount }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.proPrice * list.proCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['proSrc', 'proName', 'proPrice', 'proCount'],
  data () {
    return {
      prolist: [
        {
          id: 1,
          proSrc: require('../assets/index-car-pic/indexpicother.png'),
          proName: '行車紀錄器',
          proPrice: 3500,
          proCount: 1
        },
        {
          id: 2,
          proSrc: require('../assets/index-car-pic/indexpicproduct.gif'),
          proName: '排氣管',
          proPrice: 10500,
          proCount: 1
        },
        {
          id: 3,
          proSrc: require('../assets/index-car-pic/indexpicwheel.png'),
          proName: '輪胎',
          proPrice: 8000,
          proCount: 3
        }
      ]
    }
  }
}
</script>
