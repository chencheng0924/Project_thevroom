<template>
    <div id="app">
          <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841">熱門配件共6項</span>
          <div class="productList">
          <div class="product" v-for="items in productList" :key="items">
            <img :src="items.imgURL" />
            <br />
            <span class="title text-subtitle-1 font-weight-bold">{{
              items.title
            }}</span>
            <br />
            <span class="size" style="font-size:12px;">{{ items.size }}</span>
            <br />
            <div class="information d-flex justify-space-around align-center">
              <div class="price" style="color:#f34841">{{ items.price }}</div>
              <br />
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
                      style="font-size:14px"
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
              <div style="background-color:#181818; color:#ffffff; padding:7px 10px; border-radius:20px; font-size:14px;" >
                加入購物車
               <!-- <img :src="shoppingcart" alt="" style="height:30px"> -->
              </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default ({
  data () {
    return {
      shoppingcart: require('../assets/accessories-pic/shopcart.png'),
      productList: [
        {
          pid: 2,
          imgURL: require('../assets/accessories-pic/rain/soft_rain_1068.jpeg'),
          id: 'softrain1068',
          title: 'PIAA 歐系通用雨刷 Si-TECH 軟骨',
          size: '24吋',
          price: '$1068',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        },
        {
          pid: 5,
          imgURL: require('../assets/accessories-pic/rain/stiff_rain245.webp'),
          id: 'stiffrain245',
          title: 'CARBUFF 硬骨雨刷',
          size: '12吋',
          price: '$245',
          ds: [
            '一般12吋雨刷大多用在後擋風玻璃',
            '採用日本膠條',
            '有效減緩玻璃摩擦',
            '有效降低異音產生',
            '可增加穩定度、撥水效果佳'
          ]
        },
        {
          pid: 9,
          imgURL: require('../assets/accessories-pic/light/light_stop100.jpeg'),
          id: 'lightstop100',
          title: '第三煞車燈 黃光橘光',
          price: '$100',
          ds: [
            '商品特點：採用黑色耐熱底座',
            '晶片種類：13顆 5050 SMD LED，側面3顆*4，正面1顆',
            '底座規格：T10',
            'LED是電子零件，為了給您最高品質的產品，我們一律使用抗靜電包裝防止LED遭靜電擊穿，確保產品的最高品質'
          ]
        },
        {
          pid: 13,
          imgURL: require('../assets/accessories-pic/speaker/speaker_4.jpg'),
          id: 'speaker4800',
          title: 'Audiopipe歐姆低音砲管',
          size: 'Audiopipe® - AP-DX',
          price: '$3600',
          ds: [
            'Audiopipe® 的通用 AP-DX 系列 10" 500W 4 歐姆單前向發射端口有源低音砲管。Audiopipe 提供的產品必定會擊中現場並滿足那些選擇完美性價比的客戶的目的。'
          ]
        },
        {
          pid: 19,
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_t254680.jpeg'),
          id: 'inside_wheel',
          title: 'TPMS胎內Mio MiTire T25 胎壓模組',
          price: '$3200',
          ds: [
            'MiTIRE T25 KIT USB式胎壓偵測套件，與行車記錄器完美結合。適當的胎壓與胎溫能有效預防爆胎事故，提高駕駛安全，同時能節省油耗與維持輪胎抓地力，並延長輪胎使用壽命，增加駕駛舒適性。MiTIRE T25 KIT通過NCC認證，是您最佳選擇。',
            '通過BSMI檢磁認證',
            '台灣設計、製造'
          ]
        },
        {
          pid: 20,
          imgURL: require('../assets/accessories-pic/aboutwheel/outside1190.jpeg'),
          id: 'outside_wheel',
          title: 'TTP-Q5外部太陽能胎壓胎溫偵測器',
          price: '$1190',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
  div.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    width: 900px;
    div.product {
      width: 290px;
      // position: relative;
      border:1px solid black;
      margin: 10px 20px;
      img {
        height: 250px;
        margin-top: 30px;
        object-fit: contain;
      }
      span.title {
        font-size: 16px;
        font-weight: bold;
        height: 30px;
      }
      span.size{
        position: relative;
        margin-bottom: 10px;
        &:after{
          content: "";
          position: absolute;
          height: 1px;
          width:250px;
          left: 0;
          top:100%;
          background-color: #bfbdbd;
        }
      }
      div.information {
        margin-top:5px;
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
@media(max-width:576px){
  rwd-banner{
    display: block;
  }
  img.big{
    display: none;
  }
  div.main{
    max-width: 100%;
  }
}

</style>
