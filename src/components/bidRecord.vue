<template>
    <div class="bidRecord">
        <v-sheet
        class="mx-auto"
        elevation="0"
        max-width="600"
        >
            <v-slide-group
            v-model="model"
            active-class="success"
            show-arrows
            >
                <v-slide-item
                    v-for="record in recordList"
                    :key="record"
                >
                    <v-card
                    color="#FFFFFF"
                    class="ma-4 d-flex flex-column"
                    height="180"
                    width="200"
                    >
                        <div style="width: 200px; height: 160px;">
                            <div class="pl-2 pt-2 text-h6">{{ record.date }}</div>
                            <div class="pl-2 pt-2 text-h6">{{ record.time }}</div>
                            <div class="pl-2 pt-2 text-h6">{{ record.price }}</div>
                        </div>
                        <div class="pa-2" style="width: 200px; height: 40px; background-color: #F34841; color: #FFFFFF">
                            {{ record.account }}
                        </div>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
export default {
  data: () => ({
    recordList: [
      { id: '1', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '2', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '3', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '4', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '5', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '6', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '7', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '8', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '9', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' },
      { id: '10', date: '2021/05/22', time: '08:23:33 a.m', price: 'TWD 1,200,000', account: 'ass345d****' }
    ]
  })
}
</script>
