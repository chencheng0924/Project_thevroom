<template>
  <div>
    <media :query="{minWidth: '401px'}">
      <div class="singleAuction">
          <div class="scrollWhole d-flex align-center">
              <div class="rightContent d-flex">
                  <div class="leftPoint d-flex flex-column justify-center">
                      <div class="leftDots d-flex flex-column justify-center">
                        <span @click="moveback"></span>
                        <span @click="moveright" class="mt-4"></span>
                        <span @click="moveleft" class="mt-4"></span>
                      </div>
                  </div>
                  <div class="rightIn d-flex flex-column align-center">
                      <div class="titleAu">{{ brand }}</div>
                      <div class="titleAu">{{ series }}</div>
                      <div class="carAu">
                            <img class="moCar" :src="path">
                      </div>
                      <div class="btnAu d-flex justify-center">
                          <v-btn
                          rounded
                          color="#F34841"
                          class="btn mr-4"
                          width="130"
                          @click="moveleft"
                          dark>
                          開始競標
                          </v-btn>
                          <v-btn
                          rounded
                          outlined
                          color="#BFBDBD"
                          class="btn"
                          @click="moveright"
                          dark>
                          車輛詳細資訊
                          </v-btn>
                      </div>
                  </div>
                  <div class="rightPoint"></div>
              </div>
          </div>
          <div class="scrollWholetwo"></div>
          <div class="scrollWholethree d-flex align-center">
            <single-car-info @gomove="movegogo"/>
          </div>
          <div class="scrollWholefour d-flex align-center">
            <single-car-bid-record @moveback="backmove"/>
          </div>
      </div>
  </media>
<!-- -----------mobile----------- -->
  <media :query="{maxWidth: '400px'}">
    <rwd-single-auction/>
  </media>
  </div>
</template>

<script>
import gsap from 'gsap'
import Media from 'vue-media'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import singleCarInfo from '../components/singleCarInfo.vue'
import singleCarBidRecord from '../components/singleCarBidRecord.vue'
import RwdSingleAuction from '../components/RwdSingleAuction.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
      auctionid: '',
      brand: '',
      series: '',
      path: '',
      cy: '',
      cb: '',
      cs: '',
      cdes: '',
      cdoor: '',
      cco: '',
      cdis: '',
      cm: '',
      screenWidth: document.body.clientWidth
    }
  },
  async created () {
    console.log(this.$route.params.id)
    const fd = new FormData()
    fd.append('IDac', this.$route.params.id)

    const res = await fetch('http://localhost:8080/phpfile/singleauction.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.brand = resdata[0].CARBRAND
    this.series = resdata[0].CARSERIES
    this.path = resdata[0].IMGPATH
    // this.cy = resdata[0].YEAR
    // this.cb = resdata[0].CARBRAND
    // this.cs = resdata[0].CARSERIES
    // this.cdes = resdata[0].DESCRIPTION
    // this.cdoor = resdata[0].DOOR
    // this.cco = resdata[0].COLOR
    // this.cdis = resdata[0].DISPLACEMENT
    // this.cm = resdata[0].MILES
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    })
    console.log(this.screenWidth)
    // 頁面載入時鎖住y軸
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = 'hidden'
  },
  destroyed () {
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = null
  },
  watch: {
    // 監聽視窗大小
    screenWidth: function () {
      if (this.screenWidth > 600) {
        console.log('yo')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'hidden'
      } else {
        console.log('hey')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'auto'
      }
    }
  },
  components: {
    singleCarInfo,
    singleCarBidRecord,
    Media,
    RwdSingleAuction
  },
  methods: {
    backmove () {
      gsap.to('.moCar', {
        x: 700,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: -300,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: -100,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: 0,
        yPercent: -200,
        delay: 0.5,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    movegogo () {
      gsap.to('.moCar', {
        x: -700,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 1100,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: -300,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: -100,
        duration: 1
      })
    },
    moveright () {
      gsap.to('.moCar', {
        x: 700,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: -300,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: -100,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: 0,
        yPercent: -200,
        delay: 0.5,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    moveback () {
      gsap.to('.moCar', {
        x: 0,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: 50,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: 0,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        yPercent: 0,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    moveleft () {
      gsap.to('.moCar', {
        x: -700,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 1100,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: -300,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: -100,
        duration: 1
      })
    }
    // scrollAnimation () {
    //   gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.moCar',
    //       toggleActions: 'reverse',
    //       start: 'top top',
    //       end: '1500',
    //       markers: true,
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1
    //     }
    //   })
    //     .to('.moCar', { y: 200 })
    //     .to('.moCar', { x: 600 })
    //     .to('.moCar', { x: -600 })
    // },
    // scrollAnimationTwo () {
    //   gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.scrollWholetwo',
    //       start: 'top top',
    //       end: '+=1000',
    //       markers: true,
    //       scrub: true,
    //       pin: true
    //     //   anticipatePin: 1
    //     }
    //   })
    // }
    //       //   gsap.timeline({
    //       //     scrollTrigger: {
    //       //       trigger: '.box2',
    //       //       start: 'center center',
    //       //       end: 'bottom top',
    //       //       markers: true,
    //       //       scrub: true,
    //       //       pin: true
    //       //     }
    //       //   })
    //         .from('.text4', { x: innerWidth * 1, opacity: 0 })
    //         .from('.text5', { x: innerWidth * 1, opacity: 0 })
    //     }
  }
}

</script>

<style lang="scss">
.singleAuction{
    .scrollWhole{
        width: 100vw;
        height: 100vh;
        background-color: #181818;
        .leftPoint{
            width: 200px;
            height: 100%;
            // border: 1px solid blue;
            .leftDots{
                // border: 1px solid yellow;
                width: 140px;
                height: 200px;
                position: relative;
                z-index: 10;
                span{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #BFBDBD;
                }
            }
        }
        .rightContent{
            width: 1200px;
            height: 580px;
            // border: 1px solid yellow;
            margin:0px auto;
            .titleAu{
                // border: 1px solid green;
                width: 800px;
                font-size: 40px;
                font-weight: bolder;
                // transform: translateY(50px);
                color: #FFFFFF;
            }
            .carAu{
                // border: 1px solid red;
                width: 800px;
                height: 380px;
                .moCar{
                    // border: 1px solid pink;
                    width: 750px;
                    height: 260px;
                    object-fit: contain;
                    transform: translateY(30px);
                    position: relative;
                    z-index: 10;
                }
            }
        }
        .rightPoint{
            width: 200px;
            height: 100%;
            // border: 1px solid blue;
        }
    }
    .scrollWholetwo{
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
    }
    .scrollWholethree{
        width: 100vw;
        height: 100vh;
        // background-color: lightcoral;
    }
    .scrollWholefour{
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
    }
}
</style>
