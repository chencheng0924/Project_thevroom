<template>
  <div class="bottom_first">
      <div class="bottom">
        <div class="bottom_inside">
          <div style="width: 100%; height: 75px" class="d-flex text-subtitle-1 font-weight-light" v-for="info in infos" :key="info">
            <div style="border: 1px solid black; width: 20%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ info.title }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ info.contentA }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-bottom: none;" class="d-flex align-center justify-center">{{ info.contentB }}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    infos: [
      {
        id: '1',
        title: '動力型式',
        contentA: '柴油',
        contentB: '柴油'
      },
      {
        id: '2',
        title: '引擎型式',
        contentA: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門',
        contentB: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門'
      },
      {
        id: '3',
        title: '變速系統',
        contentA: '6速自手排',
        contentB: '6速自手排'
      },
      {
        id: '4',
        title: '驅動型式',
        contentA: '前輪驅動',
        contentB: '前輪驅動'
      },
      {
        id: '5',
        title: '最大扭力',
        contentA: '40.8kgm@2000rpm',
        contentB: '40.8kgm@2000rpm'
      },
      {
        id: '6',
        title: '車身型式',
        contentA: '轎式旅行車',
        contentB: '轎式旅行車'
      },
      {
        id: '7',
        title: '車型大小',
        contentA: '車長:4660mm',
        contentB: '車長:4660mm'
      },
      {
        id: '8',
        title: '後車箱大小',
        contentA: '235ltr',
        contentB: '235ltr'
      }
    ]
  })
}
</script>

<style lang="scss">
  .bottom_first {
    .bottom{
        border: 1px solid #f20;
        width: 100%;
        // height: 600px;
        // margin-top: 50px;
        .bottom_inside{
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
