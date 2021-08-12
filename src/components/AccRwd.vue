<template>
    <div id="app">
          <!-- <span class="text-subtitle-1 font-weight-bold"
                style="color:#f34841">雨刷 共6項</span> -->
        <div class="rwdbanner">
          <rwd-banner rwdtitle="配件專區" :pathImg="pathimg"></rwd-banner>
        </div>
          <div class="productList">
          <div class="product" v-for="items in productList" :key="items">
            <img :src="items.imgURL" />
            <br />
            <span class="title text-subtitle-1 font-weight-bold">{{
              items.title
            }}</span>
            <br />
            <div class="information d-flex justify-space-around align-center">
              <div class="price" style="color:#f34841">{{ items.price }}</div>
               <router-link to="/shoppingcar">
              <img :src="shoppingcart" alt="" style="height:30px">
              </router-link>
              <br />
              <!-- <span class="btn text-subtitle-1 font-weight-bold" style="cursor: pointer;"
                >立即選看</span> -->
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="#181818 lighten-2"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="rounded-pill"
                      style="font-size:12px"
                    >
                      立即選看
                    </v-btn>
                  </template>

                  <v-card style="min-height:250px">
                    <v-card-title class="text-h5 orange lighten-2">
                      商品細項
                    </v-card-title>

                    <v-card-text style="min-height:250px">
                      <ol class="d-flex flex-column justify-center">
                        <li style="line-height:3" v-for="item in items.ds" :key="item">{{ item }}</li>
                      </ol>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text>
                      <router-link to="/shoppingcar">
                        加入購物車
                      </router-link>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <router-link to="/shoppingcar">
              <div>
              <img :src="shoppingcart" alt="" style="height:30px">
              </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import RwdBanner from '../components/layout/RwdBanner.vue'
