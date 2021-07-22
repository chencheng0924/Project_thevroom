<template>
  <div class="member">
    <div class="member_out">
      <div class="member_in">
        <div class="inside_left">
          <v-card
            outline
            width="250"
            height="900"
            dark
            style="border:1px solid #00f"
            class="d-flex flex-column justify-space-between"
          >
            <div>
              <v-list flat class="mt-3">
                <v-list-item-group color="deep-orange accent-3">
                  <v-list-item
                    v-for="menuitem in menuItems"
                    :key="menuitem.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title class="d-flex justify-center font-weight-bold pa-6" style="cursor: pointer; font-size:18px">{{ menuitem.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <div class="mb-12">
              <div style="font-size: 16px" class="d-flex justify-center">贊助</div>
              <div class="d-flex justify-center mt-1">
                <img src="../assets/sponsor(2).png" style="width:150px">
              </div>
              <div style="font-size: 12px" class="d-flex justify-center mt-1">透過馳家保養您的愛車</div>
              <div class="d-flex justify-center mt-4">
                <img src="../assets/sponsor(1).png" style="width:130px; height:70px;">
              </div>
              <div style="font-size: 12px" class="d-flex justify-center mt-3">性能舒適性 專為卓越汽車打造</div>
            </div>
          </v-card>
        </div>

        <div class="inside_middle" style="border: 1px solid green; width:600px; height:100%"></div>

        <div class="inside_right d-flex flex-column justify-space-between" style="border: 1px solid #f20; width:300px; height:100%">
          <div style="height:265px">
            <v-date-picker
              v-model="date1"
              :events="arrayEvents"
              event-color="green lighten-1"
              dark
              width="299"
            ></v-date-picker>
          </div>
          <div>
            <v-card width="300" height="560" style="border: 2px solid #000" class="d-flex flex-column justify-space-between">
              <div style="width: 100%; height: 10%"  class="d-flex align-center">
                <div style="font-size: 20px; font-weight: bold;" class="pl-4 text-h6 font-weight-bold">當日排程</div>
              </div>
              <div style="height: 90%; width: 100%;" class="d-flex flex-column justify-space-around align-center">
                <div v-for="date in dates" :key="date" style="border: 1px solid #000; border-radius:5px; width:260px; height:130px" class="d-flex flex-column justify-space-around">
                  <div class="d-flex">
                    <div style="width: 60%" class="d-flex justify-center align-center text-subtitle-1 font-weight-light">{{ date.name }}</div>
                    <div style="width: 40%; color:#F34841" class="d-flex justify-center align-center text-h6 font-weight-bold">{{ date.time }}</div>
                  </div>
                  <div class="d-flex align-center pl-5 text-subtitle-1 font-weight-light">{{ date.reserve }} : {{ date.price }}</div>
                  <div class="d-flex align-center pl-5 text-subtitle-1 font-weight-light">{{ date.title }} : {{ date.status }}</div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {
        title: '帳戶'
      },
      {
        title: '賣場管理'
      },
      {
        title: '最新消息'
      },
      {
        title: '我的追蹤'
      }
    ],
    dates: [
      {
        name: '2021 BMW 330i',
        time: '17 : 00',
        reserve: '底價',
        price: '130萬',
        title: '賣場狀態',
        status: '進行中'
      },
      {
        name: '2021 BENZ GLC',
        time: '17 : 00',
        reserve: '底價',
        price: '900萬',
        title: '賣場狀態',
        status: '進行中'
      },
      {
        name: '2021 AUDI Q30',
        time: '17 : 00',
        reserve: '底價',
        price: '200萬',
        title: '賣場狀態',
        status: '進行中'
      }
    ]
  })
}
</script>

<style lang="scss">
  .member{
    border: 2px solid #00f;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 1200px;
    .member_out{
      border: 1px solid #f20;
      width: 100%;
      height: 905px;
      margin-top: 50px;
      .member_in{
        border: 1px solid #000;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
    .v-picker__title {
      // display: none;
      height: 60px;
    }
    }
    .v-date-picker-header {
      padding: 0;
    }
    .v-date-picker-table {
      height: 220px;
    }
  }
</style>
