<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div style="width :100%;">
        <div style="border: 1px solid black; border-radius: 10px; width: 600px; height: 900px; margin: 0 auto;" class="d-flex align-center justify-center">
          <div style="width: 560px; height: 860px;">
            <div style="border-bottom: 1px solid black; width: 100%; height: 172px" class="d-flex aa" v-for="notify in notifys" :key="notify">
              <div style="width: 22%; height:100%" class="d-flex align-center">
                <div style="width:120px; height: 120px">
                  <img :src="notify.img" style="width:100%; height: 100%">
                </div>
              </div>

              <div style="width: 60%; height:100%">
                <div style="width: 100%; height: 28%" class="text-subtitle-1 font-weight-medium d-flex align-end pl-4">{{ notify.title }}</div>
                <div style="width: 100%; height: 44%" class="text-subtitle-1 font-weight-medium d-flex align-center pl-4 pr-4">{{ notify.info }}</div>
                <div style="width: 100%; height: 28%" class="text-subtitle-1 font-weight-medium pl-4">{{ notify.time }}</div>
              </div>
              <div style="width: 18%; height:100%" class="d-flex align-center">
                <v-btn rounded outlined width="100%" color="#F34841">{{ notify.button }}</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div
          style="max-width: 375px"
        >
          <div
            class="d-flex flex-column justify-space-around"
            style="width: 350px; height: 1400px; margin: 0 auto;"
          >
            <div style="border: 2px solid black; border-radius: 10px; width: 100%; height: 250px" v-for="notify in notifys" :key="notify">
              <div style="width: 100%; height: 20%" class="text-h6 font-weight-bold d-flex align-center pl-5">{{ notify.title }}</div>
              <div style="width: 100%; height: 40%" class="text-subtitle-1 font-weight-medium d-flex align-center pl-5 pr-5">{{ notify.info }}</div>
              <div style="width: 100%; height: 20%" class="text-subtitle-1 font-weight-medium d-flex align-center pl-5">{{ notify.time }}</div>
              <div style="width: 100%; height: 20%" class="text-subtitle-1 font-weight-medium d-flex align-center justify-end pr-3 pb-3">
                <v-btn rounded outlined width="150" color="#F34841">{{ notify.button }}</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  data: () => ({
    notifys: [
      {
        type: 1,
        img: require('../assets/auction.png'),
        title: '競標場提醒',
        info: '您的 BMW M2 Competition 2020鐵灰 會場時間即將結束',
        time: '2021/04/21',
        button: '進入會場'
      },
      {
        type: 2,
        img: require('../assets/forum2.png'),
        title: '討論區提醒',
        info: '您的 請問哪款車比較適合剛出社會的我? 文章有新回復',
        time: '2021/04/21',
        button: '查看文章'
      },
      {
        type: 3,
        img: require('../assets/cart2.png'),
        title: '訂單通知',
        info: '您的 訂單3458264200 已成立',
        time: '2021/04/21',
        button: '查看訂單'
      },
      {
        type: 4,
        img: require('../assets/forum2.png'),
        title: '討論區提醒',
        info: '您的 請問哪款車比較適合剛出社會的我? 文章有新回復',
        time: '2021/04/21',
        button: '查看文章'
      },
      {
        type: 5,
        img: require('../assets/cart2.png'),
        title: '訂單通知',
        info: '您的 訂單3458264200 已成立',
        time: '2021/04/21',
        button: '查看訂單'
      }
    ]
  }),
  components: {
    Media
  }
}
</script>

<style scoped>
.aa:last-child{
  border-bottom: none !important;
}
</style>
