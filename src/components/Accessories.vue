<template>
    <div id="app">
        <div class="banner">
           <img :src="big" class="big">
        </div>
       <h1><img :src="house" class="house"> / 配件專賣區</h1>
      <div class="main">
        <div class="accessories">
            <span>搜尋配件</span>
            <ul class="productList"><span>雨刷</span>
                <li>硬骨型</li>
                <li>軟骨型</li>
                <li>後窗專用型</li>
            </ul>
            <ul class="productList"><span>小燈/方向燈/煞車燈</span>
                <li>小燈/方向燈/第三煞車燈</li>
                <li>牌照燈</li>
            </ul>
             <ul class="productList"><span>音響</span>
                <li>高音揚聲器</li>
                <li>低音砲管</li>
            </ul>
             <ul class="productList"><span>胎壓偵測器</span>
                <li>胎內</li>
                <li>胎外</li>
            </ul>
             <ul class="productList"><span>救車/哇電/警告標誌</span>
                <li>電源供應器</li>
                <li>千斤頂</li>
                <li>警告標示</li>
            </ul>
        </div>
        <div class="productList">
            <div class="product" v-for="items in productList" :key="items">
                <img :src="items.imgURL">
                <br>
                <span class="title">{{items.title}}</span>
                <br>
                <span class="price">{{items.price}}</span>
                <span class="btn">立即查看</span>
            </div>
        </div>
      </div>
 </div>
</template>
<script>
export default ({
  data () {
    return {
      big: require('../assets/accessories-pic/aoto-part-banner.jpg'),
      house: require('../assets/accessories-pic/house.png'),
      productList: [
        {
          imgURL: require('../assets/accessories-pic/rain/soft_rain.jpeg'),
          id: 'softrain158',
          title: 'BOSCH新款軟骨雨刷16吋',
          price: '$158'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/soft_rain_1068.jpeg'),
          id: 'softrain1068',
          title: '【PIAA】歐系通用雨刷 Si-TECH 軟骨 24吋',
          price: '$1068'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/back_rain369.png'),
          id: 'backrain369',
          title: 'CARBUFF 日系車後雨刷 M-GRA30 款12吋/305mm',
          price: '$369'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/back_rain550.webp'),
          id: 'backrain550',
          title: 'BOSCH 後雨刷 C4-RJ13-330 (13吋/330mm)',
          price: '$550'
        },
        {
          imgURL: require('../assets/accessories-pic/rain/stiff_rain245.webp'),
          id: 'stiffrain245',
          title: 'BOSCH 後雨刷 C4-RJ13-330 (13吋/330mm)',
          price: '$245'
        },
        {
          imgURL: require('../assets/accessories-pic/light/broad_1288.jpeg'),
          id: 'light1288',
          title: '【RF】牌照燈組Yaris',
          price: '$1288'
        },
        {
          imgURL: require('../assets/accessories-pic/light/broad_audi1288.jpeg'),
          id: 'lightaudi1288',
          title: '【RF】牌照燈組AUDI A4/A5/Q5 ',
          price: '$1288'
        },
        {
          imgURL: require('../assets/accessories-pic/light/light_blue780.jpeg'),
          id: 'lightblue780',
          title: '【OSRAM】T10 LED藍光 OSRAM 2880BL 2入',
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
          title: 'FOCUS MK3專用煞車燈 2入',
          price: '$930'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker.jpg'),
          id: 'speaker1500',
          title: 'BOSS 音頻®Phantom 系列 10" 1200W 4 歐姆 SVC 低音炮 (P10SVC)',
          price: '$1500'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_3.jpg'),
          id: 'speaker4800',
          title: 'Sondpex® - 8" 雙端口無源 450W 低音炮外殼 帶兩個 2"x5" 喇叭高音揚聲器和 LED',
          price: '$5500'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_4.jpg'),
          id: 'speaker4800',
          title: 'Audiopipe® - AP-DX 系列歐姆單前向發射端口有源低音砲管',
          price: '$3600'
        },
        {
          imgURL: require('../assets/accessories-pic/speaker/speaker_5.jpg'),
          id: 'speaker4800',
          title: 'DS18® - PRO 1240W VC 鋁製超級子彈頭高音揚聲器',
          price: '$900'
        },
        {
          imgURL: require('../assets/accessories-pic/save/kgs850.webp'),
          id: 'kgs',
          title: '象王 車用油壓千斤頂5T',
          price: '$900'
        },
        {
          imgURL: require('../assets/accessories-pic/save/power2088_red.jpeg'),
          id: 'powerred',
          title: '【電力坦克】電源供應器 4000cc 汽油',
          price: '$2088'
        },
        {
          imgURL: require('../assets/accessories-pic/save/sign150.jpeg'),
          id: 'sign',
          title: '【警告標誌】警告標誌',
          price: '$150'
        },
        {
          imgURL: require('../assets/accessories-pic/save/sign_led.jpeg'),
          id: 'signled',
          title: '【警告標誌】警告標誌 極光LED三角警示架',
          price: '$558'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/inside_t254680.jpeg'),
          id: 'inside_wheel',
          title: 'TPMS胎內 Mio MiTire T25 胎壓模組',
          price: '$3200'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/outside1190.jpeg'),
          id: 'outside_wheel',
          title: 'TTP-Q5 外部太陽能胎壓胎溫偵測器',
          price: '$1190'
        },
        {
          imgURL: require('../assets/accessories-pic/aboutwheel/orange_inside.jpeg'),
          id: 'inside_wheel7988',
          title: '【Orange】VW/Audi/Skoda專用儀錶板整合型胎壓偵測器',
          price: '$7988'
        }

      ]
    }
  },
  methods () {

  }
})
</script>
<style lang="scss" scoped>
div.banner{
    img{
        max-width: 100%;
    }
}

 h1{
    font-size: 40px;
    margin: 20px 10px;
    img{
      height:30px;
      }
    }

div.main{
    display:flex;
    flex: wrap;
    div.accessories{
    width:400px;
    >span{
        font-weight: bold;
        font-size: 20px;
        background-color:#181818;
        color: white;
        padding:10px 70px;
        margin:20px 10px;
    }

    ul.productList{
        margin:30px 10px;
        position: relative;
        &:after{
            position:absolute;
            content: "";
            background-color:#bfbdbd;
            left: 0;
            top:100%;
            width:70%;
            height:2px;
            margin-top: 15px;
        }
       span{
           position: relative;
           font-weight: bold;
           font-size: 20px;
           &:after{
               content: "+";
               position: absolute;
               margin-left: 10px;
           }
       }
        li{
            list-style: none;
            margin: 15px 0;
        }
    }
}

div.productList{
    display: flex;
    flex-wrap: wrap;
    width:900px;
    div.product{
        width:300px;
        // border:1px solid black;
        img{
            height: 250px;
            object-fit: contain;
        }
        span.title{
            font-size:16px;
            font-weight: bold;
        }
        span.price{
            color:#f34841;
            font-size:16px;
        }
        span.btn{
            border:1px solid #181818;
            border-radius: 20px;
            padding: 5px 15px;
            font-size:16px;
            margin-left: 10px;
        }
    }
}
}
</style>
