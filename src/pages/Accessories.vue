<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="normalSize">
        <div class="banner">
          <img :src="big" alt="圖壞了" />
        </div>
        <h1><img :src="house" alt="圖壞了" /> 配件專區</h1>
        <div class="main">
          <div class="aside">
            <span class="search text-h6 font-weight-bold">搜尋配件</span>
            <v-treeview
              v-model="tree"
              rounded
              hoverable
              activatable
              :items="items"
              selected-color="#f34841"
              open-on-click
              style="margin-top: 30px; cursor: pointer"
            >
              <template slot="label" slot-scope="{ item }">
                <div
                  @click="filterItem(item)"
                >
                  <!-- :class="{ block:itemname === currentsort}" -->
                  {{ item.name }}
                </div>
              </template>
            </v-treeview>
            <!-- <img :src="search" alt="圖壞了"> -->
            <!-- <input type="text" v-model="search" placeholder="搜尋" /> -->
          </div>
          <div class="productpart">
            <div
              class="productlist"
              v-for="product in productList"
              :key="product"
            >
              <!-- :class="{block:itemname === currentsort}" -->
              <div class="linkdetail">
                  <template>
                    <div class="text-center">
                      <v-dialog
                        v-model="dialog"
                        width="500"
                      >
                        <template v-slot:activator="{ on, attrs }">
                        <span
                          v-bind="attrs"
                          v-on="on"
                        >
                        <img :src="product.imgURL" alt="圖壞了" class="itemimg" />
                        </span>
                        </template>
                        <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          商品細項
                        </v-card-title>

                        <v-card-text>
                            {{product.PRODUCTINFO}}
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            加入購物車
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
              </div>
              <br />
              <span class="text-subtitle-1 font-weight-bold">{{product.PRODUCTNAME}}</span>
              <br />
              <span style="display:none;">{{product.SORT}}</span>
              <span
                class="price"
                style="color: #f34841; font-size: 16px; font-weight: bold"
              >
                ${{ product.PRODUCTPRICE }}</span
              >
              <img
                :src="shoppingcart"
                alt="圖壞了"
                title="加入購物車"
                class="shopcart"
                @click="linkshop()"
              />
              <img :src="goshopping" alt="圖壞了" class="goshopping" />
              <!-- <div class="detail">
                <template>
                  <div class="text-center">
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="#181818 lighten-2"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          style="width: 80px; height: 30px; font-size: 13px"
                        >
                          立即選看
                        </v-btn>
                      </template>
                      <v-card style="height: 365px">
                        <v-card-title class="text-h5 orange lighten-2">
                          商品細項
                        </v-card-title>

                        <v-card-text style="height: 250px">
                          <ol class="d-flex flex-column justify-center">
                            <li
                              style="line-height: 3"
                              v-for="item in productList"
                              :key="item.PRODUCTINFO"
                            >
                              {{ item }}
                            </li>
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
                </template>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </media>
    <media :query="{ maxWidth: '400px' }">
      <div>
        <component :is="'a-rwd'" class="component"></component>
      </div>
    </media>
  </div>
</template>
<script>
// import RwdBanner from '../components/layout/RwdBanner.vue'
import Media from 'vue-media'
import AccRwd from '../components/AccRwd.vue'
export default {
  components: {
    Media,
    'a-rwd': AccRwd
  },
  async created () {
    const response = await fetch('http://localhost:8080/phpfile/acc.php')
    const responsedata = await response.json()
    // alert('456')
    console.log(response)
    console.log(responsedata)
    // this.productList.push(responsedata)
    this.productList = responsedata
    console.log(this.productList)
  },
  data () {
    return {
      pathimg: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      big: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      house: require('../assets/accessories-pic/house.png'),
      shoppingcart: require('../assets/accessories-pic/shopcart.png'),
      goshopping: require('../assets/accessories-pic/shopping.png'),
      search: '',
      itemname: null,
      currentsort: null,
      items: [
        {
          id: 1,
          name: '雨刷',
          // active: false,
          children: [
            { id: 2, name: '硬骨型' },
            { id: 3, name: '軟骨型' },
            { id: 4, name: '後窗專用型' }
          ]
        },
        {
          id: 5,
          name: '各式燈款',
          children: [
            { id: 6, name: '方向燈/煞車燈' },
            { id: 7, name: '牌照燈' }
          ]
        },
        {
          id: 8,
          name: '音響',
          children: [
            { id: 9, name: '高音揚聲器' },
            { id: 10, name: '低音砲管' }
          ]
        },
        {
          id: 11,
          name: '胎壓偵測器',
          children: [
            { id: 12, name: '胎內' },
            { id: 13, name: '胎外' }
          ]
        },
        {
          id: 14,
          name: '救車/哇電/警告標誌',
          children: [
            { id: 15, name: '電源供應器' },
            { id: 16, name: '千斤頂' },
            { id: 17, name: '警告標示' }
          ]
        }
      ],
      productList: []
    }
  },
  methods: {
    linkshop () {
      document.querySelector('.goshopping').style.display = 'inline'
      document.querySelector('.shopcart').style.display = 'none'
      setTimeout(() => this.$router.push({ path: '/shoppingcar' }), 400)
    },
    filterItem (item) {
      // console.log(item.id)
      // console.log(key)
      // console.log(this.items)
      // item.active = true
      // console.log(item)
      this.itemname = item.name
      console.log(this.itemname)
      // console.log(this.productList)
    },
    filterProduct (product) {
      this.currentsort = product.sort
      console.log(product.sort)
    }
  },
  computed: {
    filteredBlogs: function () {
      return this.productList.filter((product) => {
        return product.title.match(this.search)
      })
    }
  }
}
// filters ('filterProduct',function (product) {
//   this.currentsort = product.sort
//    })
</script>
<style lang='scss' scoped>
div.normalSize {
  div.banner {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  h1 {
    margin: 50px auto;
    width: 1200px;
    img {
      width: 30px;
    }
  }
  .-active {
    color: #f34841;
  }
  div.main {
    width: 1200px;
    margin: 0 auto;
    // display: flex;
    // justify-content: left;
    div.aside {
      width: 250px;
      line-height: 4.5;
      margin-right: 80px;
      float: left;
      position: relative;
      // position: fixed;
      // left: 30px;
      // top:570px;
      span.search {
        color: #ffffff;
        background-color: #181818;
        width: 250px;
        padding: 15px 50px;
        text-align: center;
      }
      // img{
      //   height:30px;
      //   margin-top: 10px;
      // }
      input {
        border: 2px solid#181818;
        border-radius: 10px;
        height: 45px;
        width: 150px;
        margin-left: 10px;
        text-align: center;
      }
      // img,input{
      //   display: inline-block;
      // }
    }
    .block{
      display: block;
    }
    .hidden{
      display: hidden;
    }
    div.productpart {
      display: flex;
      flex-wrap: wrap;
      justify-content: right;
      // height:600px;
      // overflow: scroll;
      // position: absolute;
      div.productlist {
        width: calc(33.33% - 40px);
        background-color: #ffffff;
        // border:1px solid black;
        text-align: center;
        // padding: 20px 30px;
        margin: 20px 10px;
        box-shadow: white 0 0px 1px, black 1px 0px 2px, white -1px 0px 2px;
        &:hover {
          transform: scale(1.1);
        }
        img.itemimg {
          width: 100%;
        }
        img.shopcart {
          height: 20px;
          cursor: pointer;
          position: relative;
        }
        img.goshopping {
          height: 20px;
          display: none;
        }
        div.detail {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
