<template>
  <div style="height:800px" class="ma-auto d-flex align-center">
    <div style="width:600px;" class="d-flex justify-center">
      <div
        class="d-flex flex-column align-center"
        style="width:90%;height:750px;border:1px solid black;border-radius:20px;"
      >
        <div
          class="d-flex flex-column mt-10 my-5 px-5"
          style="width:90%;height:70px"
        >
          <div class="d-flex justify-space-between align-center">
            <h2>帳戶資料更改</h2>
            <button class="red white--text pa-3" style="border-radius:20px">
              升級會員
            </button>
          </div>
          <div style="width:100%;height:3px" class="grey mt-5"></div>
        </div>
        <div style="width:90%;height:65px" class="d-flex flex-column my-5 px-5">
          <h3>帳號</h3>
          <v-col cols="12" sm="12">
            <v-text-field
              label="帳號無法修改"
              placeholder="帳號無法修改"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </div>
        <div style="width:90%;height:65px" class="d-flex flex-column my-5 px-5">
          <h3>電子郵件</h3>
          <v-col cols="12" sm="12">
            <v-text-field
              label="請輸入電子郵件"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </div>
        <div style="width:90%;height:65px" class="d-flex flex-column my-5 px-5">
          <h3>密碼</h3>
          <v-col cols="12" sm="12">
            <v-text-field
              label="請輸入密碼"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </div>
        <div style="width:90%;height:65px" class="d-flex flex-column my-5 px-5">
          <h3>手機</h3>
          <v-col cols="12" sm="12">
            <v-text-field
              label="請輸入手機號碼"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </div>
        <div style="width:90%;height:65px" class="d-flex flex-column my-5 px-5">
          <h3>地址</h3>
          <v-col cols="12" sm="12">
            <v-text-field
              label="請輸入正確地址"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
        </div>
        <div class="mt-10 align-self-end mr-5"><button class="black white--text px-4 py-2" style="border-radius:20px">保存</button></div>
      </div>
    </div>
  </div>
</template>
