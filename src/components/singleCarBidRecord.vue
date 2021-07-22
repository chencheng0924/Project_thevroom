<template>
    <div class="singleBid d-flex">
        <div class="spaceLeft"></div>
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
            <div class="bidTime d-flex align-center mt-5">
                <div class="bidTimeTitle text-h6 font-weight-bold">拍賣會剩餘時間：</div>
                <div class="bidTimer text-h3 font-weight-bold ml-2">01天08時25分30秒</div>
            </div>
            <div class="goBid d-flex align-center mt-5">
                <div class="goBidTi text-h6 font-weight-bold">每口叫價</div>
                <div class="goBidPr text-h6 font-weight-bold ml-2">5000</div>
                <div class="goBidBtn ml-4">
                    <v-btn
                    rounded
                    color="#F34841"
                    class="btn"
                    dark>
                        <v-icon>mdi-gavel</v-icon>
                    </v-btn>
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
            </div>
        </div>
        <div class="spaceRight"></div>
    </div>
</template>

<script>
import bidRecord from './bidRecord.vue'

export default {
  components: {
    bidRecord
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
            margin-top: 10px;
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
            width: 750px;
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
