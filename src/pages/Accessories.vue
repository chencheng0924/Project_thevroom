<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div>
    <div class="banner">
      <img style="width:100%;height:700px" :src="big" class="big" />
    </div>
    <div
      style="width:100%"
      class="ma-auto my-10 d-flex flex-column justify-center align-center"
    >
      <div class="align-self-start ma-auto" style="width:80%">
        <h1 text-h4 font-weight-bold>
          <img :src="house" class="house" /> / 配件專賣區
        </h1>
      </div>
      <div class="main">
        <div class="accessories" style="postition:sticky;">
          <span class="search">搜尋配件</span>
          <ul class="productList">
            <span class="grouptitle"
            :class="{'-active':component === 'a-rain'}"
                  @click="component='a-rain'"
                  style="cursor:pointer;">雨刷</span>
            <li :class="{'-active':component === 'a-stiff-rain'}"
                        @click="component='a-stiff-rain'">硬骨型</li>
            <li :class="{'-active':component === 'a-soft-rain'}"
                         @click="component='a-soft-rain'">軟骨型</li>
            <li :class="{'-active':component === 'a-back-rain'}"
                   @click="component='a-back-rain'">後窗專用型</li>
          </ul>
          <ul class="productList">
            <span class="grouptitle"
            :class="{'-active':component === 'a-light'}"
                  @click="component='a-light'"
                  style="cursor:pointer;">小燈/方向燈/煞車燈</span>
            <li :class="{'-active':component === 'a-small-light'}"
                      @click="component='a-small-light'">小燈/方向燈/第三煞車燈</li>
            <li :class="{'-active':component === 'a-broad-light'}"
                      @click="component='a-board-light'" >牌照燈</li>
          </ul>
          <ul class="productList">
            <span class="grouptitle"
            :class="{'-active':component === 'a-speaker'}"
                  @click="component='a-speaker'"
                  style="cursor:pointer;">音響</span>
            <li :class="{'-active':component === 'a-speaker-high'}"
                  @click="component='a-speaker-high'"
                  style="cursor:pointer;">高音揚聲器</li>
            <li :class="{'-active':component === 'a-speaker-low'}"
                  @click="component='a-speaker-low'"
                  style="cursor:pointer;">低音砲管</li>
          </ul>
          <ul class="productList">
            <span class="grouptitle"
            :class="{'-active':component === 'a-wheel'}"
                  @click="component='a-wheel'"
                  style="cursor:pointer;">胎壓偵測器</span>
            <li :class="{'-active':component === 'a-inside-wheel'}"
                  @click="component='a-inside-wheel'"
                  style="cursor:pointer;">胎內</li>
            <li :class="{'-active':component === 'a-outside-wheel'}"
                  @click="component='a-outside-wheel'"
                  style="cursor:pointer;">胎外</li>
          </ul>
          <ul class="productList">
            <span class="grouptitle"
            :class="{'-active':component === 'a-save'}"
                  @click="component='a-save'"
                  style="cursor:pointer;">救車/哇電/警告標誌</span>
            <li
            :class="{'-active':component === 'a-power'}"
                  @click="component='a-power'"
                  style="cursor:pointer;">電源供應器</li>
            <li
            :class="{'-active':component === 'a-kg'}"
                  @click="component='a-kg'"
                  style="cursor:pointer;">千斤頂</li>
            <li
            :class="{'-active':component === 'a-sign'}"
                  @click="component='a-sign'"
                  style="cursor:pointer;">警告標示</li>
          </ul>
        </div>
        <div class="productList">
          <component :is="component" class="component"></component>
          <div class="product" v-for="items in productList" :key="items">
            <img :src="items.imgURL" />
            <br />
            <span class="title text-subtitle-1 font-weight-bold">{{
              items.title
            }}</span>
            <span class="size">{{ items.size }}</span>
            <br />
            <div class="information d-flex justify-space-around align-center">
              <div class="price">{{ items.price }}</div>
              <!-- <span class="btn text-subtitle-1 font-weight-bold" style="cursor: pointer;"
                >立即選看</span> -->
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="white lighten-2"
                      v-bind="attrs"
                      v-on="on"
                      class="rounded-pill"
                    >
                      立即選看
                    </v-btn>
                  </template>

                  <v-card style="height:365px">
                    <v-card-title class="text-h5 orange lighten-2">
                      商品細項
                    </v-card-title>

                    <v-card-text style="height:250px">
                      <ol class="d-flex flex-column justify-center">
                        <li style="line-height:3" v-for="item in items.ds" :key="item">{{ item }}</li>
                      </ol>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text>
                      <router-link to="/shoppingcar">
                        加入購物車
                      </router-link>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <router-link to="/shoppingcar">
              <div
                class="black white--text btn text-subtitle-1 font-weight-bold rounded-pill py-1 px-3"
                style="cursor: pointer;"
              >
                加入購物車
              </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  </media>
      <media :query="{ maxWidth: '400px' }">
        <div>
          <div class="rwdbanner">
            <rwd-banner rwdtitle="配件專區" :pathImg="pathimg"></rwd-banner>
          </div>
          <div class="main">
          <component :is="'a-rwd'" class="component"></component>
          </div>
        </div>
      </media>
     </div>
