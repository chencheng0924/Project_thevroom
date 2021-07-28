<template>
  <div>
    <div class="my-10 ml-5">
      <div class="text-h5 font-weight-bold">賣場資訊</div>
      <div style="width:60%;height:3px" class="red"></div>
    </div>
    <div class="goauc d-flex justify-center" style="height:100%">
      <v-carousel hide-delimiters style="height:100%">
        <v-carousel-item style="min-width:375px;height:100%">
          <v-container
            style="width:100%;"
            class="d-flex flex-column align-center justify-center"
            v-for="item in list"
            :key="item.id"
          >
            <v-row
              fluid
              class="d-flex flex-column align-center"
              style="width:90%"
            >
              <v-col>
                <h3>{{ item.title }}:</h3>
              </v-col>
              <v-col>
                <v-textarea
                  :label="item.labeltxt"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="10"
                  dense
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <v-container
            style="width:100%;"
            class="d-flex flex-column align-center"
          >
            <v-row
              fluid
              class="d-flex flex-column align-center"
              style="width:90%"
            >
              <v-col>
                <h3>開始時間:</h3>
              </v-col>
              <v-col class="d-flex">
                <v-select dense :items="month" label="月" outlined></v-select>
                <v-select dense :items="day" label="日" outlined></v-select>
                <v-select dense :items="day" label="時" outlined></v-select>
              </v-col>
            </v-row>
            <v-row
              fluid
              class="d-flex flex-column align-center"
              style="width:90%"
            >
              <v-col>
                <h3>拍賣天數:</h3>
              </v-col>
              <v-col class="d-flex">
                <v-select dense label="天數" outlined></v-select>
              </v-col>
            </v-row>
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
                  row-height="50"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <div class="d-flex justify-center">
            <button
              class="text-h6 font-weight-bold red white--text pa-2 px-5 mr-8 rounded-pill"
            >
              修改
            </button>
            <button
              class="text-h6 font-weight-bold black white--text pa-2 px-5 ml-8 rounded-pill"
            >
              保存
            </button>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: '1',
          title: '賣場名稱',
          labeltxt: '請輸入賣場名稱'
        },
        {
          id: '2',
          title: '拍賣場底標',
          labeltxt: '請輸入賣場底標金額'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.goauc {
  .v-image{
    height: 900px !important;
}
}
</style>
