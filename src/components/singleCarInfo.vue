<template>
    <div class="carInfo d-flex">
        <div class="spaceLeft"></div>
        <div class="infoCar d-flex flex-column">
            <div class="infoT d-flex flex-column mt-6">
                <div class="titleY">2021</div>
                <div class="titleB">M-Benz GLC Coupe 300</div>
                <div class="titleLine"></div>
            </div>
            <div class="infoC pt-3">相較於先前車款，新G-Class的車身尺碼全面放大，帶來更具份量感的視覺效果，對於乘坐空間也有實質助益，但不變的是，G-Class風靡車壇近40年的經典比例，完整延續。</div>
            <div class="infoM d-flex justify-space-between">
                <div class="infoBoxL d-flex flex-column justify-space-around">
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">車身座位</div>
                        <div class="inBox">5門5人座</div>
                    </div>
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">變速系統</div>
                        <div class="inBox">9速手自排</div>
                    </div>
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">排氣量</div>
                        <div class="inBox">3982cc</div>
                    </div>
                </div>
                <div class="infoBoxR d-flex flex-column justify-space-around">
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">性能數據</div>
                        <div class="inBox">422hp@5250~5500rpm 62.2kgm@2000~4750rpm</div>
                    </div>
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">能量消耗</div>
                        <div class="inBox">平均 7.3km/ltr 市區 5.4km/ltr 高速 9.12km/ltr</div>
                    </div>
                    <div class="cnBox d-flex flex-column">
                        <div class="inCBox">引擎形式</div>
                        <div class="inBox">渦輪增壓, V型8缸, DOHC雙凸輪軸, 32氣門</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .carInfo{
        border: 1px solid blue;
        width: 1200px;
        height: 630px;
        margin: 48px auto 0 auto;
        .spaceLeft{
            border: 1px solid red;
            width: 200px;
            height: 100%;
        }
        .infoCar{
            border: 1px solid green;
            width: 1000px;
            height: 100%;
        }
        .infoT{
            width: 500px;
            height: 130px;
            border: 1px solid pink;
            .titleY{
                font-size: 35px;
                font-weight: bolder;
            }
            .titleB{
                font-size: 35px;
                font-weight: bolder;
            }
            .titleLine{
                width: 200px;
                height: 3px;
                background-color: #BFBDBD;
            }
        }
        .infoC{
            width: 600px;
            height: 120px;
            border: 1px solid lightskyblue;
        }
        .infoM{
            width: 500px;
            height: 370px;
            border: 1px solid palegreen;
            .infoBoxL{
                border: 1px solid tomato;
                .inCBox{
                    color: #F34841;
                    font-weight: bold;
                }
            }
            .infoBoxR{
                border: 1px solid khaki;
                .inCBox{
                    color: #F34841;
                    font-weight: bold;
                }
            }
        }
    }
</style>
