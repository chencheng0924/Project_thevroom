<template>
  <div>
    <media :query="{minWidth: '401px'}">
      <div class="auctionOv d-flex">
        <div class="auctionWhole d-flex">
          <div class="carNav d-flex flex-column">
            <div class="btnup d-flex justify-center" v-if="show">
              <v-icon x-large @click="carUp" ref="upB">mdi-chevron-up</v-icon>
            </div>
            <div class="carimgIn d-flex flex-column align-center">
              <img
                v-for="(car, index) in contentList"
                :id="car.id"
                :src="car.IMGPATH"
                :key="car.id"
                ref="carmoving"
                @click="changeCon(index)"
              />
            </div>
            <div class="btndown d-flex justify-center" v-if="show">
              <v-icon x-large @click="carDown" ref="upD">mdi-chevron-down</v-icon>
            </div>
          </div>
        </div>
        <div class="auctionContent">
            <!-- <transition> -->
              <overview-content :acid="acid" :titleYear="tYear" :titleBrand="tBrand" :description="desC" :milesT="mText" :priceT="pText" :imgPath="imagePath"/>
            <!-- </transition> -->
        </div>
      </div>
    </media>
    <!-- --------------------------------------------------------------------- -->
    <media :query="{maxWidth: '400px'}">
      <div class="mobileAO">
        <mobile-overview-content/>
      </div>
    </media>
  </div>
</template>

<script>
import OverviewContent from '../components/OverviewContent.vue'
import Media from 'vue-media'
import MobileOverviewContent from '../components/MobileOverviewContent.vue'

export default {
  async created () {
    const res = await fetch('http://localhost:8080/phpfile/selectauction.php')
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.contentList = resdata
    console.log(this.contentList)
    // console.log(resdata[resdata.length - 1][0])
    // this.contentList[0].description = resdata[resdata.length - 1][0]
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  data: () => ({
    imagePath: require('../assets/carlist/benz10.png'),
    tYear: '2021 M-Benz',
    tBrand: 'GLC Coupe GLC300 4MATIC',
    desC: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。',
    mText: '1234 Km',
    pText: '1,300,000',
    show: true,
    length: 3,
    window: 0,
    carimgIn: [
      { id: '0', src: require('../assets/carlist/benz10.png') },
      { id: '1', src: require('../assets/carlist/benz11.png') },
      { id: '2', src: require('../assets/carlist/benz12.png') },
      { id: '3', src: require('../assets/carlist/benzgclass.png') },
      { id: '4', src: require('../assets/carlist/bmw7.png') },
      { id: '5', src: require('../assets/carlist/gtr1.png') },
      { id: '6', src: require('../assets/carlist/benz10.png') },
      { id: '7', src: require('../assets/carlist/benz11.png') },
      { id: '8', src: require('../assets/carlist/benz12.png') },
      { id: '9', src: require('../assets/carlist/benzgclass.png') },
      { id: '10', src: require('../assets/carlist/bmw7.png') }
    ],
    distanceY: 0,
    count: 0,
    contentList: [],
    acid: ''
  }),
  methods: {
    changeCon (index) {
      // console.log(this.contentList[index].titleYear)
      this.tYear = this.contentList[index].YEAR + ' ' + this.contentList[index].CARBRAND
      this.tBrand = this.contentList[index].CARSERIES
      this.desC = this.contentList[index].DESCRIPTION
      this.mText = this.contentList[index].MILES
      this.pText = this.contentList[index].RESERVEPRICE
      this.imagePath = this.contentList[index].IMGPATH
      // console.log(this.contentList[index].AUCTIONID)
      this.acid = this.contentList[index].AUCTIONID
      const fd = new FormData()
      fd.append('auID', this.contentList[index].AUCTIONID)
      fetch('http://localhost:8080/phpfile/singleauction.php', {
        method: 'POST',
        body: fd
      })
    },
    carUp () {
      // console.log(this.$refs.carmoving.length)
      // if (this.distanceY < 0) {
      // this.$refs.upB.disabled = true
      // console.log(this.$refs.carmoving)
      // const y = -60
      this.distanceY = 60
      // this.count += 1
      this.$refs.carmoving.forEach((item) => {
        item.style.transform += `translateY(${this.distanceY}px)`
      // console.log(y)
      // console.dir(item)
      // console.dir(this.$refs.carmoving[0])
      })
      // console.log(this.distanceY)
      // console.dir(document.querySelector('#first'))
      // }
      // this.distanceY = 70
      // this.$refs.carmoving.forEach((item) => {
      //   item.style.transform += `translateY(${this.distanceY}px)`
      // })
    },
    carDown () {
      // console.log(this.$refs.carmoving)
      // this.distanceY -= 60
      const i = -60
      this.$refs.carmoving.forEach((item) => {
        item.style.transform += `translateY(${i}px)`
      })
    }
  },
  components: {
    OverviewContent,
    Media,
    MobileOverviewContent
  }
  // mounted () {
  //   this.distanceY = 1
  // }
}
</script>

<style lang="scss">
.auctionOv{
  .auctionWhole {
    .carNav {
      width: 280px;
      height: calc(100vh - 48px);
      overflow: hidden;
      position: relative;
      .btnup {
      width: 280px;
      height: 50px;
      // background-color: orange;
      position: absolute;
      top: 0;
      z-index: 10;
      }
      .carimgIn {
      width: 280px;
      height: 1500px;
      // background-color: tomato;
        img {
          width: 220px;
          height: 140px;
          object-fit: cover;
          transform: translateY(30px);
          transition: all 1s;
          margin-top: 5px;
        }
      }
      .btndown {
      width: 280px;
      height: 50px;
      // background-color: orange;
      position: absolute;
      bottom: 0;
    }
    }
  }
  .auctionContent{
    width: 100%;
  }
}
</style>
