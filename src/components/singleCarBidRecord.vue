<template>
    <div class="singleBid d-flex">
        <div class="spaceLeft">
            <div class="d-flex" style="cursor: pointer;" @click="moveback">
                <v-icon>mdi-arrow-left-thick</v-icon>
                <div class="text-subtitle-1 font-weight-medium ml-2" style="color: gray;">返回車輛資訊</div>
            </div>
        </div>
        <div class="bidContent">
            <div class="bidTitle d-flex align-end">
                <div class="bidT text-h6 font-weight-bold">目前競標價錢：</div>
                <div class="bidPrice text-h3 font-weight-bold">1,300,000</div>
            </div>
            <div class="record d-flex flex-column justify-space-around mt-5">
                <div class="recordTitle text-h6 mt-5 font-weight-bold">出價紀錄</div>
                <div class="recordContent d-flex justify-start">
                    <bid-record/>
                </div>
            </div>
            <bid-coming-soon :ends-on="starttime" v-if="showcoming"/>
            <div class="bidTime d-flex align-center mt-5" v-else>
                <div class="bidTimeTitle text-h6 font-weight-bold">拍賣會剩餘時間：</div>
                <Countdown :end="countdowndate"></Countdown>
                <div class="ml-10"><auction-dialogs/></div>
            </div>
            <div class="goBid d-flex align-center mt-5">
                <div class="goBidTi text-h6 font-weight-bold">每口叫價</div>
                <div class="goBidPr text-h6 font-weight-bold ml-2">5000</div>
                <div class="goBidBtn ml-4">
                    <bid-dialogs/>
                </div>
                <div class="checkAuto ml-16">
                    <v-checkbox
                    v-model="checkbox"
                    label="自動出價"
                    style="margin-top: 17px;"
                    ></v-checkbox>
                </div>
                <div class="autoPrice d-flex align-center ml-5">
                    出價上限：
                    <v-text-field
                        label="請輸入金額上限"
                        solo
                        dense
                        style="width: 150px;"
                        :disabled="false"
                    ></v-text-field>
                </div>
                <div style="margin-left: 85px;">
                    <v-btn
                          rounded
                          outlined
                          color="#181818"
                          class="btn"
                          to="/AuctionOverview"
                          dark>
                          回拍賣會總覽
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="spaceRight"></div>
    </div>
</template>

<script>
import bidRecord from './bidRecord.vue'
import AuctionDialogs from './interactive/AuctionDialogs.vue'
import BidDialogs from './interactive/BidDialogs.vue'
import Countdown from 'vuejs-countdown'
import BidComingSoon from './BidComingSoon.vue'

export default {
  props: ['acid'],
  async created () {
    const fd = new FormData()
    fd.append('acid', this.acid)
    const res = await fetch('http://localhost:8080/phpfile/selectbidtime.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    console.log(this.acid)
    this.starttime = resdata[0].STARTINGTIME
    this.duday = resdata[0].DURATION
    console.log(this.starttime)
    console.log(this.duday)
    let year = parseInt(this.starttime.substr(0, 4))
    console.log(year)
    let month = parseInt(this.starttime.substr(5, 2))
    console.log(month)
    const date = parseInt(this.starttime.substr(8, 2))
    console.log(date)
    const hour = parseInt(this.starttime.substr(11, 2))
    console.log(hour)
    const startdate = new Date(year, month - 1, date, hour)
    console.log(startdate)
    const startsec = startdate.getTime()
    console.log(startsec)
    // 計算結束日期
    this.enddate = date + parseInt(this.duday)
    console.log(this.enddate)
    if (this.enddate > 30 && month === 4) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 6) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 9) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 11) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 31 && month === 1) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 3) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 5) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 7) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 8) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 10) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 12) {
      month -= 11
      this.enddate -= 31
      year += 1
    } else if (this.enddate > 29 && month === 2 && year % 4 === 0) {
      month += 1
      this.enddate -= 29
    } else if (this.enddate > 28 && month === 2) {
      month += 1
      this.enddate -= 28
    }

    this.countdowndate = year.toString() + '-' + month.toString() + '-' + this.enddate.toString()
    console.log(this.countdowndate)
    // currrent現在時間換算成毫秒
    const current = Date.now()
    console.log(current)
    if (current < startsec) {
      this.showcoming = true
    } else {
      this.showcoming = false
    }
  },
  data () {
    return {
      showcoming: true,
      starttime: '',
      duday: '',
      enddate: '',
      countdowndate: ''
    }
  },
  components: {
    bidRecord,
    AuctionDialogs,
    BidDialogs,
    Countdown,
    BidComingSoon
  },
  methods: {
    moveback () {
      this.$emit('moveback')
    }
  }
}
</script>

<style lang="scss">
.singleBid{
    width: 1200px;
    height: 630px;
    // border: 1px solid blue;
    margin: 0 auto;
    .bidContent{
        width: 720px;
        height: 630px;
        // border: 1px solid yellow;
        .bidTitle{
            width: 500px;
            height: 80px;
            // border: 1px solid lawngreen;
        }
        .record{
            width: 750px;
            height: 300px;
            // border: 1px solid lightblue;
        }
        .bidTime{
            width: 750px;
            height: 80px;
            // border: 1px solid orange;
        }
        .autoBid{
            width: 600px;
            height: 60px;
            // border: 1px solid purple;
        }
        .goBid{
            width: 850px;
            height: 70px;
            // border: 1px solid khaki;
        }
    }
    .spaceRight{
        width: 200px;
        height: 630px;
        // border: 1px solid red;
    }
    .spaceLeft{
        width: 280px;
        height: 630px;
        // border: 1px solid green;
    }
    .v-text-field__details {
        display: none !important;
    }
}
</style>