export default ({
  components: {
    RwdBanner
  },
  data () {
    return {
      pathimg: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      shoppingcart: require('../assets/accessories-pic/shopcart.png'),
      productList: [
        {
          pid: 1,
          imgURL: require('../assets/accessories-pic/rain/soft_rain.jpeg'),
          id: 'softrain158',
          title: 'BOSCH 新款軟骨雨刷',
          size: '16吋',
          price: '$158',
          ds: [
            '乾淨優異的刷拭表現 - 經德國萊因TUV測試，在連續刷拭20萬次考驗下，仍有優異表現，測試分數更大幅領先同級競爭品牌。',
            '空氣動力學導流板設計 - Bosch專利設計，能降低氣流的干擾，將雨刷壓力均勻分布於車窗表面，高速行駛下的穩定度。',
            '安靜順暢的使用體驗 - 特殊的石墨塗層，有效解決跳動與噪音困擾，安靜又安心的好選擇'
          ]
        },
        {
          pid: 2,
          imgURL: require('../assets/accessories-pic/rain/soft_rain_1068.jpeg'),
          id: 'softrain1068',
          title: 'PIAA 歐系通用雨刷 Si-TECH 軟骨',
          size: '24吋',
          price: '$1068',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        },
        {
          pid: 3,
          imgURL: require('../assets/accessories-pic/rain/back_rain369.png'),
          id: 'backrain369',
          title: 'CARBUFF 日系車後雨刷',
          size: 'M-GRA30款 12吋/305mm',
          price: '$369',
          ds: [
            '日系車規格適用',
            '採用日本膠條，流暢、穩壓',
            '塗敷超微粒子膠條，刷的更乾淨',
            '節式穩壓設計，受力更均勻',
            '撥水效果佳，降低磨擦異音產生'
          ]
        },
        {
          pid: 4,
          imgURL: require('../assets/accessories-pic/rain/back_rain550.webp'),
          id: 'backrain550',
          title: 'BOSCH後雨刷 C4-RJ13-330',
          size: '13吋/330mm',
          price: '$550',
          ds: [
            'BOSCH 原廠專用後雨刷(非通用型',
            '本雨刷不適用於前擋風玻璃',
            '選購前請在確認圖示雨刷接頭、尺寸是否與需求相符'
          ]
        },
        {
          pid: 5,
          imgURL: require('../assets/accessories-pic/rain/stiff_rain245.webp'),
          id: 'stiffrain245',
          title: 'CARBUFF 硬骨雨刷',
          size: '12吋',
          price: '$245',
          ds: [
            '一般12吋雨刷大多用在後擋風玻璃',
            '採用日本膠條',
            '有效減緩玻璃摩擦',
            '有效降低異音產生',
            '可增加穩定度、撥水效果佳'
          ]
        },
        {
          pid: 6,
          imgURL: require('../assets/accessories-pic/light/broad_1288.jpeg'),
          id: 'light1288',
          title: 'RF 牌照燈組Yaris',
          price: '$1288',
          ds: [
            '壽命較傳統鹵素燈泡長',
            '高亮度，採用台灣大廠LED',
            '型號與原車一致，不需改線路，直接安裝',
            '低耗能，有效減少電路、電瓶負擔'
          ]
        },
        {
          pid: 7,
          imgURL: require('../assets/accessories-pic/light/broad_audi1288.jpeg'),
          id: 'lightaudi1288',
          title: 'RF牌照燈組AUDI A4/A5/Q5 ',
          price: '$1288',
          ds: [
            '壽命較傳統鹵素燈泡長',
            '高亮度，採用台灣大廠LED',
            '型號與原車一致，不需改線路，直接安裝',
            '低耗能，有效減少電路、電瓶負擔'
          ]
        },
        {
          pid: 8,
          imgURL: require('../assets/accessories-pic/light/light_t10.jpeg'),
          id: 'lightblue780',
          title: '【OSRAM】T10 LED藍光 ',
          size: 'OSRAM 2880BL 2入',
          price: '$780',
          ds: [
            '不需改裝，安裝簡易，各種車款皆適用',
            '創新照明科技，2次光學設計不刺眼，行車更安全',
            'LED壽命達5000小時',
            '與標準燈相比節能效益達80%'
          ]
        },
        {
          pid: 9,
          imgURL: require('../assets/accessories-pic/light/light_stop100.jpeg'),
          id: 'lightstop100',
          title: '第三煞車燈 黃光橘光',
          price: '$100',
          ds: [
            '商品特點：採用黑色耐熱底座',
            '晶片種類：13顆 5050 SMD LED，側面3顆*4，正面1顆',
            '底座規格：T10',
            'LED是電子零件，為了給您最高品質的產品，我們一律使用抗靜電包裝防止LED遭靜電擊穿，確保產品的最高品質'
          ]
        },
        {
          pid: 10,
          imgURL: require('../assets/accessories-pic/light/light_stop930.jpeg'),
          id: 'lightstop930',
          title: 'FOCUS MK3專用煞車燈',
          size: '2入',
          price: '$930',
          ds: [
            '紅光如火焰般火紅、完美焊接點 精良組奘品質',
            '長時間點亮不會光衰',
            'LED溫度遠較燈泡低，不會將燈座熔掉',
            '燈泡只要點燈5秒鐘，就燙到手無法摸；而LED只是微溫'
          ]
        },
        {
          pid: 11,
          imgURL: require('../assets/accessories-pic/speaker/speaker.jpg'),
          id: 'speaker1500',
          title: 'BOSS 音頻SVC低音炮',
          size: 'P10SVC 1200W',
          price: '$1500',
          ds: [
            '許多現代車輛的空間有限，因此很難安裝傳統的低音炮。我們設計了一系列低調的低音炮， 以適應這些深度受限的空間，以提供優質的音頻性能，而不會因缺乏深度而受到影響'
          ]
        },
        {
          pid: 12,
          imgURL: require('../assets/accessories-pic/speaker/speaker_3.jpg'),
          id: 'speaker4800',
          title: 'Sondpex雙端口無源低音炮外殼',
          size: ' 450W 帶 2"x5" 喇叭高音揚聲器和LED',
          price: '$5500',
          ds: [
            '通用 8" 雙端口無源 450W 低音炮外殼，帶有兩個 2"x5" 喇叭高音揚聲器和 Sondpex® 的 LED。 使用 Sondpex 的這款產品為您的立體聲系統添加重擊聲，開始派對。'
          ]
        },
        {
          pid: 13,
          imgURL: require('../assets/accessories-pic/speaker/speaker_4.jpg'),
          id: 'speaker4800',
          title: 'Audiopipe歐姆低音砲管',
          size: 'Audiopipe® - AP-DX',
          price: '$3600',
          ds: [
            'Audiopipe® 的通用 AP-DX 系列 10" 500W 4 歐姆單前向發射端口有源低音砲管。Audiopipe 提供的產品必定會擊中現場並滿足那些選擇完美性價比的客戶的目的。'
          ]
        },
        {
          pid: 14,
          imgURL: require('../assets/accessories-pic/speaker/speaker_5.jpg'),
          id: 'speaker4800',
          title: 'DS18® 鋁製超級子彈頭高音揚聲器',
          size: 'PRO 1240W VC',
          price: '$900',
          ds: [
            'DS18® 的 Universal PRO 1" 240W VC 鋁製超級子彈頭高音揚聲器。成對出售。阻抗：4 歐姆。 在美國設計和設計，DS18 PRO 高音揚聲器是專業音頻/Voceteo 市場的頂級產品。'
          ]
        },
        {
          pid: 15,
          imgURL: require('../assets/accessories-pic/save/kgs850.webp'),
          id: 'kgs',
          title: '象王 車用油壓千斤頂',
          size: '5T',
          price: '$900',
          ds: [
            '愛車急救必備工具',
            '隨貨附贈：專屬精美收納盒',
            '使用簡單，粉領族都可輕易上手',
            '小巧好收納不佔車內空間',
            '多種用途，汽車、堆疊重物皆可使用'
          ]
        },
        {
          pid: 16,
          imgURL: require('../assets/accessories-pic/save/power2088_red.jpeg'),
          id: 'powerred',
          title: '電力坦克電源供應器 ',
          size: '4000cc 汽油',
          price: '$2088',
          ds: [
            'USB輸出兩組 可充 智慧型手機 總和為5V  3A輸出',
            'USB輸出等同行動電源24000mA',
            '內建3W LED 有4種模式 100%亮 50%亮 閃爍模式 長按SOS模式'
          ]
        },
        {
          pid: 17,
          imgURL: require('../assets/accessories-pic/save/sign150.jpeg'),
          id: 'sign',
          title: '警告標誌',
          price: '$150',
          ds: [
            '三角架裡的"驚嘆號"為鉚釘接合,無法另外拆除',
            '可折疊'
          ]
        },
        {
          pid: 18,
          imgURL: require('../assets/accessories-pic/save/sign_led.jpeg'),
          id: 'signled',
          title: '警告標誌 極光LED三角警示架',
          price: '$558',
          ds: [
            'LED燈亮光明顯，本產品含27顆高亮度LED燈，主動示警可以避免二次車禍。',
            '具發光與閃爍雙模式',
            '夜間可是距離達500公尺'
          ]
        },
        {
          pid: 19,
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_t254680.jpeg'),
          id: 'inside_wheel',
          title: 'TPMS胎內Mio MiTire T25 胎壓模組',
          price: '$3200',
          ds: [
            'MiTIRE T25 KIT USB式胎壓偵測套件，與行車記錄器完美結合。適當的胎壓與胎溫能有效預防爆胎事故，提高駕駛安全，同時能節省油耗與維持輪胎抓地力，並延長輪胎使用壽命，增加駕駛舒適性。MiTIRE T25 KIT通過NCC認證，是您最佳選擇。',
            '通過BSMI檢磁認證',
            '台灣設計、製造'
          ]
        },
        {
          pid: 20,
          imgURL: require('../assets/accessories-pic/aboutwheel/outside1190.jpeg'),
          id: 'outside_wheel',
          title: 'TTP-Q5外部太陽能胎壓胎溫偵測器',
          price: '$1190',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        },
        {
          pid: 21,
          imgURL: require('../assets/accessories-pic/aboutwheel/orange_inside.jpeg'),
          id: 'inside_wheel7988',
          title: '儀錶板整合型胎壓偵測器',
          size: 'OrangeVW/Audi/Skoda專用',
          price: '$7988',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成撥水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠撥水雨刷'
          ]
        },
        {
          pid: 22,
          imgURL: require('../assets/accessories-pic/rain/soft_rain1800.webp'),
          id: 'softrain1832',
          title: 'PIAA 軟骨雨刷 MAZDA CX-5二代',
          size: '24+18吋 /二入',
          price: '$1832',
          ds: [
            '多種接頭，90%可讓歐洲車使用',
            '擦拭後玻璃形成潑水效果，不留痕',
            '有效降低雨刷跳動及雜音',
            '耐熱、抗氧化、高壽命',
            '高質量的矽膠潑水雨刷',
            '外觀流線型無框設計',
            '歐洲車通用接頭'
          ]
        },
        {
          pid: 23,
          imgURL: require('../assets/accessories-pic/light/light_699id22.jpeg'),
          id: 'lightstop699',
          title: 'PHILIPS LED 單芯煞車燈',
          size: '白光 T20',
          price: '$699',
          ds: [
            '明亮奪目，即點即亮',
            '耐用及長效的LED光源',
            '光效均勻發散，增加被視性',
            '安裝簡易，適用於多種車款',
            '2年有限保固'
          ]
        },
        {
          pid: 24,
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_4980.jpeg'),
          id: 'inside_4980',
          title: 'ORO TPMS W410 無線胎壓偵測器',
          price: '$4980',
          ds: [
            '國內胎壓偵測器大廠ORO Sensor',
            '省電型，可用時間更長',
            '胎內式感知器，媲美原廠配備',
            '搭配高質感螢幕，胎壓資訊一目了然',
            '讓爆胎的夢魘遠離，保障您的行車安全'
          ]

        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
div.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    max-width: 100%;
    div.product {
      width: 200px;
      // position: relative;
      // border:1px solid black;
      margin: 10px 13px;
      img {
        height: 150px;
        object-fit: contain;
      }
      span.title {
        font-size: 16px;
        font-weight: bold;
        height: 30px;
      }
      span.size{
        position: relative;
        margin-bottom: 10px;
      }
      div.information {
        margin-top:5px;
        span.price {
          color: #f34841;
          font-size: 16px;
        }
        span.btn {
          border: 1px solid #181818;
          border-radius: 20px;
          padding: 3px 15px;
          font-size: 14px !important;
          margin-left: 10px;
          position: absolute;
          vertical-align: middle;
          position: relative;
        }
      }
    }
  }
 </style>
