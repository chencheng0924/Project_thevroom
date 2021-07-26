<template>
    <div class="wholepage d-flex">
        <div class="insideWhole d-flex">
            <div class="leftpart d-flex flex-column">
                <the-headline titleName="近期競標場次" style="height: 100px;" class="pt-8 d-flex"></the-headline>
                <div v-for="(item, index) in carList" :key="item.id" class="leftitem d-flex align-center justify-space-between" :class="{ addcolor:index == count}" @click="addBg(index)">
                    <div class="text-h6 font-weight-regular">{{ item.carname }}</div>
                    <div :class="{ viewbar:index == count}" class="viewcolor d-flex align-center justify-center">
                      <router-link :to="carlink">
                        <div style="color: #181818;">{{ viewtag }}</div>
                      </router-link>
                    </div>
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
import gsap from 'gsap'

export default {
  data () {
    return {
      show: false,
      count: 0,
      viewtag: 'View',
      carlink: '/singleauction',
      showImg: require('../assets/index-select-car/bmwm2c.png'),
      carList: [
        { classname: 'one', carname: '01  BMW M2 Competition', id: '1' },
        { classname: 'two', carname: '02  M-Benz GLA 250 4MATIC', id: '2' },
        { classname: 'three', carname: '03  BMW X4 competition', id: '3' },
        { classname: 'four', carname: '04  Bentley Continental GT', id: '4' },
        { classname: 'five', carname: '05  LAND ROVER Evoque', id: '5' }
      ],
      carImg: [
        { classname: 'nbone', src: require('../assets/index-select-car/bmwm2c.png'), id: '0' },
        { classname: 'nbtwo', src: require('../assets/index-select-car/benzglar.png'), id: '1' },
        { classname: 'nbthree', src: require('../assets/index-select-car/bmwX4.png'), id: '2' },
        { classname: 'nbfour', src: require('../assets/index-select-car/bentley2.png'), id: '3' },
        { classname: 'nbfive', src: require('../assets/index-select-car/landrover_evoque.png'), id: '4' }
      ],
      viewList: [ // 之後把SingleAuction的children路徑改上去
        { id: '0', link: '/singleauction' },
        { id: '1', link: '/singleauction02' },
        { id: '2', link: '/singleauction03' },
        { id: '3', link: '/singleauction04' },
        { id: '4', link: '/singleauction05' }
      ]
    }
  },
  methods: {
    addBg (index) {
      this.count = index
      this.showImg = this.carImg[index].src
      this.viewtag = 'View'
      this.carlink = this.viewList[index].link
      // this.showView = true
      //   console.log(this.carImg[index].src)
      gsap.fromTo('.imgSize', {
        x: 400
      }, {
        x: 0,
        duration: 1,
        ease: 'circ'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wholepage {
  width: 100vw;
  height: 700px;
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
          .viewcolor{
            color: #181818;
            font-size: 0px;
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
      color: #181818;
      font-size: 20px !important;
  }
  .addcolor{
      background-color: #F34841;
  }
}
</style>
