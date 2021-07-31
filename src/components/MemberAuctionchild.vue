<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div
        style="width:600px;height:100%;border:1px solid rgba(0,0,0,.1);border-radius:10px"
        class="pa-5 my-5"
      >
        <div
          style="height:100px"
          class="d-flex flex-column justify-space-around"
        >
          <div>訂單編號:{{ num }}</div>
          <div>訂購時間:{{ time }}</div>
          <div>訂單金額:{{ price }}</div>
        </div>
        <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                檢視訂單細項
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <member-auctiongrandchild
                  v-for="item in detail"
                  :key="item.id"
                  :img="item.img"
                  :title="item.title"
                  :count="item.count"
                  :price="item.price"
                />
                <div class="align-self-end">訂單金額:${{ totalp }}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </media>
    <!-- ----------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div
        style="width:300px;height:100%;border:1px solid rgba(0,0,0,.1);border-radius:10px"
        class="pa-5 my-5 ma-auto"
      >
        <div
          style="height:100px"
          class="d-flex flex-column justify-space-around"
        >
          <div>訂單編號:{{ num }}</div>
          <div>訂購時間:{{ time }}</div>
          <div>訂單金額:{{ price }}</div>
        </div>
        <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                檢視訂單細項
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <member-auctiongrandchild
                  v-for="item in detail"
                  :key="item.id"
                  :img="item.img"
                  :title="item.title"
                  :count="item.count"
                  :price="item.price"
                />
                <div style="text-align:right" class="text-h6">訂單金額:${{ totalp }}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import MemberAuctiongrandchild from './MemberAuctiongrandchild.vue'
import Media from 'vue-media'
export default {
  props: ['num', 'time', 'price', 'detail'],
  components: {
    MemberAuctiongrandchild,
    Media
  },
  data () {
    return {
      total: 0
    }
  },
  computed: {
    totalp () {
      this.detail.forEach(item => {
        // console.log(item.count)
        // console.log(item.price)
        console.log(item.price * item.count)
        this.total += item.price * item.count
      })
      return this.total
    }
  }
}
</script>
