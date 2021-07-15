<template>
  <div>

    <div class="title">
      <h3 class="title_name">車款比較</h3>
    </div>

    <div class="card">
      <v-card
      outline
      width="1200"
      height="450"
      style="border:2px solid black; margin:0 auto;"
      class="mt-6"
      >

        <div class="card_tile">
          <div class="card_title_name">選擇車款進行比較</div>
        </div>
        <div class="select_bar">
          <ul class="bar">
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
            <li>
              <v-btn rounded color="#F34841" dark width="150" height="40">加入</v-btn>
            </li>
          </ul>
        </div>

        <div class="liner"></div>

        <div class="card_photo_area">
          <div class="inside_area">
            <div class="card_photo"></div>
              <div class="card_photo"></div>
              <div class="card_photo_area_btn">
                <div class="area_btn_inside">
                  <div class="area_btn_word">目 前 選 擇<span class="area_btn_num"> 0 </span>輛</div>
                  <v-btn rounded color="#F34841" dark width="150" height="40">加入</v-btn>
                </div>
              </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cols: 'true',
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
.v-text-field__details {
  display: none !important;
}

.title {
  width: 100%;
  // border: 1px solid #000;
  margin-top: 50px;
  .title_name{
    // border: 1px solid #000;
    width: 1200px;
    margin: 0 auto;
  }
}

.card_tile{
  // border: 1px solid #000;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  .card_title_name{
    border: 4px solid #f20;
    border-top: none;
    border-bottom: none;
    border-right: none;
    color: #F34841;
    width: 1100px;
    font-size: 20px;
    font-weight: 700;
    padding-left: 20px;
  }
}

.select_bar{
  // border: 1px solid #000;
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .bar{
    // border: 1px solid #f20;
    width: 1100px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
}

.v-input.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  display: flex;
  justify-content: space-around;
}

.v-application ul, .v-application ol {
  padding: 0;
}

.liner{
  border-top: 3px solid #000;
  width: 1100px;
  margin: 0 auto;
  margin-top: 30px;
}

.card_photo_area{
  // border: 1px solid #000;
  width: 100%;
  height: 235px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  .inside_area{
    // border: 1px solid #f20;
    width: 1100px;
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_photo{
    border: 1px solid #f20;
    width: 350px;
    height: 200px;
    background-color: lightgray;
  }
  .card_photo_area_btn{
    // border: 1px solid #f20;
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .area_btn_inside{
      // border: 1px solid #000;
      width: 150px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .area_btn_word{
        font-size: 20px;
        font-weight: 700;
        .area_btn_num{
          color: #F34841;
        }
      }
    }
  }
  }
}
</style>
