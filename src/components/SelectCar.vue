<template>
    <div class="wholepage">
        <div class="leftpart">
            <the-headline titleName="近期競標場次"></the-headline>
            <div v-for="item in carList" :key="item.id" class="leftitem">
                <div :class="item.classname">{{ item.carname }}</div>
            </div>
        </div>
        <div class="rightpart">
            <div></div>
            <div></div>
            <the-headline></the-headline>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      carList: [
        { classname: 'one', carname: '01  BMW M2 Competition', id: '2' },
        { classname: 'two', carname: '02  M-Benz GLC 200 4MATIC', id: '3' },
        { classname: 'three', carname: '03  BMW X4 competition', id: '4' },
        { classname: 'four', carname: '04  Bentley Continental GT', id: '5' },
        { classname: 'five', carname: '05  LAND ROVER Discovery Sport', id: '6' }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.wholepage {
    height: 100vh;
    background-color: #181818;
    display: flex;
    .leftpart {
    border: 1px solid yellow;
    width: 50%;
    display: flex;
    flex-direction: column;
        .leftitem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid blue;
        height: 16%;
        color: #FFFFFF;
        font-size: 40px;
        }
        .titlebox{
        display: flex;
        border: 1px solid blue;
        flex-direction: column;
        justify-content: center;
        height: 18%;
        color: #FFFFFF;
            .auctiontitle{
                font-size: 40px;
                font-weight: bold;
                border: 1px solid yellow;
                display: flex;
                .rect{
                background-color: #F34841;
                width: 13px;
                height: 35px;
                transform: skew(150deg);
                margin-top: 12px;
                margin-left: 20px;
                }
                .anrect{
                background-color: #F34841;
                width: 13px;
                height: 35px;
                transform: skew(150deg);
                margin-top: 12px;
                margin-left: 5px;
                }
            }
        }
    }
    .rightpart {
    border: 1px solid green;
    width: 50%;
    }
}

</style>
