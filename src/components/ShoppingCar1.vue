<template>
 <div>
  <media :query="{ minWidth: '401px' }">
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
  </media>
  <media :query="{ maxWidth: '400px' }">
  <div style="max-width:100%;" class="ma-auto">
    <div
      class="d-flex flex-column mb-5 align-center"
      v-for="list in prolist"
      :key="list.id"
    >
    <div class="d-flex justify-space-around" style="width:85%">
      <div class="py-3" style="width:35%;">
        <img style="width:100px;height:100px" :src="list.proSrc" alt="圖壞了" />
      </div>
      <div style="width:65%" class="ma-auto d-flex flex-column align-center">
        <div class="d-flex flex-column justify-center" style="width:75%" align-center>
          <div class="py-3 text-h5 font-weight-bold" >
            {{ list.proName }}
          </div>
          <div class="py-3 align-self-end" >
            <i class="fas fa-minus"></i>
            {{ list.proCount }}
            <i class="fas fa-plus"></i>
          </div>
          <div class="mb-3 align-self-end" >
            NT$:{{ list.proPrice * list.proCount }}
          </div>
        </div>
      </div>
      </div>
      <div style="width:90%;height:2px;background-color:rgba(0,0,0,.3)"></div>
    </div>
  </div>
  </media>
 </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: { Media },
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
