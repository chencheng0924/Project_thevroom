<template>
  <div>
    <v-app>
      <v-card
        outline
        width="800"
        height="400"
        style="border:2px solid black; margin:0 auto;"
      >
        <v-container fluid>
          <v-row align="center" style="border:2px solid black">
            <v-col class="d-flex" cols="12" sm="3">
              <v-select
                :items="items"
                label="請選擇車廠"
                dense
                outlined
                style="border-radius:50px"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="3">
              <v-select
                :items="brands"
                label="請選擇車款"
                dense
                outlined
                style="border-radius:50px"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="3">
              <v-select
                :items="version"
                label="請選擇車系"
                dense
                outlined
                style="border-radius:50px"
              >
              </v-select>
            </v-col>

            <v-col class="text-center">
              <v-btn></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card
        class="d-flex justify-space-around"
        width="800"
        height="400"
        style="border:2px solid black; margin:0 auto;"
      >
        <v-card v-for="n in 4" :key="n" class="pa-2">
          justify-space-around
        </v-card>
      </v-card>
    </v-app>
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

<style>
.v-text-field__details {
  display: none !important;
}
</style>
