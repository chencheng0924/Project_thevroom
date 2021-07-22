<template>
  <div id="banner">
    <img :src="banner" class="banner">
    <div class="bannerWord">
        <span>{{bannerSoul}}</span>
        <p class="ad">TheVroom 讓你遇見夢想車款</p>
        <p class="ad">與理想的自己相遇</p>
    </div>

    <div class="buy">
      <h1>新手買車-競標說明</h1>
      <br>
      <div class="firstLine">
          <div class="stepO step1">
            <span> 01 鎖定競標場次</span>
            <p>
            瀏覽競標會場，鎖定有興趣的競標場次，
            瀏覽競標規則，準備「加入會員」參與競標
            </p>
            <img :src="stepOne" class="whiteCar">
          </div>

          <div class="stepE step2">
            <span> 02 加入會員</span>
            <p>
            加入會員，同意競標規則，即可參與競標。
            會員於後台擁有專屬會員行事曆，可將競標場
            次加入行事曆，管理您專屬的「The Vroom行程」
            </p>
          </div>
      </div>
      <div class="secondLine">
          <div class="stepO step3">
            <span> 03 同意競標聲明</span>
            <p>
            本站嚴格禁止棄標，如棄標累計兩次，
            會員帳號將被凍結。因此加入會員前請詳閱
            競標規則與聲明，避免影響您的權益。
            </p>
            <img :src="stepThree" class="contract icon">
          </div>

          <div class="stepE step4">
            <span> 04 參加競標</span>
            <p>
            設定好預算，看好價格，按下競標按鈕參與競標。

            每口叫價金額為賣家設置，競標金額需以此為基準，
            頁面上亦提供自動出價服務，讓您不避盯著電腦，也
            能競逐您喜愛的車款。
            </p>
          </div>

          <div class="stepO step5">
            <span> 05 收到得標email</span>
            <p>
              競標時間結束後，本站會寄得標email通知得標者。

              所以記得寄起來心儀車款競標截止時間
              ，並且注意您的信箱喔~
            </p>
            <img :src="stepFive" class="medal icon">
          </div>
      </div>
    </div>
    <div class="sell">
      <h1>新手買車-線上估價</h1>
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
      <button type="button" class="v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default" style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65);"><span class="gobiding"> 前往拍賣場 </span></button>
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
      gogo: require('../assets/new-driver-pic/gogo.png')
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
div.bannerWord{
  background: url(../assets/new-driver-pic/banner-word.png);
  color:#fff;
  width:620px;
  height:200px;
  position: absolute;
  left:0;
  top:48px;
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
  font-size: $middleTitle;
  position: relative;
  padding:30px;

  &:after{
    content: "";
    position: absolute;
    width:90%;
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
  .firstLine,.secondLine{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .stepO{
    position: relative;
    margin:50px 30px 30px 30px;
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
    margin:50px 30px 30px 30px;
    span{
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    p{
      padding:20px 5px 5px 5px;
    }
  }
}

div.sell{
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
     button{
       margin: 30px 0;
       cursor:pointer;
     }
  }
}
</style>
