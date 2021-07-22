<template>
  <div class="compare_inside">
    <div class="inside">
      <div class="inside_card">
        <div class="table">
          <div class="table_top">
            <div class="top_first">車款比較</div>
          </div>
          <diV class="table_middle">
            <div class="middle_first">車款</div>
            <div class="middle_second">
              <div class="middle_sec_in">
                <div class="sec_in_img">
                  <img src="../assets/compare-car-pic/hotcar01.png" class="sec_image">
                </div>
                <div class="sec_in_select">
                  <ul style="list-style: none; padding: 10px 0 0 0; height: 100%" class="d-flex flex-column justify-space-around">
                    <li>
                      <v-select
                        :items="items"
                        label="請選擇車廠"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                    <li>
                      <v-select
                        :items="brands"
                        label="請選擇車款"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                    <li>
                      <v-select
                        :items="version"
                        label="請選擇車系"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="middle_third">
              <div class="middle_thr_in">
                <div class="thr_in_img">
                  <img src="../assets/compare-car-pic/hotcar02.png" class="thr_image">
                </div>
                <div class="thr_in_select">
                  <ul style="list-style: none; padding: 10px 0 0 0; height: 100%" class="d-flex flex-column justify-space-around">
                    <li>
                      <v-select
                        :items="items"
                        label="請選擇車廠"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                    <li>
                      <v-select
                        :items="brands"
                        label="請選擇車款"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                    <li>
                      <v-select
                        :items="version"
                        label="請選擇車系"
                        dense
                        outlined
                        style="border-radius:50px; width:270px"
                      ></v-select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </diV>
          <diV class="table_bottom">
            <div class="bottom_first">比較優勢</div>
            <div class="bottom_second"></div>
            <div class="bottom_third"></div>
          </diV>
        </div>
      </div>

      <div class="btn_middle">
        <div class="btn_mid_inside">
          <div class="btn_first">
            <v-btn
                x-large
                color="#F34841"
                dark
                width="100%"
                height="100%"
                @click="component = 'table-one'"
              >
                基本資訊
              </v-btn>
          </div>
          <div class="btn_second">
            <v-btn
                x-large
                color="#363636"
                dark
                width="100%"
                height="100%"
                @click="component = 'table-two'"
              >
                技術規格
              </v-btn>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px">
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import CompareTableA from './CompareTableA.vue'
import CompareTableB from './CompareTableB.vue'

export default {
  components: {
    'table-one': CompareTableA,
    'table-two': CompareTableB
  },
  data: () => ({
    component: 'table-one',
    items: ['Austin Martin', 'Benz', 'BMW', 'Toyota', 'Audi', 'Ford', 'Honda'],
    brands: [
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013'
    ],
    version: ['1', '2', '3', '4', '5', '6', '7', '8']
  })
}
</script>

<style lang="scss">
  .compare_inside {
    .v-text-field__details {
  display: none !important;
  }
    .inside {
      border: 2px solid #00f;
      width: 100%;
      height: 1600px;
      .inside_card{
        border: 1px solid #f20;
        width: 100%;
        margin-top: 50px;
        .table{
          // border: 1px solid #000;
          width: 1200px;
          height: 650px;
          margin: 0 auto;
          .table_top{
          border: 1px solid #000;
          width: 100%;
          height: 12%;
          background: #D6D5D5;
          .top_first{
            // border: 1px solid #000;
            width: 10%;
            height: 100%;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .table_middle{
          // border: 1px solid #f20;
          width: 100%;
          height: 76%;
          display: flex;
          .middle_first{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            border-right: none;
            width: 10%;
            height: 100%;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .middle_second{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            border-right: none;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .middle_sec_in{
              border: 1px solid #000;
              width:50%;
              height: 80%;
              .sec_in_img{
                border: 1px solid #f20;
                width:100%;
                height: 50%;
                .sec_image{
                  width: 100%;
                  height: 100%;
                }
              }
              .sec_in_select{
                border: 1px solid #00f;
                width:100%;
                height: 50%;
              }
            }
          }
          .middle_third{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .middle_thr_in{
              border: 1px solid #000;
              width:50%;
              height: 80%;
              .thr_in_img{
                border: 1px solid #f20;
                width:100%;
                height: 50%;
                .thr_image{
                  width: 100%;
                  height: 100%;
                }
              }
              .thr_in_select{
                border: 1px solid #00f;
                width:100%;
                height: 50%;
              }
            }
          }
        }
        .table_bottom{
          // border: 1px solid #f20;
          width: 100%;
          height: 12%;
          display: flex;
          .bottom_first{
            border: 1px solid #000;
            border-right: none;
            width: 10%;
            height: 100%;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bottom_second{
            border: 1px solid #000;
            border-right: none;
            width: 45%;
            height: 100%;
          }
          .bottom_third{
            border: 1px solid #000;
            width: 45%;
            height: 100%;
          }
        }
        }
      }
      .btn_middle{
        border: 1px solid #f20;
        width: 100%;
        height: 75px;
        margin-top: 50px;
        .btn_mid_inside{
          border: 1px solid #000;
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          .btn_first{
            border: 1px solid #00f;
            width: 50%;
            height: 100%;
          }
          .btn_second{
            border: 1px solid green;
            width: 50%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
