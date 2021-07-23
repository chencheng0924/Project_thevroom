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
        <div style="width:100%;height:100%" class="d-flex align-center">
          <div
            style="width:80%;height:80%"
            class="ma-auto d-flex flex-column align-center justify-space-around"
          >
            <div class="mb-10 ml-10 align-self-start">
              <h1>會員登入</h1>
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
            <div class="align-self-start ml-10">
              <div class="d-flex">
                <button-submit buttonSubmit="註冊"></button-submit>
                <h6 class="align-self-end ml-10">
                  <router-link to="/signup">還不是會員嗎? 立即註冊</router-link>
                </h6>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ButtonSubmit from '../components/layout/ButtonSubmit.vue'
export default {
  components: { ButtonSubmit },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
.LoginBackground {
  background-image: url(../assets/logincar.jpeg);
  background-size: cover;
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
</style>
