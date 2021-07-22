<template>
  <div
    style="width:100%;height:100vh;"
    class="ma-auto d-flex justify-center align-center"
  >
    <div class="LoginBackground" style="width:100%;height:100%">
      <div
        class="d-flex"
        style="width:100%;height:100%;background-color:rgba(0,0,0,.6);"
      >
        <div
          style="width:50%;text-align: left;"
          class="white--text align-self-end mb-15 pl-16"
        >
          <h1>歡迎加入</h1>
          <h1>The Vroom</h1>
        </div>
        <div
          style="width:50%;height:100%;background-color:rgba(255,255,255,0.6)"
        >
          <div
            style="width:80%;height:100%"
            class="ma-auto d-flex flex-column align-center justify-center"
          >
            <div class="mb-10 ml-10 align-self-start">
              <h1>會員註冊</h1>
              <div style="width:200%;height:3px" class="red"></div>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>電子信箱:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="該資料為您日後的登入帳號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>密碼:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="請輸入6-12位英數混和 需區分大小寫 請勿使用特殊符號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>確認密碼:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="請再次確認密碼"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h2>姓名:</h2>
                  </v-col>
                  <v-col cols="12" sm="7">
                    <v-textarea
                      label="請輸入真實姓名"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <div style="width:200px">
                <label style="font-size:20px;" class="mx-1"
                  ><input
                    type="radio"
                    value="male"
                    name="gender"
                    checked
                  />先生</label
                >
                <label style="font-size:20px;" class="mx-1"
                  ><input
                    type="radio"
                    value="female"
                    name="gender"
                  />小姐</label
                >
              </div>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>生日:</h2>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="3">
                    <v-select
                      :items="year"
                      label="西元年份"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="3">
                    <v-select :items="month" label="月" outlined></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="3">
                    <v-select :items="day" label="日" outlined></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h3>身分證字號:</h3>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="請再次確認密碼"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>居住地址:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="請再次確認密碼"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="4">
                    <h2>驗證碼:</h2>
                  </v-col>
                  <v-col cols="12" sm="7">
                    <v-textarea
                      label="請再次確認密碼"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <div style="width:200px">
                <button
                  class="px-5 py-3 black white--text"
                  style="border:1px solid black;border-radius:20px;"
                >
                  獲取驗證碼
                </button>
              </div>
            </div>
            <div class="align-self-start ml-10">
              <div class="d-flex">
                <button-submit buttonSubmit="註冊"></button-submit>
                <h6 class="align-self-end ml-10"><a href="#">已經是會員嗎?立即登入</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSubmit from './layout/ButtonSubmit.vue'
export default {
  components: { ButtonSubmit },
  data () {
    return {
      year: [2021],
      month: [1, 2, 3],
      day: [1, 2, 3]
    }
  }
}
</script>

<style lang="scss">
.LoginBackground {
  background-image: url(../assets/logincar.jpeg);
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
</style>
