<template>
  <div class="article">
    <div style="width: 100%; height: 900px;">
      <div style="width: 600px; height: 100%; margin: 0 auto;" class="d-flex justify-center align-center">
        <div style="width: 600px; height: 95%; overflow: auto;">
            <div style="border: 2px solid black; border-radius:10px; width:570px; height:160px;" class="d-flex mb-6" v-for="test in tests" :key="test">
              <div style="width:35%; height:100%" class="d-flex align-center">
                <img :src="test.img" style="width:100%; height:90%">
              </div>
              <div style="width:65%; height:100%">
                <div style="width: 100%; height: 70%;" class="pl-3 pt-3 pr-3 text-subtitle-1 font-weight-light">{{ test.word }}</div>
                <div style="width: 100%; height: 30%" class="d-flex justify-end align-center">
                  <v-btn color="#F34841" text>閱覽文章</v-btn>
                </div>
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
    benched: 0,
    tests: [
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar04.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        word: 'Audi Q2 35 TFSI S Line試駕 │享有個性的價值...'
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
  // height: 1200px;
  // width: 100%;
}
</style>
