<template>
  <div id="banner">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <div class="chat">
      <img :src="iconchat" alt="" class="chat">
      <span class="askQuestion">有問題嗎？</span>
      <div class="questionblock" style="display:none">
        <img :src="logochatbox" class="logochatbox">
        <br>
        <img :src="logochat" alt="">
        <span class="questions" v-for="index in groupquestion" :key="index">{{index.group}}</span>
        <br>
        <img :src="customer" alt="">
        <span class="answers">hii</span>
      </div>
    </div>
    <img :src="banner" class="banner">
    <div class="bannerWord">
        <span></span>
        <span class="text-h4 font-weight-bold">{{bannerSoul}}</span>
        <p class="ad text-h6 font-weight-bold">TheVroom 讓你遇見夢想車款</p>
        <p class="ad text-h6 font-weight-bold">與理想的自己相遇</p>
    </div>
    <div class="phonebannerpart">
       <img :src="phonebanner" alt="" class="phonebanner">
       <span class="text-h4 font-weight-bold first">Welcome</span>
      <span class="text-h4 font-weight-bold second">TheVroom</span>
      <img :src="downArrow" alt="" class="godown">
    </div>
    <div class="buy">
      <h1 text-h4 font-weight-bold>新手買車-競標說明</h1>
      <br>
      <div class="firstLine">
          <div class="stepO step1">
            <span text-h6 font-weight-bold> 01 鎖定競標場次</span>
            <p text-subtitle-1 font-weight-light>
            瀏覽競標會場，鎖定有興趣的競標場次，
            瀏覽競標規則，準備「加入會員」參與競標
            </p>
            <img :src="stepOne" class="whiteCar">
          </div>

          <div class="stepE step2">
            <span text-h6 font-weight-bold> 02 加入會員</span>
            <p text-subtitle-1 font-weight-light>
            加入會員，同意競標規則，即可參與競標。
            會員於後台擁有專屬會員行事曆，可將競標場
            次加入行事曆，管理您專屬的「The Vroom行程」
            </p>
          </div>
      </div>
      <div class="secondLine">
          <div class="stepO step3">
            <span text-h6 font-weight-bold> 03 同意競標聲明</span>
            <p text-subtitle-1 font-weight-light>
            本站嚴格禁止棄標，如棄標累計兩次，
            會員帳號將被凍結。因此加入會員前請詳閱
            競標規則與聲明，避免影響您的權益。
            </p>
            <img :src="stepThree" class="contract icon">
          </div>

          <div class="stepE step4">
            <span text-h6 font-weight-bold> 04 參加競標</span>
            <p text-subtitle-1 font-weight-light>
            設定好預算，看好價格，按下競標按鈕參與競標。

            每口叫價金額為賣家設置，競標金額需以此為基準，
            頁面上亦提供自動出價服務，讓您不避盯著電腦，也
            能競逐您喜愛的車款。
            </p>
            <button type="button" class="btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default" style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65); padding-top:7px; width:60px; height:40px;"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-gavel theme--dark"></i></span></button>
          </div>

          <div class="stepE step4-phone">
            <span text-h6 font-weight-bold> 04 參加競標</span>
            <p text-subtitle-1 font-weight-light>
            設定好預算，看好價格，按下競標按鈕參與競標。

            每口叫價金額為賣家設置，競標金額需以此為基準，
            頁面上亦提供自動出價服務，讓您不避盯著電腦，也
            能競逐您喜愛的車款。
            </p>
            <button type="button" class="btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default" style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65); padding-top:7px; width:60px; height:40px;"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-gavel theme--dark"></i></span></button>
          </div>

          <div class="stepO step5">
            <span text-h6 font-weight-bold> 05 收到得標email</span>
            <p text-subtitle-1 font-weight-light>
              競標時間結束後，本站會寄得標email通知得標者。

              所以記得寄起來心儀車款競標截止時間
              ，並且注意您的信箱喔~
            </p>
            <img :src="stepFive" class="medal icon">
          </div>
      </div>
    </div>

    <div class="sell">
      <h1 text-h4 font-weight-bold>新手買車-線上估價</h1>
      <form action="">
       車輛廠牌：<input type="text">
       出廠年份：<input type="text">
       里程數：<input type="text">
       姓名：<input type="text">
       email：<input type="text">
       <button>送出</button>
      </form>
      <div class="gogo">
      <img :src="gogo" class="go">
      <br>
      <button type="button" class="v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default" style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65);" @click="driver"><router-link to="/AuctionOverview" style='color:#ffffff'>前往拍賣會場</router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
