<template>
    <div>
        <media :query="{ minWidth: '401px' }">
            <div class="indexBan d-flex flex-column">
                <div class="navbar d-flex justify-space-between align-center mt-2" style="opacity: 0; transform: translateY(40px);">
                    <div class="logoBan">
                        <router-link to="/" tag="span" style="cursor: pointer">
                            <img class="logoImg ml-7" src="../assets/small_logowhite-transparent.png">
                        </router-link>
                    </div>
                    <ul class="listLine d-flex text-h6 font-weight-bold ml-16">
                        <li>
                            <router-link to="/auctionoverview" tag="span" style="cursor: pointer">
                            競標會場
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/accessories" tag="span" style="cursor: pointer">
                            配件專區
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/comparecard" tag="span" style="cursor: pointer">
                            市場行情
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/forum" tag="span" style="cursor: pointer">
                            討論專區
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/newdriver" tag="span" style="cursor: pointer">
                            新手上路
                            </router-link>
                        </li>
                    </ul>
                    <div class="iconBan">
                        <v-icon left class="mr-5" color="#FFFFFF">mdi-cart-outline</v-icon>
                        <router-link to="/signin" tag="span" style="cursor: pointer">
                            <v-icon left class="mr-5" color="#FFFFFF">mdi-login</v-icon>
                        </router-link>
                        <router-link to="/memberside" tag="span" style="cursor: pointer">
                            <v-icon left class="mr-6" color="#FFFFFF">mdi-account-circle-outline</v-icon>
                        </router-link>
                    </div>
                </div>
                <!-- ----------------------------------------------- -->
                <div class="banContent">
                    <div class="disappear"></div>
                    <div class="bigC" style="width: 1000px; height: 500px; position: absolute; z-index: 20; top: -10%; left: 19%; opacity: 0;">
                        <img class="circle" src="../assets/index-banner/ring.png">
                        <img class="logoImgC" src="../assets/small_logowhite-transparent.png" style="width:200px; position: absolute; top: 45%; left: 38%; opacity: .5;">
                    </div>
                    <div class="bigB" style="width: 1000px; height: 500px; position: absolute; z-index: 20; top: -10%; left: 18%; opacity: 0;">
                        <img class="circleT" src="../assets/index-banner/ring.png">
                    </div>
                    <img class="mocaR" src="../assets/index-banner/ctwo.png" style="position: absolute; width: 700px; top: 230px; left: -70%;">
                    <img src="../assets/index-banner/btwo.png" style="width: 100%;">
                    <div style="width: 500px; height: 200px; position: absolute; top: 150px; right:200px;" class="alltitle">
                        <div style="color: #FFFFFF; opacity: 0;" class="text-h4 font-weight-bold mt-5 btitle">WELCOME TO THEVROOM</div>
                        <div style="width: 0px; height: 4px; background-color: #F34841;" class="bline mt-3"></div>
                    </div>
                    <div class="banBtn" style="position: absolute; top: 13%; right: 35%;">
                        <v-btn rounded color="#F34841" class="inbtn" style="opacity: 0;" dark to="/auctionoverview">
                        競標場入口
                        </v-btn>
                    </div>
                </div>
            </div>
        </media>
        <!-- --------------mobile--------------- -->
        <media :query="{ maxWidth: '400px' }">
            <div>
                <rwd-index-banner/>
            </div>
        </media>
    </div>
</template>

<script>
import Media from 'vue-media'
import RwdIndexBanner from '../components/RwdIndexBanner.vue'
import gsap from 'gsap'

export default {
  components: {
    Media,
    RwdIndexBanner
  },
  mounted () {
    setTimeout(function () {
      gsap.timeline()
        .to('.bigC', {
          y: 630,
          duration: 1.5,
          opacity: 1,
          ease: 'slow'
        })
        .to('.bigB', {
          y: 630,
          duration: 1.5,
          opacity: 1,
          delay: -1.5,
          ease: 'slow'
        })
        .to('.bigC', {
          x: 1300,
          duration: 3,
          delay: 0.2,
          ease: 'power'
        })
        .to('.bigB', {
          x: 1300,
          duration: 3,
          ease: 'rough',
          delay: -2.8
        })
        .to('.disappear', {
          height: 0,
          duration: 1,
          delay: -2,
          ease: 'slow'
        })
        .to('.navbar', {
          y: 0,
          duration: 1,
          opacity: 1,
          delay: -0.5,
          ease: 'slow'
        })
        .to('.mocaR', {
          x: 1400,
          duration: 2,
          opacity: 1,
          delay: -0.5
        })
        .to('.btitle', {
          duration: 2,
          opacity: 1,
          delay: -0.5
        })
        .to('.bline', {
          width: '200px',
          duration: 2,
          opacity: 1,
          delay: -2
        })
        .to('.inbtn', {
          opacity: 1,
          duration: 1,
          delay: -2
        })
    }, 0)
  }
}
</script>

<style lang="scss">
.indexBan{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #181818;
    .navbar{
        position: absolute;
        width: 100%;
        height: 64px;
        .logoBan{
            .logoImg{
                width: 200px;
            }
        }
        .listLine{
            list-style: none;
            color: #FFFFFF;
        }
    }
    .banContent{
        width: 100%;
        height: 700px;
        margin: 0 auto;
        .banleft{
            width: 500px;
            height: 700px;
            .indexTitle{
                color: #FFFFFF;
            }
            .indexline{
                width: 400px;
                height: 5px;
                background-color: #F34841;
            }
        }
        .disappear{
            width: 100vw;
            height: 100vh;
            position: absolute;
            background-color: black;
            z-index: 10;
        }
        .circle{
            width: 100%;
            position: absolute;
            z-index: 11;
            // left: 15%;
            // top: 1.8%;
            opacity: .4;
            animation: rCircle 2s linear infinite;
        }
        .circleT{
            width: 100%;
            position: absolute;
            z-index: 11;
            // left: 15%;
            // top: 2%;
            opacity: .4;
            animation: rCircle 2s linear infinite;
        }
    }
}
@keyframes rCircle {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
