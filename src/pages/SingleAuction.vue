<template>
    <div class="singleAuction">
        <div class="scrollWhole d-flex">
            <div class="rightContent d-flex">
                <div class="leftPoint d-flex flex-column justify-center">
                    <div class="leftDots d-flex flex-column justify-center">
                        <span @click="moveback"></span>
                        <span @click="moveright" class="mt-4"></span>
                        <span @click="moveleft" class="mt-4"></span>
                    </div>
                </div>
                <div class="rightIn d-flex flex-column align-center">
                    <div class="titleAu">Mercedes-Benz</div>
                    <div class="titleAu">GLC Coupe 300</div>
                    <div class="carAu">
                        <img class="moCar" src="../assets/carlist/benz10.png">
                    </div>
                    <div class="btnAu d-flex justify-center">
                        <v-btn
                        rounded
                        color="#F34841"
                        class="btn mr-4"
                        width="130"
                        dark>
                        開始競標
                        </v-btn>
                        <v-btn
                        rounded
                        outlined
                        color="#BFBDBD"
                        class="btn"
                        dark>
                        追蹤此拍賣場
                        </v-btn>
                    </div>
                </div>
                <div class="rightPoint"></div>
            </div>
        </div>
        <div class="scrollWholetwo"></div>
        <div class="scrollWholethree">
          <single-car-info/>
        </div>
        <div class="scrollWholefour">
          <single-car-bid-record/>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import singleCarInfo from '../components/singleCarInfo.vue'
import singleCarBidRecord from '../components/singleCarBidRecord.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    singleCarInfo,
    singleCarBidRecord
  },
  mounted: function () {
    // this.scrollAnimation()
    // this.scrollAnimationTwo()
    // this.movefun()
  },
  methods: {
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
                width: 100px;
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
                transform: translateY(50px);
                color: #FFFFFF;
            }
            .carAu{
                // border: 1px solid red;
                width: 800px;
                height: 380px;
                .moCar{
                    // border: 1px solid pink;
                    width: 750px;
                    transform: translateY(-50px);
                    position: relative;
                    z-index: 10;
                }
            }
            .btnAu{
                // border: 1px solid lightseagreen;
              // position: relative;
              // z-index: 10;
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
