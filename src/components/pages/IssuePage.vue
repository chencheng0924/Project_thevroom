<template>
  <div class="d-flex flex-column">
    <div style="max-width:100%;max-height:500px">
      <img
        style="display: block;;width:100%;height:500px"
        src="../../../src/assets/Issuepage1.jpg"
      />
    </div>
    <div class="d-flex flex-column">
      <div style="text-align:center;" class="my-10 text-h4 font-weight-bold">發表新文章</div>
      <div
        style="width:70%;"
        class="d-flex justify-start ma-auto align-center mb-10"
      >
        <div class="text-h5 font-weight-bold">主題類型:</div>
        <label class="text-h6 font-weight-bold ml-10"
          ><input type="radio" name="city" value="taipei" />車訊新聞</label
        >
        <label class="text-h6 font-weight-bold ml-10"
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
        <div class="text-h5 font-weight-bold">主題:</div>
        <v-text-field :rules="rules"></v-text-field>
      </div>
      <div class="d-flex justify-start align-center ma-auto mb-10"
        style="width:70%;">
          <h2 class="text-h5 font-weight-bold">圖片上傳:</h2>
          <upload-image></upload-image>
      </div>
      <div
        class="d-flex justify-start align-center ma-auto mb-10"
        style="width:70%;"
      >
        <h2 class="text-h5 font-weight-bold align-self-start mr-3">內容:</h2>
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
