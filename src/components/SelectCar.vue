<template>
    <div class="wholepage">
        <div class="leftpart">
            <the-headline titleName="近期競標場次"></the-headline>
            <div v-for="(item, index) in carList" :key="item.id" class="leftitem" :class="{ addcolor:index == count}" @click="addBg(index)">
                <div>{{ item.carname }}</div>
                <div :class="{ viewbar:index == count}" class="viewcolor">{{ viewtag }}</div>
            </div>
        </div>
        <div class="rightpart">
            <div class="carImg">
                <img :src="showImg" class="imgSize">
            </div>
            <div class="timer">01:08:54:36''</div>
        </div>
    </div>
    <div class="rightpart">
      <div></div>
      <div></div>
      <the-headline></the-headline>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      count: 0,
      viewtag: '',
      showImg: require('../assets/index-select-car/car1.jpg'),
      carList: [
        { classname: 'one', carname: '01  BMW M2 Competition', id: '1' },
        { classname: 'two', carname: '02  M-Benz GLC 200 4MATIC', id: '2' },
        { classname: 'three', carname: '03  BMW X4 competition', id: '3' },
        { classname: 'four', carname: '04  Bentley Continental GT', id: '4' },
        { classname: 'five', carname: '05  LAND ROVER Discovery Sport', id: '5' }
      ],
      carImg: [
        { classname: 'nbone', src: require('../assets/index-select-car/car6.jpeg'), id: '0' },
        { classname: 'nbtwo', src: require('../assets/index-select-car/car1.jpg'), id: '1' },
        { classname: 'nbthree', src: require('../assets/index-select-car/car5.jpg'), id: '2' },
        { classname: 'nbfour', src: require('../assets/index-select-car/car4.jpg'), id: '3' },
        { classname: 'nbfive', src: require('../assets/index-select-car/car3.jpg'), id: '4' }
      ]
    }
  },
  methods: {
    addBg (index) {
      this.count = index
      this.showImg = this.carImg[index].src
    //   console.log(this.carImg[index].src)
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
    position: relative;
    z-index: 10;
        .leftitem{
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: 1px solid blue;
        height: 16%;
        color: #FFFFFF;
        font-size: 35px;
        padding-left: 30px;
        cursor: pointer;
            &:hover{
                background-color: rgba($color: #F34841, $alpha: 0.5)
            }
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
    }
    
  .rightpart {
    border: 1px solid green;
    width: 50%;
    transform: translateX(-100px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
        .imgSize{
            width: 800px;
            margin-top: 100px;
        }
        .timer{
            border: 1px solid yellow;
            text-align: end;
            font-size: 40px;
            color: #FFFFFF;
            font-weight: blod;
        }
    }
    
.addcolor{
    background-color: #F34841;
}
.viewbar{
    border: 1px solid yellow;
    height: 100%;
    width: 100px;
    background-color: #FFFFFF;
}
</style>
