<template>
  <div class="d-flex flex-column">
    <div style="max-width:100%;max-height:500px">
      <img
        style="display: block;;width:100%;height:500px"
        src="../../../src/assets/Issuepage1.jpg"
      />
    </div>
    <div class="d-flex flex-column">
      <div style="text-align:center;" class="my-10"><h1>發表新文章</h1></div>
      <div
        style="width:70%;"
        class="d-flex justify-start ma-auto align-center mb-10"
      >
        <div style="font-size:25px;font-weight:600;">主題類型:</div>
        <label style="font-size:20px;" class="mx-8"
          ><input type="radio" name="city" value="taipei" />車訊新聞</label
        >
        <label style="font-size:20px;" class="mx-8"
          ><input
            type="radio"
            name="city"
            value="taoyuan"
            checked
          />會員分享</label
        >
      </div>
      <div
        class="d-flex justify-center align-center ma-auto mb-10"
        style="width:70%;"
      >
        <h2 style="font-size:25px;">主題:</h2>
        <v-text-field :rules="rules"></v-text-field>
      </div>
      <div class="d-flex justify-start align-center ma-auto mb-10"
        style="width:70%;">
          <h2 style="font-size:25px;">圖片上傳:</h2>
      </div>
      <div
        class="d-flex justify-start align-center ma-auto mb-10"
        style="width:70%;"
      >
        <h2 style="font-size:25px;" class="align-self-start mr-3">內容:</h2>
        <v-col cols="12" sm="11" style="padding:0">
          <v-textarea
            filled
            auto-grow
            label="請填入內容"
            rows="4"
            row-height="100"
          ></v-textarea>
        </v-col>
      </div>
      <div style="width:60%;" class="align-self-start ma-auto mb-10">
        <input
          type="checkbox"
          class="mr-2"
        />我已閱讀並同意遵守討論區規則、本站服務條款與個人資料保護法
      </div>
      <button-submit buttonSubmit="送出" class="mb-10"></button-submit>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: ['車訊新聞', '會員分享'],
      preview: null,
      image: null,
      preview_list: [],
      image_list: []
    }
  }
}
</script>

<style lang="scss"></style>
