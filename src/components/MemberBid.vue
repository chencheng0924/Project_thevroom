<template>
  <div class="article">
    <div>
      <div style="border: 1px solid #000; width: 600px; height:900px; margin: 0 auto; border-radius: 10px" class="d-flex flex-column justify-space-around">
        <div
          style="border: 2px solid #000; width: 100%; height:180px; border-radius: 10px"
          class="d-flex justify-center align-center"
          v-for="item in items"
          :key="item"
        >
          <div style="border: 1px solid #000; width: 580px; height:160px;" class="d-flex">
            <div style="height: 100%; width:35%;" class="d-flex justify-center align-center">
              <img :src="item.img" style="width: 90%; height: 90%;">
            </div>
            <div style="border: 1px solid #000; height: 100%; width:65%;">
              <div style="border: 1px solid #000; height: 52px" class="d-flex align-center pl-4 text-subtitle-1 font-weight-light">拍賣會名稱: {{ item.name }}</div>
              <div style="border: 1px solid #000; height: 52px" class="d-flex align-center pl-4 text-subtitle-1 font-weight-light">底價: {{ item.price }}</div>
              <div style="border: 1px solid #000; height: 52px" class="d-flex align-center pl-4 text-subtitle-1 font-weight-light">開始時間: {{ item.start }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21'
      },
      {
        img: require('../assets/compare-car-pic/hotcar04.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21'
      }
    ]
  })
}
</script>

<style lang="scss">
.article {
  box-sizing: border-box;
  // border: 2px solid #00f;
  margin: 0;
  padding: 0;
}
</style>
