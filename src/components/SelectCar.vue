<template>
    <div class="wholepage">
        <div class="leftpart">
            <the-headline titleName="近期競標場次"></the-headline>
            <div v-for="(item, index) in carList" :key="item.id" class="leftitem">
                <div :class="{ addcolor:index == count}" @click="addBg(index)">{{ item.carname }}</div>
            </div>
        </div>
        <div class="rightpart">
            <div class="carImg">
                <img :src="showImg">
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      count: 0,
      showImg: require('../assets/index-select-car/car1.jpg'),
      carList: [
        { classname: 'one', carname: '01  BMW M2 Competition', id: '1' },
        { classname: 'two', carname: '02  M-Benz GLC 200 4MATIC', id: '2' },
        { classname: 'three', carname: '03  BMW X4 competition', id: '3' },
        { classname: 'four', carname: '04  Bentley Continental GT', id: '4' },
        { classname: 'five', carname: '05  LAND ROVER Discovery Sport', id: '5' }
      ],
      carImg: [
        { classname: 'nbone', src: require('../assets/index-select-car/car1.jpg'), id: '0' },
        { classname: 'nbtwo', src: require('../assets/index-select-car/car2.png'), id: '1' },
        { classname: 'nbthree', src: require('../assets/index-select-car/car3.jpg'), id: '2' },
        { classname: 'nbfour', src: require('../assets/index-select-car/car4.jpg'), id: '3' },
        { classname: 'nbfive', src: require('../assets/index-select-car/car5.jpg'), id: '4' }
      ]
    }
  },
  methods: {
    addBg (index) {
      this.count = index
      this.showImg = this.carImg[index].src
      console.log(this.carImg[index].src)
    }
  }
}

</script>

<style lang="scss" scoped>
.wholepage {
    height: 100vh;
    background-color: #181818;
    display: flex;
    .leftpart {
    border: 1px solid yellow;
    width: 50%;
    display: flex;
    flex-direction: column;
        .leftitem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid blue;
        height: 16%;
        color: #FFFFFF;
        font-size: 35px;
        padding-left: 30px;
        }
        .titlebox{
        display: flex;
        border: 1px solid blue;
        flex-direction: column;
        justify-content: center;
        height: 18%;
        color: #FFFFFF;
        }
    }
    .rightpart {
    border: 1px solid green;
    width: 50%;
        .nbone{
            width: 200px;
        }
        .nbtwo{
            width: 200px;
        }
        .nbthree{
            width: 200px;
        }
        .nbfour{
            width: 200px;
        }
        .nbfive{
            width: 200px
        }
    }
}
.addcolor{
    background-color: #F34841;
}

</style>
