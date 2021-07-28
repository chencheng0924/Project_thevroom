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
                v-for="(car, index) in carimgIn"
                :id="car.id"
                :src="car.src"
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
              <overview-content :titleYear="tYear" :titleBrand="tBrand" :description="desC" :milesT="mText" :priceT="pText" :imgPath="imagePath"/>
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
    contentList: [
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '0' },
      { titleYear: '2020 M-Benz', titleBrand: 'G-Class G500', description: '乍看全新G-Class的外觀設計，會發現在整體比例與線條的走向中，完全不改既有的經典初衷。但當仔細端倪，將會讚嘆原廠設計團隊的鬼斧神工，相較於先前車款，新G-Class的車身尺碼全面放大，以G 500車型為例，長/寬/高分別增加了53mm、117mm、15mm，軸距長度也拉長40mm，讓整體車身格局來到4817x1984x1969mm之譜，軸距長度則達到2890mm。', milesT: '2000 Km', priceT: '2,300,000', id: '1' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '2' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '3' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '4' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '5' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '6' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '7' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '8' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '9' },
      { titleYear: '2021 M-Benz', titleBrand: 'GLC Coupe GLC300 4MATIC', description: '2021 GLC Coupe採單柵式水箱護罩，搭配兩側新款LED頭燈，成熟優雅的氛圍傳承自New GLE。當視線移至保桿下方進氣口，則是會被全車系標配的鍍鉻套件所吸引，優雅中凸顯出GLC Coupe專屬的運動感。而沿著車側厚實的肩膀線條向後延伸，GLC Coupe採用全新夜色尾燈設計，成就新世代Mercedes-Benz運動休旅家族的識別。', milesT: '1234 Km', priceT: '1,300,000', id: '10' }
    ]
  }),
  methods: {
    changeCon (index) {
      // console.log(this.contentList[index].titleYear)
      this.tYear = this.contentList[index].titleYear
      this.tBrand = this.contentList[index].titleBrand
      this.desC = this.contentList[index].description
      this.mText = this.contentList[index].milesT
      this.pText = this.contentList[index].priceT
      this.imagePath = this.carimgIn[index].src
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
          transform: translateY(30px);
          transition: all 1s;
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
