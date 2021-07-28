<template>
    <div id="app">
          <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841">低音砲管 共3項</span>
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
          pid: 11,
          imgURL: require('../assets/accessories-pic/speaker/speaker.jpg'),
          id: 'speaker1500',
          title: 'BOSS 音頻SVC低音炮',
          size: 'P10SVC 1200W',
          price: '$1500',
          ds: [
            '許多現代車輛的空間有限，因此很難安裝傳統的低音炮。我們設計了一系列低調的低音炮， 以適應這些深度受限的空間，以提供優質的音頻性能，而不會因缺乏深度而受到影響'
          ]
        },
        {
          pid: 12,
          imgURL: require('../assets/accessories-pic/speaker/speaker_3.jpg'),
          id: 'speaker4800',
          title: 'Sondpex雙端口無源低音炮外殼',
          size: ' 450W 帶 2"x5" 喇叭高音揚聲器和LED',
          price: '$5500',
          ds: [
            '通用 8" 雙端口無源 450W 低音炮外殼，帶有兩個 2"x5" 喇叭高音揚聲器和 Sondpex® 的 LED。 使用 Sondpex 的這款產品為您的立體聲系統添加重擊聲，開始派對。'
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
