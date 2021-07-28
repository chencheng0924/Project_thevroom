<template>
    <div id="app">
          <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841">胎內胎壓偵測器 共3項</span>
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
      productList: [
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
          pid: 21,
          imgURL: require('../assets/accessories-pic/aboutwheel/orange_inside.jpeg'),
          id: 'inside_wheel7988',
          title: '儀錶板整合型胎壓偵測器',
          size: 'OrangeVW/Audi/Skoda專用',
          price: '$7988',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        },
        {
          pid: 23,
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_4980.jpeg'),
          id: 'inside_4980',
          title: 'ORO TPMS W410 無線胎壓偵測器',
          price: '$4980',
          ds: [
            '國內胎壓偵測器大廠ORO Sensor',
            '省電型，可用時間更長',
            '胎內式感知器，媲美原廠配備',
            '搭配高質感螢幕，胎壓資訊一目了然',
            '讓爆胎的夢魘遠離，保障您的行車安全'
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
      // border:1px solid black;
      margin: 10px 15px;
      img {
        height: 250px;
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
 </style>
