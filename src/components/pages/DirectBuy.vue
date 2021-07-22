<template>
  <div class="indexproductall">
    <div class="d-flex justify-center">
       <the-headline titleName="直購區" style="color:black" class="my-8"></the-headline>
    </div>
    <div class="indexproduct1">
      <div class="indexproductsection" v-for="item in product" :key="item.id">
        <div class="indexproductborder"></div>
        <h2>{{ item.title }}</h2>
        <div class="indexproductsection1">
          <v-btn rounded color="white" large class="ml-15 mt-15">
            Shop now <i class="fas fa-shopping-cart"></i>
          </v-btn>
          <img :src="item.src" alt="圖壞了" />
        </div>
      </div>
    </div>
    <div class="indexproduct2 ma-auto" style="width:1200px;overflow:hidden">
      <div class="carousel" style="width:80%">
        <v-carousel style="width:95%" height="500" hide-delimiter-background show-arrows-on-hover class="d-flex justify-center">
          <template style="width:850px;" v-slot:prev="{ on, attrs }">
            <v-btn
              color="transparent"
              v-bind="attrs"
              v-on="on"
              @click="move"
              >Previous Car</v-btn
            >
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
              color="transparent"
              v-bind="attrs"
              v-on="on"
              @click="back"
              >Next Car</v-btn
            >
          </template>
          <v-carousel-item
            v-for="item in items"
            :key="item.id"
            :src="item.src"
            width="850"
            ref="carinfo"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="indexcarinfo">
        <div class="indexcarinfo1">
          <h1>{{ brand }}</h1>
          <h2>{{ type }}</h2>
          <ul style="list-style: none;" class="indexcarinfo2">
            <li>車門數:{{ door }}</li>
            <li>動力特色:{{ info }}</li>
            <li>馬力:{{ power }}</li>
            <li>平均油耗:{{ liters }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: [
        {
          id: '1',
          title: '輪胎專區',
          src: require('../../assets/index-car-pic/indexpicwheel.png')
        },
        {
          id: '2',
          title: '汽車零件專區',
          src: require('../../assets/index-car-pic/indexpicproduct.gif')
        },
        {
          id: '3',
          title: '其他商品',
          src: require('../../assets/index-car-pic/indexpicother.png')
        }
      ],
      items: [
        {
          id: '1',
          src: require('../../assets/index-car-pic/benzglc.png')
        },
        {
          id: '2',
          src: require('../../assets/index-car-pic/benzgle1.png')
        },
        {
          id: '3',
          src: require('../../assets/index-car-pic/benzgle2.png')
        },
        {
          id: '4',
          src: require('../../assets/index-car-pic/bmw7.png')
        },
        {
          id: '5',
          src: require('../../assets/index-car-pic/evoque1.png')
        }
      ],
      carbrands: [
        {
          id: '0',
          brand: 'Mercedes-Benz',
          type: 'GLE43',
          door: '5門5人座',
          info: '渦輪增壓, 直列6缸, DOHC雙凸輪軸, 24氣門',
          power: '272hp@3400~4600rpm',
          liters: '平均 13.1km/ltr'
        },
        {
          id: '1',
          brand: 'Mercedes-Benz',
          type: 'GLE300',
          door: '5門5人座',
          info: '渦輪增壓, 直列4缸, DOHC雙凸輪軸, 16氣門',
          power: '212hp@2400~4500rpm',
          liters: '平均 15.5km/ltr'
        },
        {
          id: '2',
          brand: 'BMW',
          type: 'X5',
          door: '5門5人座',
          info: '渦輪增壓, 直列4缸, DOHC雙凸輪軸, 16氣門',
          power: '225hp@3400~4600rpm',
          liters: '平均 11.8km/ltr'
        },
        {
          id: '3',
          brand: 'BMW',
          type: 'M2C',
          door: '2門2人座',
          info: '渦輪增壓, 直列6缸, DOHC雙凸輪軸, 24氣門',
          power: '370hp@3400~4600rpm',
          liters: '平均 9.5km/ltr'
        },
        {
          id: '4',
          brand: 'Land-Rover',
          type: 'Evoque',
          door: '5門5人座',
          info: '渦輪增壓, 直列4缸, DOHC雙凸輪軸, 24氣門',
          power: '222hp@3400~4600rpm',
          liters: '平均 12.1km/ltr'
        }
      ],
      count: 0
    }
  },
  methods: {
    move () {
      if (this.count < 0.1) {
        this.count = 5
      }
      this.count--
    },
    back () {
      if (this.count > 3.9) {
        this.count = -1
      }
      this.count += 1
      console.log(this.count)
    }
  },
  computed: {
    brand () {
      return this.carbrands[this.count].brand
    },
    type () {
      return this.carbrands[this.count].type
    },
    door () {
      return this.carbrands[this.count].door
    },
    info () {
      return this.carbrands[this.count].info
    },
    power () {
      return this.carbrands[this.count].power
    },
    liters () {
      return this.carbrands[this.count].liters
    }
  }
}
</script>

<style lang="scss">
.indexproductall {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  .titlebox .auctiontitle {
    flex-direction: row;
    color: black;
  }
  .indexproduct1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .indexproductsection {
    z-index: 10;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    h2 {
      padding-top: 15px;
    }
    .indexproductborder {
      border: 1px solid grey;
      height: 200px;
      width: 300px;
      position: absolute;
      transform: skew(-20deg, 0deg);
      z-index: -1;
    }
    .indexproductsection1 {
      img {
        width: 150px;
        height: 200px;
      }
      display: flex;
    }
  }
  .indexproduct2 {
    display: flex;
    width: 100%;
    .v-image__image--cover {
    background-size:contain ;
      }
    .indexcarinfo {
      display: flex;
      align-items: center;
      .indexcarinfo1 {
        width: 350px;
        .indexcarinfo2{
          margin-top: 30px;
          text-align: left;
          margin-left: 70px;
          li{
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