export default ({
  data () {
    return {
      banner: require('../assets/new-driver-pic/new-driver-banner.jpg'),
      bannerSoul: '勝負心是促使人們前進的原動力',
      stepOne: require('../assets/new-driver-pic/step1-whitecar.png'),
      stepThree: require('../assets/new-driver-pic/contract.png'),
      stepFive: require('../assets/new-driver-pic/medal.png'),
      gogo: require('../assets/new-driver-pic/gogo.png'),
      iconchat: require('../assets/new-driver-pic/question.png'),
      logochat: require('../assets/logo-only(2).png'),
      customer: require('../assets/new-driver-pic/customer.png'),
      logochatbox: require('../assets/logowhite-transparent.png'),
      phonebanner: require('../assets/new-driver-pic/forphone.jpg'),
      downArrow: require('../assets/new-driver-pic/down-arrow.png'),
      groupquestion: [
        { group: '競標相關' },
        { group: '會員相關' },
        { group: '訂單相關' },
        { group: '其他' }
      ],
      ask: [
        {
          question: '競標流程是什麼？我需要準備什麼資料嗎？',
          answer: '競標流程非常簡單，只要鎖定拍賣商品，之後加入會員，就可以出價參加競標了！看看拍賣會場'
        },
        {
          question: '我要怎麼知道自己已經得標？',
          answer: '競標時間結束後，我們會寄出得標通知email給得標者，同時也會寄出候補信給第二高價者，因此記得您心儀車款截標時間，並前往您的信箱收信就對囉~'
        },
        {
          question: '得標後要怎麼付款?',
          answer: '本站一律採取線上付款，相關分期方案請洽您的信用卡公司。'
        },
        {
          question: '得標後天內要完成付款?',
          answer: '得標後請在3天內完成付款，逾期將視同棄標，累計兩次將會停止您的帳號。'
        },
        {
          question: '每一個人都可以開拍賣場嗎?',
          answer: '只有高級會員可以開設拍賣場，相關會員方案請洽會員專區'
        },
        {
          question: '拍賣會場的「自動出價功能」是什麼意思？',
          answer: '「自動出價功能」是一個提供您不用一直在電腦前也可以競標愛車的服務。只要設定好您的上限金額，系統會自動幫您出價，只要沒超過預算，時間一到您就會收到得標通知囉！'
        },
        {
          question: '賣車起標價格有規定嗎？',
          answer: '拍賣車輛的起標價格完全由開設拍賣場的會員自行決定，一但產品上架拍賣，我們即視起標價格為您接受的最低成交價，因此請務必在開設拍賣場時設定一個可以接受的價格，避免您的權益受損。'
        },
        {
          question: '什麼是每口叫價？',
          answer: '「每口叫價」為每次競標應出價的價格區間，例如起標價為30萬，每口叫價為2萬，則第一次叫價對低金額為32萬。本站每口叫價價格由賣家自行決定。'

        }
      ]
    }
  },
  methods: {
    driver () {
      const img = document.querySelector('.go')
      img.classList.add('isActive')
    }
  }
})
</script>
<style scoped lang="scss">
$bigTitle:"60px";
$middleTitle:"40px";
$parnerColor:#f34841;
*{
  font-family:'Noto Sans';
}

div#banner{
  img.banner{
  max-width: 100%;
  position: relative;
  }
  div.chat{
    position: relative;
    border:1px solid #181818;
     >span.askQuestion{
      background-color:#bfbdbd;
      color:$parnerColor;
      position: fixed;
      z-index: 98;
      width:150px;
      top:350px;
      left:80px;
      text-align: center;
      padding:20px 20px;
      border-radius: 20px;
      // display: none;
    }
    img.chat{
    position: fixed;
    z-index: 99;
    width:100px;
    top:300px;
    &:hover{
      transform: scale(1.1);
      cursor: pointer;
    }
    // &:hover span.askQuestion{
    //   display: block;
    // }
  }
  div.questionblock{
    background-color: #ffffff;
    width:200px;
    position: absolute;
    right:100px;
    z-index: 99;
    img{
      width:30px;
    }
    span.questions{
      background-color:#f34841;
      color:#ffffff;
      padding:5px 10px;
    }
    img.logochatbox{
      height:100px;
      width:100px;
      background-color: #181818;
      object-fit: contain;
    }
  }
  }
div.bannerWord{
  background: url(../assets/new-driver-pic/banner-word.png);
  color:#fff;
  width:620px;
  height:200px;
  position: absolute;
  left:0;
  top:64px;
span{
  font-size:40px;
  padding-left: 5px;
}

p.ad{
  font-size: 30px;
  padding-left: 5px;
}
}
}

