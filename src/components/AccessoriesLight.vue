<template>
    <div id="app">
          <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841">小燈/方向燈/煞車燈 共6項</span>
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
          pid: 6,
          imgURL: require('../assets/accessories-pic/light/broad_1288.jpeg'),
          id: 'light1288',
          title: 'RF 牌照燈組Yaris',
          price: '$1288',
          ds: [
            '壽命較傳統鹵素燈泡長',
            '高亮度，採用台灣大廠LED',
            '型號與原車一致，不需改線路，直接安裝',
            '低耗能，有效減少電路、電瓶負擔'
          ]
        },
        {
          pid: 7,
          imgURL: require('../assets/accessories-pic/light/broad_audi1288.jpeg'),
          id: 'lightaudi1288',
          title: 'RF牌照燈組AUDI A4/A5/Q5 ',
          price: '$1288',
          ds: [
            '壽命較傳統鹵素燈泡長',
            '高亮度，採用台灣大廠LED',
            '型號與原車一致，不需改線路，直接安裝',
            '低耗能，有效減少電路、電瓶負擔'
          ]
        },
        {
          pid: 8,
          imgURL: require('../assets/accessories-pic/light/light_t10.jpeg'),
          id: 'lightblue780',
          title: '【OSRAM】T10 LED藍光 ',
          size: 'OSRAM 2880BL 2入',
          price: '$780',
          ds: [
            '不需改裝，安裝簡易，各種車款皆適用',
            '創新照明科技，2次光學設計不刺眼，行車更安全',
            'LED壽命達5000小時',
            '與標準燈相比節能效益達80%'
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
          pid: 10,
          imgURL: require('../assets/accessories-pic/light/light_stop930.jpeg'),
          id: 'lightstop930',
          title: 'FOCUS MK3專用煞車燈',
          size: '2入',
          price: '$930',
          ds: [
            '紅光如火焰般火紅、完美焊接點 精良組奘品質',
            '長時間點亮不會光衰',
            'LED溫度遠較燈泡低，不會將燈座熔掉',
            '燈泡只要點燈5秒鐘，就燙到手無法摸；而LED只是微溫'
          ]
        },
        {
          pid: 23,
          imgURL: require('../assets/accessories-pic/light/light_699id22.jpeg'),
          id: 'lightstop699',
          title: 'PHILIPS LED 單芯煞車燈',
          size: '白光 T20',
          price: '$699',
          ds: [
            '明亮奪目，即點即亮',
            '耐用及長效的LED光源',
            '光效均勻發散，增加被視性',
            '安裝簡易，適用於多種車款',
            '2年有限保固'
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
