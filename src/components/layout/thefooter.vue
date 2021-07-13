<template>
  <div>
    <div class="footer-body">
      <div class="footer-first">
        <div class="footer-sub d-flex flex-column">
          <h2 class="ml-5">準備啟程</h2>
          <h4 class="ml-5">
            Get exclusive digital marketing update straight to your inbox.
          </h4>
          <div class="footer-submail">
            <input type="text" placeholder="Email address" class="ml-5"/>
            <button class="ml-5">Subscribe</button>
          </div>
        </div>
        <div class="footer-detil">
          <div>
            <h2><a href="#">售後服務</a></h2>
            <div>
              <h3 class="mb-2 mt-4"><a href="#" class="red--text">購物說明</a></h3>
              <h4 class="mb-1"><a href="#">顧客服務</a></h4>
              <h4 class="mb-1"><a href="#">如何購買</a></h4>
              <h4 class="mb-1"><a href="#">退換貨流程</a></h4>
              <h3 class="mb-2 mt-4"><a href="#" class="red--text">會員</a></h3>
              <h4 class="mb-1"><a href="#">會員註冊</a></h4>
              <h4 class="mb-1"><a href="#">會員登入</a></h4>
            </div>
          </div>
          <div>
            <h2 class="mb-5"><a href="#">競標資訊</a></h2>
            <h4 class="mb-1"><a href="#">新手上路</a></h4>
            <h4 class="mb-1"><a href="#">熱門競標</a></h4>
            <h4 class="mb-1"><a href="#">車主文章</a></h4>
            <h4 class="mb-1"><a href="#">車款比價</a></h4>
            <h4 class="mb-1"><a href="#">常見問題</a></h4>
          </div>
          <div>
            <h2 class="mb-5"><a href="#">關於我們</a></h2>
            <h4 class="mb-1"><a href="#">TheVroom</a></h4>
          </div>
          <div>
             <h2><a href="#">討論區分享</a></h2>
          </div>
        </div>
      </div>
      <div class="footer-icon width=100px">
        <div><i class="fab fa-facebook-square"></i></div>
        <div><i class="fab fa-instagram"></i></div>
        <div><i class="fab fa-twitter-square"></i></div>
      </div>
      <div class="footer-last mt-5">
        <p>©2020 thevroom Co., Ltd. | 條款及細則 | 關於thevroommmm11</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  .footer-body {
    padding: 30px 0;
    background-color: #181818;
    .footer-first {
      display: flex;
      justify-content: space-around;

      .footer-sub {
        margin: 0 auto;
        width: 250px;
        color: #fff;
        h4 {
          font-size: 12px;
        }
        .footer-submail {
          display: flex;
          flex-direction: column;
          input {
            height: 25px;
            background-color: transparent;
            margin: 15px 0;
            width: 200px;
            padding: 15px 20px;
            border: 1px solid #bfbdbd;
          }
          button {
            width: 100px;
            background-color: red;
            color: #fff;
            height: 25px;
            border-radius: 5px;
          }
        }
      }
      .footer-detil {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
    .footer-icon {
      margin: 0 auto;
      width: 90%;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid #fff;
      i {
        margin: 0 20px;
      }
    }
    .footer-last {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
