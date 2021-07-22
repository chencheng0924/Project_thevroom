<template>
    <div id="app">
        <div class="banner">
           <img :src="big" class="big">
        </div>
       <h1><img :src="house" class="house"> / 配件專賣區</h1>
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
          title: '【OSRAM】T10 LED藍光 OSRAM 2880BL 2入 4052899333482',
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
        }
      ]
    }
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
    div.product{
        img{
            height: 250px;
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

</style>
