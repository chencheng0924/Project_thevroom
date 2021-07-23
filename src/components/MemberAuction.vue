<template>
  <div style="height:900px" class="ma-auto d-flex align-center">
    <div style="width:600px;" class="d-flex justify-center">
      <div
        class="d-flex flex-column align-center"
        style="width:90%;height:900px;"
      >
        <div
          class="d-flex flex-column mt-10 my-5 px-5"
          style="width:95%;height:70px"
        >
          <div class="d-flex">
            <div style="width:300px;height:200px" class="mr-3">
              <img
                src="../assets/compare-car-pic/hotcar01.png"
                alt="車圖"
                style="width:100%;height:100%"
              />
            </div>
            <div class="d-flex flex-column">
              <div
                v-for="item in carpic"
                :key="item"
                style="width:150px;height:90px"
                class="mb-5 ml-3"
              >
                <img
                  :src="item.src"
                  alt="車圖"
                  style="width:100%;height:100%"
                />
              </div>
            </div>
          </div>
          <div>
            <bidrecord />
          </div>
          <div class="memberBackground">
            <div class="d-flex align-center mb-5" style="height:40px;width:90%">
              <v-container style="height:40px">
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h3>賣場名稱:</h3>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-textarea
                      label="拍賣場名稱"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      dense
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:40px;width:90%">
              <v-container style="height:40px">
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h3>起標價格:</h3>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-textarea
                      label="請填入起標價格"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      dense
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:40px;width:90%">
              <v-container style="height:40px">
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h3>開始時間:</h3>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="2">
                    <v-select dense :items="month" label="月" outlined></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="2">
                    <v-select dense :items="day" label="日" outlined></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="4">
                    <v-select dense :items="day" label="時" outlined></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:40px;width:90%">
              <v-container style="height:40px">
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h3>拍賣天數:</h3>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="3">
                    <v-select dense :items="year" label="天數" outlined></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:40px;width:90%">
              <v-container style="height:40px" fluid>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h3>詳細內文:</h3>
                  </v-col>
                  <v-col cols="12" sm="8">
                    <v-textarea
                      label="請描述相關拍賣事宜"
                      auto-grow
                      outlined
                      rows="3"
                      row-height="25"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
          <div class="mt-13 align-self-end"><button class="black white--text px-4 py-2" style="border-radius:20px">保存</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bidrecord from './bidRecord.vue'
export default {
  components: {
    bidrecord: bidrecord
  },
  data () {
    return {
      carpic: [
        { src: require('../assets/compare-car-pic/hotcar01.png') },
        { src: require('../assets/compare-car-pic/hotcar01.png') }
      ],
      auctionInfo: [
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        },
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        },
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        },
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        },
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        },
        {
          date: '2021/06/19',
          time: '08:20:56 a.m',
          price: 'TWD 1,230,000',
          member: 'ale*****9965'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.memberBackground {
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
</style>
