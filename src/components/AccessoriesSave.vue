<template>
    <div id="app">
          <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841"> 救車/哇電/警告標示 共4項</span>
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
          pid: 15,
          imgURL: require('../assets/accessories-pic/save/kgs850.webp'),
          id: 'kgs',
          title: '象王 車用油壓千斤頂',
          size: '5T',
          price: '$900',
          ds: [
            '愛車急救必備工具',
            '隨貨附贈：專屬精美收納盒',
            '使用簡單，粉領族都可輕易上手',
            '小巧好收納不佔車內空間',
            '多種用途，汽車、堆疊重物皆可使用'
          ]
        },
        {
          pid: 16,
          imgURL: require('../assets/accessories-pic/save/power2088_red.jpeg'),
          id: 'powerred',
          title: '電力坦克電源供應器 ',
          size: '4000cc 汽油',
          price: '$2088',
          ds: [
            'USB輸出兩組 可充 智慧型手機 總和為5V  3A輸出',
            'USB輸出等同行動電源24000mA',
            '內建3W LED 有4種模式 100%亮 50%亮 閃爍模式 長按SOS模式'
          ]
        },
        {
          pid: 17,
          imgURL: require('../assets/accessories-pic/save/sign150.jpeg'),
          id: 'sign',
          title: '警告標誌',
          price: '$150',
          ds: [
            '三角架裡的"驚嘆號"為鉚釘接合,無法另外拆除',
            '可折疊'
          ]
        },
        {
          pid: 18,
          imgURL: require('../assets/accessories-pic/save/sign_led.jpeg'),
          id: 'signled',
          title: '警告標誌 極光LED三角警示架',
          price: '$558',
          ds: [
            'LED燈亮光明顯，本產品含27顆高亮度LED燈，主動示警可以避免二次車禍。',
            '具發光與閃爍雙模式',
            '夜間可是距離達500公尺'
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
