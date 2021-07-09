<template>
  <div>
    <div class="footer-body">
      <div class="footer-first">
        <div class="footer-sub">
          <h2>準備啟程</h2>
          <h4>
            Get exclusive digital marketing update straight to your inbox.
          </h4>
          <div class="footer-submail">
            <input type="text" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div class="footer-detil">
          <div><a href="#">售後服務</a></div>
          <div><a href="#">競標資訊</a></div>
          <div><a href="#">關於我們</a></div>
          <div><a href="#">討論區分享</a></div>
        </div>
      </div>
      <div class="footer-icon">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter-square"></i>
      </div>
      <div class="footer-last">
        <p>©2020 thevroom Co., Ltd. | 條款及細則 | 關於thevroom</p>
      </div>
    </div>
    <v-app id="inspire">
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
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
            background-color: #fff;
            margin: 15px 0;
            width: 200px;
            align-self: center;
          }
          button {
            width: 100px;
            align-self: center;
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