</template>
<script>
import RwdBanner from '../components/layout/RwdBanner.vue'
import ARain from '../components/AccessoriesRain.vue'
import ALight from '../components/AccessoriesLight.vue'
import ASpeaker from '../components/AccessoriesSpeaker.vue'
import AWheel from '../components/AccessoriesWheel.vue'
import ASave from '../components/AccessoriesSave.vue'
import ASuggestion from '../components/AccessoriesSuggestion.vue'
import AccSoftRain from '../components/AccSoftRain.vue'
import AccStiffRain from '../components/AccStiffRain.vue'
import AccBackRain from '../components/AccBackRain.vue'
import AccSmallLight from '../components/AccSmallLight.vue'
import AccBoardLight from '../components/AccBroadLight.vue'
import AccSpeakerHigh from '../components/AccSpeakerHigh.vue'
import AccSpeakerLow from '../components/AccSpeakerLow.vue'
import AccInsideWheel from '../components/AccInsideWheel.vue'
import AccOutsideWheel from '../components/AccOutsideWheel.vue'
import AccKg from '../components/AccKg.vue'
import AccPower from '../components/AccPower.vue'
import AccSign from '../components/AccSign.vue'
import AccRwd from '../components/AccRwd.vue'
import Media from 'vue-media'

export default {
  components: {
    Media,
    RwdBanner,
    'a-rain': ARain,
    'a-light': ALight,
    'a-speaker': ASpeaker,
    'a-wheel': AWheel,
    'a-save': ASave,
    'a-suggestion': ASuggestion,
    'a-soft-rain': AccSoftRain,
    'a-stiff-rain': AccStiffRain,
    'a-back-rain': AccBackRain,
    'a-small-light': AccSmallLight,
    'a-board-light': AccBoardLight,
    'a-speaker-high': AccSpeakerHigh,
    'a-speaker-low': AccSpeakerLow,
    'a-inside-wheel': AccInsideWheel,
    'a-outside-wheel': AccOutsideWheel,
    'a-kg': AccKg,
    'a-power': AccPower,
    'a-sign': AccSign,
    'a-rwd': AccRwd
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  data () {
    return {
      component: 'a-suggestion',
      pathimg: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      big: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      house: require('../assets/accessories-pic/house.png')
    }
  }
}
</script>
<style lang="scss" scoped>
div.rwdbanner{
  display: none;
}
div.banner {
  img {
    max-width: 100%;
  }
}

h1 {
  margin-bottom: 40px;
  max-width:1200px;
  img {
    height: 30px;
  }
}

div.main {
  display: flex;
  flex: wrap;
  div.accessories {
    width: 300px;
    position: relative;
    > span.search {
      font-weight: bold;
      font-size: 20px;
      background-color: #181818;
      color: white;
      padding: 10px 70px;
      margin: 20px 10px;
    }
    span.btn {
      border: 1px solid #181818;
      border-radius: 20px;
      padding: 3px 15px;
      margin-left: 10px;
      vertical-align: middle;
      text-align: center;
      position: absolute;
      left: 0;
      width: 150px;
      transform: translateX(30%);
    }

    ul.productList {
      margin: 30px 10px;
      position: relative;
      // &:after {
      //   position: absolute;
      //   content: '';
      //   background-color: #bfbdbd;
      //   left: 0;
      //   top: 100%;
      //   width: 70%;
      //   height: 2px;
      //   margin-top: 15px;
      // }
      span {
        position: relative;
        font-weight: bold;
        font-size: 20px;
        &:after {
          content: '+';
          position: absolute;
          margin-left: 10px;
        }
      }
      li {
        list-style: none;
        margin: 15px 0;
        cursor: pointer;
      }
      span.-active{
        color:#f34841;
      }
      li.-active{
        color:#f34841;
      }
    }
  }

  div.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    width: 900px;
    div.product {
      width: 290px;
      // position: relative;
      // border:1px solid black;
      margin: 10px 5px;
      img {
        height: 250px;
        object-fit: contain;
      }
      span.title {
        font-size: 16px;
        font-weight: bold;
        height: 30px;
      }
      div.information {
        span.price {
          color: #f34841;
          font-size: 16px;
        }
        span.btn {
          border: 1px solid #181818;
          border-radius: 20px;
          padding: 3px 15px;
          font-size: 14px !important;
          margin-left: 10px;
          position: absolute;
          vertical-align: middle;
          position: relative;
        }
      }
    }
  }
}
</style>
