<template>
  <div class="bottom_second">
    <media :query="{ minWidth: '401px' }">
      <div class="btm_sec">
        <div class="btm_sec_inside">
          <div style="width: 100%; height: 75px" class="d-flex text-subtitle-1 font-weight-light" v-for="tech in techs" :key="tech">
            <div style="border: 1px solid black; width: 20%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ tech.title }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ tech.contentA }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-bottom: none;" class="d-flex align-center justify-center">{{ tech.contentB }}</div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div
          style="max-width: 375px; border: 2px solid #00f"
        >
          <div style="border: 1px solid black; width: 350px; height:180px; margin: 0 auto;" v-for="tech in techs" :key="tech">
            <div style="border: 1px solid red; width: 100%; height: 50%; background-color:lightgray" class="d-flex align-center justify-center">{{ tech.title }}</div>
            <div style="border: 1px solid red; width: 100%; height: 50%" class="d-flex">
              <div style="border: 1px solid green; width: 50%; height:100%" class="d-flex align-center justify-center">{{ tech.contentA }}</div>
              <div style="border: 1px solid green; width: 50%; height:100%" class="d-flex align-center justify-center">{{ tech.contentB }}</div>
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
    techs: [
      {
        id: '1',
        title: '車身座位',
        contentA: '5門5人車',
        contentB: '5門5人車'
      },
      {
        id: '2',
        title: '變速系統',
        contentA: '6速自手排',
        contentB: '6速自手排'
      },
      {
        id: '3',
        title: '引擎型式',
        contentA: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門',
        contentB: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門'
      },
      {
        id: '4',
        title: '排氣量',
        contentA: '2387cc',
        contentB: '2387cc'
      },
      {
        id: '5',
        title: '性能數據',
        contentA: '200hp@4000rpm',
        contentB: '200hp@4000rpm'
      },
      {
        id: '6',
        title: '能源消耗',
        contentA: '平均 10.1km/ltr',
        contentB: '平均 10.1km/ltr'
      },
      {
        id: '7',
        title: '相關稅率',
        contentA: '牌照稅 $ 11,230元',
        contentB: '牌照稅 $ 11,230元'
      },
      {
        id: '8',
        title: '後車箱大小',
        contentA: '235ltr',
        contentB: '235ltr'
      }
    ]
  }),
  components: {
    Media
  }
}
</script>

<style lang="scss" scoped>
  .bottom_second{
    .btm_sec{
        border: 1px solid #f20;
        width: 100%;
        // height: 600px;
        // margin-top: 50px;
        .btm_sec_inside{
          border: 1px solid #000;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 1200px;
          // height: 100%;
          margin: 0 auto;
        }
      }
  }
</style>
