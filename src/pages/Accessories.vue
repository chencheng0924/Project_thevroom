<template>
  <div>
    <div class="banner">
      <img style="width:100%;height:700px" :src="big" class="big" />
    </div>
    <div style="width:75%" class="ma-auto my-10 d-flex flex-column justify-center align-center">
      <div class="align-self-start">
        <h1 text-h4 font-weight-bold>
          <img :src="house" class="house" /> / 配件專賣區
        </h1>
      </div>
      <div class="main">
        <div class="accessories">
          <span class="search">搜尋配件</span>
          <ul class="productList">
            <span>雨刷</span>
            <li>硬骨型</li>
            <li>軟骨型</li>
            <li>後窗專用型</li>
          </ul>
          <ul class="productList">
            <span>小燈/方向燈/煞車燈</span>
            <li>小燈/方向燈/第三煞車燈</li>
            <li>牌照燈</li>
          </ul>
          <ul class="productList">
            <span>音響</span>
            <li>高音揚聲器</li>
            <li>低音砲管</li>
          </ul>
          <ul class="productList">
            <span>胎壓偵測器</span>
            <li>胎內</li>
            <li>胎外</li>
          </ul>
          <ul class="productList">
            <span>救車/哇電/警告標誌</span>
            <li>電源供應器</li>
            <li>千斤頂</li>
            <li>警告標示</li>
          </ul>
          <span class="btn text-subtitle-1 font-weight-light">搜尋</span>
        </div>
        <div class="productList">
          <div class="product" v-for="items in productList" :key="items">
            <img :src="items.imgURL" />
            <br />
            <span class="title text-subtitle-1 font-weight-bold">{{
              items.title
            }}</span>
            <br />
            <span class="size">{{ items.size }}</span>
            <br />
            <div class="information">
              <span class="price">{{ items.price }}</span>
              <span class="btn text-subtitle-1 font-weight-bold" style="cursor: pointer;"
                >立即選看</span>
              <span class="black white--text btn text-subtitle-1 font-weight-bold" style="cursor: pointer;"
                >加入購物車</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      big: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      house: require('../assets/accessories-pic/house.png'),
      productList: [
        {
          imgURL: require('../assets/accessories-pic/rain/soft_rain.jpeg'),
          id: 'softrain158',
          title: 'BOSCH 新款軟骨雨刷',
          size: '16吋',
          price: '$158'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/soft_rain_1068.jpeg'),
          id: 'softrain1068',
          title: 'PIAA 歐系通用雨刷 Si-TECH 軟骨',
          size: '24吋',
          price: '$1068'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/back_rain369.png'),
          id: 'backrain369',
          title: 'CARBUFF 日系車後雨刷',
          size: 'M-GRA30款 12吋/305mm',
          price: '$369'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/back_rain550.webp'),
          id: 'backrain550',
          title: 'BOSCH後雨刷 C4-RJ13-330',
          size: '13吋/330mm',
          price: '$550'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/stiff_rain245.webp'),
          id: 'stiffrain245',
          title: 'CARBUFF 硬骨雨刷',
          size: '12吋',
          price: '$245'
        },
        {
          imgURL: require('../assets/accessories-pic/light/broad_1288.jpeg'),
          id: 'light1288',
          title: 'RF 牌照燈組Yaris',
          price: '$1288'
        },
        {
          imgURL: require('../assets/accessories-pic/light/broad_audi1288.jpeg'),
          id: 'lightaudi1288',
          title: 'RF牌照燈組AUDI A4/A5/Q5 ',
          price: '$1288'
        },
        {
          imgURL: require('../assets/accessories-pic/light/light_blue780.jpeg'),
          id: 'lightblue780',
          title: '【OSRAM】T10 LED藍光 ',
          size: 'OSRAM 2880BL 2入',
          price: '$780'
        },
        {
          imgURL: require('../assets/accessories-pic/light/light_stop100.jpeg'),
          id: 'lightstop100',
          title: '第三煞車燈 黃光橘光',
          price: '$100'
        },
        {
          imgURL: require('../assets/accessories-pic/light/light_stop930.jpeg'),
          id: 'lightstop930',
          title: 'FOCUS MK3專用煞車燈',
          size: '2入',
          price: '$930'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker.jpg'),
          id: 'speaker1500',
          title: 'BOSS 音頻SVC低音炮',
          size: 'P10SVC 1200W',
          price: '$1500'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_3.jpg'),
          id: 'speaker4800',
          title: 'Sondpex雙端口無源低音炮外殼',
          size: ' 450W 帶 2"x5" 喇叭高音揚聲器和LED',
          price: '$5500'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_4.jpg'),
          id: 'speaker4800',
          title: 'Audiopipe歐姆低音砲管',
          size: 'Audiopipe® - AP-DX',
          price: '$3600'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_5.jpg'),
          id: 'speaker4800',
          title: 'DS18® 鋁製超級子彈頭高音揚聲器',
          size: 'PRO 1240W VC',
          price: '$900'
        },
        {
          imgURL: require('../assets/accessories-pic/save/kgs850.webp'),
          id: 'kgs',
          title: '象王 車用油壓千斤頂',
          size: '5T',
          price: '$900'
        },
        {
          imgURL: require('../assets/accessories-pic/save/power2088_red.jpeg'),
          id: 'powerred',
          title: '電力坦克電源供應器 ',
          size: '4000cc 汽油',
          price: '$2088'
        },
        {
          imgURL: require('../assets/accessories-pic/save/sign150.jpeg'),
          id: 'sign',
          title: '警告標誌',
          price: '$150'
        },
        {
          imgURL: require('../assets/accessories-pic/save/sign_led.jpeg'),
          id: 'signled',
          title: '警告標誌 極光LED三角警示架',
          price: '$558'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_t254680.jpeg'),
          id: 'inside_wheel',
          title: 'TPMS胎內Mio MiTire T25 胎壓模組',
          price: '$3200'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/outside1190.jpeg'),
          id: 'outside_wheel',
          title: 'TTP-Q5外部太陽能胎壓胎溫偵測器',
          price: '$1190'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/orange_inside.jpeg'),
          id: 'inside_wheel7988',
          title: '儀錶板整合型胎壓偵測器',
          size: 'OrangeVW/Audi/Skoda專用',
          price: '$7988'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div.banner {
  img {
    max-width: 100%;
  }
}

h1 {
  margin: 20px 10px;
  img {
    height: 30px;
  }
}

div.main {
  display: flex;
  flex: wrap;
  div.accessories {
    width: 400px;
    position: relative;
    > span.search {
      font-weight: bold;
      font-size: 20px;
      background-color: #181818;
      color: white;
      padding: 10px 70px;
      margin: 20px 10px;
    }
    span.btn {
      border: 1px solid #181818;
      border-radius: 20px;
      padding: 3px 15px;
      margin-left: 10px;
      vertical-align: middle;
      text-align: center;
      position: absolute;
      left: 0;
      width: 150px;
      transform: translateX(30%);
    }

    ul.productList {
      margin: 30px 10px;
      position: relative;
      &:after {
        position: absolute;
        content: '';
        background-color: #bfbdbd;
        left: 0;
        top: 100%;
        width: 70%;
        height: 2px;
        margin-top: 15px;
      }
      span {
        position: relative;
        font-weight: bold;
        font-size: 20px;
        &:after {
          content: '+';
          position: absolute;
          margin-left: 10px;
        }
      }
      li {
        list-style: none;
        margin: 15px 0;
      }
    }
  }

  div.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    width: 900px;
    div.product {
      width: 270px;
      position: relative;
      // border:1px solid black;
      margin: 10px 5px;
      img {
        height: 250px;
        object-fit: contain;
      }
      span.title {
        font-size: 16px;
        font-weight: bold;
        height: 30px;
      }
      div.information {
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
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 100%;
            width: 250px;
            height: 2px;
            background-color: #bfbdbd;
            margin-top: 10px;
            transform: translateX(-20%);
          }
        }
      }
    }
  }
}
</style>
