<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="normalSize">
        <div class="banner">
          <img :src="big" alt="圖壞了" />
        </div>
        <!-- <transition name="fade"> -->
        <!-- <shoplist :to='signset' style="position:fixed;top:150px;right:0" :shoplist1="shoplist1" class="testani" v-if="test"/> -->
        <!-- </transition> -->
        <!-- <v-btn @click="showlist">123</v-btn> -->
        <!-- <shoplist :to='signset' style="position:fixed;top:150px;right:0" :shoplist1="shoplist1" class="testani"/> -->
        <!-- <v-btn @click="showlist">123</v-btn> -->
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
              v-for="product in filteredBlogs"
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
                        <img :src="product.PRODUCTIMG" alt="圖壞了" class="itemimg" />
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
              <span class="text-subtitle-2 font-weight-bold">{{product.PRODUCTNAME}}</span>
              <br />
              <span style="display:none;">{{product.SORT}}</span>
              <span
                class="price"
                style="color: #f34841; font-size: 14px; font-weight: bold"
              >
                ${{ product.PRODUCTPRICE }}</span
              >
              <img
                :src="shoppingcart"
                alt="圖壞了"
                title="加入購物車"
                class="shopcart"
                @click="putinshopcar($event)"
              />
                <!-- @click="linkshop()" -->
              <img :src="goshopping" alt="圖壞了" class="goshopping" />
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
// import shoplist from '../components/shoplist.vue'
import gsap from 'gsap'

export default {
  components: {
    Media,
    'a-rwd': AccRwd
    // shoplist
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    this.tween = gsap
      .to('.testani', {
        x: 200,
        duration: 1
      })
      .reverse()
  },
  async created () {
    // console.log(this.shoplist1)
    // console.log(this.$store.getters.getshoplist)
    // this.$store.dispatch('shoplist', this.shoplist1)
    // this.shoplist1 = this.$store.getters.getshoplist
    // console.log(this.shoplist)
    const response = await fetch('http://localhost:8080/phpfile/acc.php')
    const responsedata = await response.json()
    // alert('456')
    console.log(response)
    console.log(responsedata)
    // this.productList.push(responsedata)
    this.productList = responsedata
    // console.log(this.productList)
  },
  data () {
    return {
      test: false,
      countnum: 1,
      shoplist1: [],
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
    showlist () {
      this.test = !this.test
    },
    async putinshopcar (event) {
      // console.dir(event.target.parentElement.children[2].textContent)
      const fd = new FormData()
      fd.append('PRODUCTNAME', event.target.parentElement.children[2].textContent)
      const res = await fetch('http://localhost:8080/phpfile/shopselect.php', {
        method: 'POST',
        body: fd
      })
      const resdata123 = await res.json()
      resdata123[0].PRODUCTMOUNT = 1
      resdata123[0].PRODUCTTOTAL = resdata123[0].PRODUCTPRICE
      console.log({ ...resdata123 })
      const index = this.shoplist1.findIndex((list) => {
        return event.target.parentElement.children[2].textContent === list[0][2]
      })
      console.log(index)
      if (index === -1) {
        this.shoplist1.push({ ...resdata123 })
      } else {
        this.shoplist1[index][0].PRODUCTMOUNT += 1
        this.shoplist1[index][0].PRODUCTTOTAL = parseInt(this.shoplist1[index][0].PRODUCTPRICE) + (parseInt(this.shoplist1[index][0].PRODUCTPRICE) * (parseInt(this.shoplist1[index][0].PRODUCTMOUNT) - 1))
      }
      console.log(this.shoplist1)
      this.$store.dispatch('shoplist', this.shoplist1)
      console.log(this.$store.getters)
      localStorage.setItem('shoplist', JSON.stringify(this.shoplist1))
      // this.shoplist.forEach(list => {
      //   if (event.target.parentElement.children[2].textContent === list[0][2]) {
      //     alert('此商品已在購物車')
      //   } else {
      //     }
      // })
      // console.log(this.shoplist1.forEach(shoplist => {
      // console.log(shoplist[0][2])
      // }))
    },
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
        return product.SORT.match(this.itemname)
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
  // .testani{
  //   transform: translateX(400px);
  // }
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
        padding: 10px 30px;
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
