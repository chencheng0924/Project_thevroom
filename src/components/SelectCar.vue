<template>
    <div class="wholepage d-flex">
        <div class="insideWhole d-flex">
            <div class="leftpart d-flex flex-column">
                <the-headline titleName="近期競標場次" style="height: 100px;" class="pt-8 d-flex"></the-headline>
                <div v-for="(item, index) in carList" :key="item.id" class="leftitem d-flex align-center justify-space-between" :class="{ addcolor:index == count}" @click="addBg(index)">
                    <div class="text-h6 font-weight-regular">{{ item.carname }}</div>
                    <div :class="{ viewbar:index == count}" class="viewcolor" style="color: #181818;">{{ viewtag }}</div>
                </div>
                <div class="moreAu d-flex align-center">
                  <router-link to="/auctionoverview" style="color: #BFBDBD;" class="mt-3 text-subtitle-1 font-weight-medium">
                    查看更多場次
                  <v-icon class="mb-1" color="#BFBDBD">mdi-arrow-right</v-icon>
                  </router-link>
                </div>
            </div>
            <div class="rightpart d-flex flex-column justify-space-between">
                <div class="carImg mt-10">
                    <img :src="showImg" class="imgSize">
                </div>
                <div class="timer">01:08:54:36''</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      count: 0,
      viewtag: '',
      showImg: require('../assets/index-select-car/car6.jpeg'),
      carList: [
        { classname: 'one', carname: '01  BMW M2 Competition', id: '1' },
        { classname: 'two', carname: '02  M-Benz GLC 200 4MATIC', id: '2' },
        { classname: 'three', carname: '03  BMW X4 competition', id: '3' },
        { classname: 'four', carname: '04  Bentley Continental GT', id: '4' },
        { classname: 'five', carname: '05  LAND ROVER Discovery Sport', id: '5' }
      ],
      carImg: [
        { classname: 'nbone', src: require('../assets/index-select-car/car6.jpeg'), id: '0' },
        { classname: 'nbtwo', src: require('../assets/index-select-car/car1.jpg'), id: '1' },
        { classname: 'nbthree', src: require('../assets/index-select-car/car5.jpg'), id: '2' },
        { classname: 'nbfour', src: require('../assets/index-select-car/car4.jpg'), id: '3' },
        { classname: 'nbfive', src: require('../assets/index-select-car/car3.jpg'), id: '4' }
      ]
    }
  },
  methods: {
    addBg (index) {
      this.count = index
      this.showImg = this.carImg[index].src
      this.showView = true
      //   console.log(this.carImg[index].src)
    }
  }
}
</script>

<style lang="scss" scoped>
.wholepage {
  width: 100vw;
  height: 100vh;
  background-color: #181818;
    .insideWhole{
        // border: 1px solid yellow;
        width: 1200px;
        height: 650px;
        margin: 20px auto 0 auto;
    }
    .leftpart {
    // border: 1px solid yellow;
    width: 600px;
    height: 650px;
    position: relative;
    z-index: 10;
        .leftitem{
        // border: 1px solid blue;
        height: 100px;
        color: #FFFFFF;
        padding-left: 30px;
        cursor: pointer;
            &:hover{
                background-color: rgba($color: #F34841, $alpha: 0.5)
            }
        }
        .moreAu{
          padding-left: 30px;
          color: #BFBDBD;
        }
      }
  .rightpart {
    // border: 1px solid green;
    width: 600px;
    position: relative;
        .imgSize{
            width: 100%;
            margin-top: 100px;
        }
        .timer{
            // border: 1px solid yellow;
            text-align: end;
            font-size: 40px;
            color: #FFFFFF;
            font-weight: blod;
        }
  }
  .viewbar{
      // border: 1px solid yellow;
      height: 100%;
      width: 100px;
      background-color: #FFFFFF;
  }
  .addcolor{
      background-color: #F34841;
  }
}
</style>
