<template>
  <div class="auctionWhole">
    <div class="carNav">
      <div class="btnup d-flex justify-center" v-if="show">
        <v-icon x-large @click="carUp">mdi-chevron-up</v-icon>
      </div>
      <div class="carimgIn d-flex flex-column align-center">
        <img v-for="car in carimgIn" :src="car.src" :key="car.id">
      </div>
      <div class="btndown d-flex justify-center" v-if="show">
        <v-icon x-large @click="carDown">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div class="auctionContent"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
    length: 3,
    window: 0,
    carimgIn: [
      { id: '0', src: require('../../assets/carlist/benz10.png') },
      { id: '1', src: require('../../assets/carlist/benz11.png') },
      { id: '2', src: require('../../assets/carlist/benz12.png') },
      { id: '3', src: require('../../assets/carlist/benzgclass.png') },
      { id: '4', src: require('../../assets/carlist/bmw7.png') },
      { id: '5', src: require('../../assets/carlist/gtr1.png') }
    ]
  })
}
</script>

<style lang="scss">
  .auctionWhole{
    .carNav{
      width: 300px;
      height: calc(100vh - 48px);
      overflow: hidden;
      position: relative;
    }
    .btnup{
      width: 300px;
      height: 50px;
      background-color: orange;;
    }
    .carimgIn{
      width: 300px;
      height: 1500px;
      background-color: tomato;
      img{
        width: 220px;
      }
    }
    .btndown{
      width: 300px;
      height: 50px;
      background-color: orange;
      position: absolute;
      bottom: 0;
    }
  }
</style>
