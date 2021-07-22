<template>
  <div class="d-flex mt-15 ma-auto">
    <div>
      <img style="position: sticky;top:20%;left:0;" :src="imgsrc" alt="車圖" />
    </div>
    <div
      class="d-flex flex-column align-end"
      style="display:inline-block;width:400px"
    >
      <div style="width:400px">
        <div style="height:100vh">
        <h1 class="mt-16">您的 {{ carname }}</h1>
        <div>
          <ul class="my-8" style="line-height:3;">
            <li
              style="list-style:none;"
              v-for="cardes in cardesall"
              :key="cardes"
            >
              {{ cardes }}
            </li>
          </ul>
        </div>
        <div style="margin-bottom:100px">
          <v-row justify="center">
            <v-expansion-panels inset>
              <v-expansion-panel v-for="(item, i) in 1" :key="i">
                <v-expansion-panel-header
                  >顯示詳細資料(牌照+燃料稅計算、保險加購)</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  購買價格 $3,500,000
                  <br />
                  今日需完成支付 NT$3,000
                  <br />
                  訂購費用（下訂後將不予退還轉讓，費用不含於車價內）
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>
        <div style="font-size:32px;color:red"><h2>NT$: {{carprice}}</h2></div>
        <div class="my-15 d-flex justify-center">
          <button
            class="px-10 py-3"
            style="border:2px solid black;border-radius:30px;font-size:24px;font-weight:600;"
          >
            信用卡結帳
          </button>
        </div>
        </div>
        <div>
          <div>
            <h2 class="mb-10">輸入帳戶詳細資料</h2>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">姓氏:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">名字:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">電子郵件:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">手機號碼:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
          </div>
          <div>
            <h2 class="mb-10">發票</h2>
            <div class="ma-auto">
              <div class="ml-5">
                <v-radio-group v-model="column" column>
                  <v-radio
                    class="mb-8"
                    label="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                    value="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                  ></v-radio>
                  <v-radio
                    class="mb-8"
                    label="發票捐贈"
                    value="發票捐贈"
                  ></v-radio>
                  <v-radio
                    class="mb-8"
                    label="三聯式發票"
                    value="三聯式發票"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
          </div>
          <div>
            <h2 class="mb-10">信用卡</h2>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">持卡人姓名:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">卡片號碼:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">到期年月日:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">CVV安全碼:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
          </div>
          <div>
            <h2 class="mb-10">帳單資訊</h2>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">地址:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">縣市:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">郵遞區號:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
            <div class="d-flex align-center ml-8 mb-8">
              <h3 style="width:100px">國家:</h3>
              <v-text-field
                label="請輸入"
                solo-inverted
                style="max-width:70%"
                class="ma-auto"
              ></v-text-field>
            </div>
          </div>
          <div>
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  本人聲明下訂即表示已經至展間充分
                  理解、體驗車輛，因此本訂購不適用 消保法得於七日內解約之規定;並詳細閱讀
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <a
                        target="_blank"
                        href="https://tw.yahoo.com/"
                        @click.stop
                        v-on="on"
                      >
                        『thevroom』
                      </a>
                    </template>
                    Turn to yahoo
                  </v-tooltip>
                  車行之相關購車條款規定，並確認下訂車輛。
                </div>
              </template>
            </v-checkbox>
          </div>
          <button-submit class="mb-10" buttonSubmit="確認訂單"></button-submit>
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
      carprice: 3500000,
      checkbox: false,
      imgsrc: require('../assets/bmw6.png'),
      carname: 'BMW M4',
      cardesall: [
        '珍珠白 (多塗層)',
        '19 吋 Tempest 輪圈',
        '全黑頂級內裝搭配碳纖維飾板',
        'Autopilot 自動輔助駕駛',
        '頂級連線功能',
        '舒適性套件'
      ]
    }
  }
}
</script>