h1{
  position: relative;
  padding:30px;
  max-width:1200px ;
  margin: 0 auto;

  &:after{
    content: "";
    position: absolute;
    width:100%;
    height:3px;
    left:30px;
    top:100%;
   background-color: $parnerColor;
  }
}

@mixin stepO {
  background-color:#181818;
  font-size:20px;
  color:#ffffff;
  height:300px;
  width:400px;
  padding:20px 5px 20px 20px;
}

@mixin stepE{
  background-color:#ffffff;
  font-size:20px;
  color:#181818;
  height:300px;
  width:400px;
  padding:20px 5px 20px 20px;
  border:1px solid #181818;
}
div.buy{
  // display: flex;
  // flex-wrap: wrap;
  width:1200px;
  margin:0 auto;
  .firstLine,.secondLine{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  div.firstLine{
    div.step2{
      margin-left: 15px;
    }
  }
  div.secondLine{
    margin-top:50px;
    div.step4{
      width:350px;
      margin: 0 15px;
      position: relative;
      button{
        position: absolute;
        right:20px;
        bottom: 10px;
      }
    }
    div.step4-phone{
      display: none;
    }
  }
  }
  .stepO{
    position: relative;
    span{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p{
      padding:20px 5px 5px 5px;
    }
    @include stepO;
    img.whiteCar{
      height:170px;
      position: absolute;
      right: 0;
      bottom:0;
    }
    img.icon{
      height: 100px;
      position: absolute;
      right:0;
      bottom:0;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }

  .stepE{
    @include stepE;
    position: relative;
    // margin:30px 30px 0px 0px;
    span{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p{
      padding:20px 5px 5px 5px;
    }
  }

@keyframes letsgo {
  70%{
    transform: scale(0.7);
  }
  50%{
     transform: scale(0.5);
  }
  30%{
    transform: scale(0.3);
  }
}
div.sell{
  width:1200px;
  margin:0 auto;
  form{
    border:1px solid #181818;
    width:1000px;
    margin:50px auto;
    font-size: 20px;
    input{
      //  display: flex;
      position: relative;
      border-bottom:1px solid #181818;
      width:100%;
      }
      button{
        color:#ffffff;
        background-color: $parnerColor;
        text-align: center;
        width: 100%;
        padding:5px 0px;
      }
    }
   .gogo{
     width:1000px;
     margin: 0 auto;
     text-align: center;
     img.go{
       width:200px;
     }
     .isActive{
       animation-name:letsgo;
       animation-duration: 3s;
     }
     button{
       margin: 30px 0;
       cursor:pointer;
     }
  }
}

div.phonebannerpart{
    display: none;
}

@media (max-width: 576px){
div.banner{
  max-width: 100%;
}
img.banner{
   display: none;
 }
 div.bannerWord{
   display: none;
 }

div.phonebannerpart{
  display: block;
  position: relative;
  max-width: 100%;
  img.phonebanner{
    max-width:100%;
    overflow-x: hidden;
  }
  span.first{
    position: absolute;
    color:#ffffff;
    left:50px;
    top:30px;
  }
  span.second{
    position: absolute;
    color:#ffffff;
    left:150px;
    top:70px;
  }
  img.godown{
    height:30px;
    position: absolute;
    text-align: center;
    bottom: 10px;
    left: 45%;
    margin: auto;
  }
}

div.buy{
  max-width: 100%;
  margin: 0 auto;
  h1{
    max-width: 100%;
    &:after{
      max-width: 80%;
    }
  }
  div.firstLine{
    display: block;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    // transform: translateX(8%);
    div.stepO{
      max-width: 100%;
      margin-bottom: 30px;
      margin-left:0;
    }
    div.stepE{
      max-width: 100%;
      margin:0;
      margin-bottom: 30px;
    }
  }

  div.secondLine{
    display: block;
    max-width: 100%;
    // transform: translateX(8%);
    div.stepO{
      max-width: 100%;
      margin-bottom: 30px;
    }

    div.stepE{
      max-width: 100%;
      margin:0;
      margin-bottom: 30px;
    }

    div.step4{
      display: none;
      margin-bottom: 30px;
    }

    div.step4-phone{
      display: block;
      position: relative;
      button{
        position: absolute;
        right:50px;
        bottom:20px;
      }
    }
  }
}

div.sell{
  max-width: 100%;
  margin:0 auto;
  h1{
    max-width: 100%;
    &:after{
      max-width: 80%;
    }
  }
  form{
    max-width: 90%;
    button{
      text-align: center;
      }
  }
}

div.gogo{
  max-width: 100%;
  text-align: center;
  img.go{
    width:100px;
  }
}

}
</style>
