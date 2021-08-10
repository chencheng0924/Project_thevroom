<template>
<div>
  <media :query="{ minWidth: '401px' }">
  <form class="d-flex flex-column">
    <div style="max-width:100%;max-height:500px">
      <img
        style="display: block;;width:100%;height:500px;object-fit: cover;"
        src="../assets/Issuepage1.jpg"
      />
    </div>
    <div class="d-flex flex-column">
      <div style="text-align:center;" class="my-10 text-h4 font-weight-bold">發表新文章</div>
      <form
        style="width:70%;"
        class="d-flex justify-start ma-auto align-center mb-10"
      >
        <div class="text-h5 font-weight-bold">主題類型:</div>
        <label class="text-h6 font-weight-bold ml-10"
          ><input type="radio" name="city" value="車訊新聞" v-model="inputtype"/>車訊新聞</label
        >
        <label class="text-h6 font-weight-bold ml-10"
          ><input
            type="radio"
            name="city"
            value="會員分享"
            v-model="inputtype"
          />會員分享</label
        >
      </form>
      <div
        class="d-flex justify-center align-center ma-auto mb-10"
        style="width:70%;"
      >
        <div class="text-h5 font-weight-bold">主題:</div>
        <v-text-field :rules="rules" v-model="inputtitle"></v-text-field>
      </div>
      <div class="d-flex justify-start align-center ma-auto mb-10"
        style="width:70%;">
          <h2 class="text-h5 font-weight-bold">圖片上傳:</h2>
          <upload-image @update="updatepic"/>
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
            v-model="inputtext"
          >
          </v-textarea>
        </v-col>
      </div>
      <div style="width:60%;" class="align-self-start ma-auto mb-10">
        <input
          type="checkbox"
          class="mr-2"
        />我已閱讀並同意遵守討論區規則、本站服務條款與個人資料保護法
      </div>
      <div class="ma-auto d-flex justify-space-around" style="width:900px">
      <router-link to="/forum"><button-submit buttonSubmit="返回上一頁" class="mb-10"></button-submit></router-link>
      <div @click="submit"><button-submit buttonSubmit="送出" class="mb-10"></button-submit></div>
      </div>
    </div>
  </form>
  </media>
  <!-- ---------------------------------------------------------------------------------------------------------------- -->
  <media :query="{ maxWidth: '400px' }">
  <div class="d-flex flex-column">
    <div style="max-width:100%;max-height:500px">
      <img
        style="display: block;;width:100%;"
        src="../assets/Issuepage1.jpg"
      />
    </div>
    <div class="d-flex flex-column">
      <div style="text-align:center;" class="my-10 text-h4 font-weight-bold">發表新文章</div>
      <div
        style="width:80%;"
        class="d-flex justify-space-around ma-auto align-center mb-10">
        <div class="text-h6 font-weight-bold">主題類型:</div>
        <label class="text-subtitle-1 font-weight-medium"
          ><input type="radio" name="city" value="taipei" />車訊新聞</label
        >
        <label class="text-subtitle-1 font-weight-medium"
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
        style="width:75%;"
      >
        <div class="text-h6 font-weight-bold">主題:</div>
        <v-text-field :rules="rules"></v-text-field>
      </div>
      <div class="d-flex flex-column justify-start align-start ma-auto mb-10"
        style="width:75%;">
          <div style="width:100px" class="text-h6 font-weight-bold">圖片上傳:</div>
          <div style="max-width:200px"><upload-image></upload-image></div>
      </div>
      <div
        class="d-flex flex-column justify-start align-center ma-auto mb-10"
        style="width:75%;"
      >
        <div class="text-h5 font-weight-bold align-self-start mr-3">內容:</div>
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
      <div class="ma-auto d-flex justify-space-around" style="width:90%">
      <router-link to="/forum"><button-submit buttonSubmit="返回上一頁" class="mb-10"></button-submit></router-link>
      <button-submit buttonSubmit="送出" class="mb-10"></button-submit>
      </div>
    </div>
  </div>
  </media>
</div>
</template>

<script>
import Media from 'vue-media'
export default {
  async created () {
    const res = await fetch('http://localhost:8080/phpfile/testsignin.php')
    const resdata = await res.json()
    console.log(resdata)
    console.log(this.$store.getters.getmember[0][0])
    this.member = this.$store.getters.getmember[0][0]
    // resdata.forEach((list) => {
    //   this.alreadyHave.push(list.ID)
    // })
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: {
    Media
  },
  data () {
    return {
      alreadyHave: [],
      types: ['車訊新聞', '會員分享'],
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
      date: new Date(),
      inputday: '',
      member: 0,
      pic: []
    }
  },
  methods: {
    updatepic (list) {
      this.pic = list
    },
    submit () {
      // console.log(this.date.getFullYear())
      // console.log(this.date.getMonth())
      // console.log(this.date.getDate())
      this.inputtday = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
      console.log(this.inputtday)
      console.log(this.inputtitle)
      console.log(this.inputtext)
      console.log(this.inputtype)
      console.log(this.pic)
      const formdata = new FormData()
      formdata.append('MEMBERID', this.$store.getters.getmember[0][0])
      formdata.append('DATE', this.inputtday)
      formdata.append('ARTICLEIMG', this.pic[0])
      formdata.append('TOPICTYPE', this.inputtype)
      formdata.append('SUBJECTNAME', this.inputtitle)
      formdata.append('CONTENT', this.inputtext)
      fetch('http://localhost:8080/phpfile/Issueinsert.php', {
        method: 'POST',
        body: formdata
      })
    }
  }
}
</script>

<style lang="scss"></style>
