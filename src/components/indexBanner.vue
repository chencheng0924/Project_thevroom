<template>
    <div class="indexBan">
        <div class="navbar d-flex justify-space-between align-center mt-2">
            <div class="logoBan">
                <router-link to="/" tag="span" style="cursor: pointer">
                    <img class="logoImg ml-7" src="../assets/small_logowhite-transparent.png">
                </router-link>
            </div>
            <ul class="listLine d-flex text-h6 font-weight-bold ml-16">
                <li>
                    <router-link to="/auctionoverview" tag="span" style="cursor: pointer">
                    競標會場
                    </router-link>
                </li>
                <li class="ml-10">
                    <router-link to="/accessories" tag="span" style="cursor: pointer">
                    配件專區
                    </router-link>
                </li>
                <li class="ml-10">
                    <router-link to="/comparecard" tag="span" style="cursor: pointer">
                    市場行情
                    </router-link>
                </li>
                <li class="ml-10">
                    <router-link to="/forum" tag="span" style="cursor: pointer">
                    討論專區
                    </router-link>
                </li>
                <li class="ml-10">
                    <router-link to="/newdriver" tag="span" style="cursor: pointer">
                    新手上路
                    </router-link>
                </li>
            </ul>
            <div class="iconBan">
                <v-icon left class="mr-5" color="#FFFFFF">mdi-cart-outline</v-icon>
                <router-link to="/signin" tag="span" style="cursor: pointer">
                    <v-icon left class="mr-7" color="#FFFFFF">mdi-login</v-icon>
                </router-link>
            </div>
        </div>
        <img class="bannerImg" src="../assets/test2.png">
    </div>
</template>

<style lang="scss">
.indexBan{
    // border: 1px solid orange;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    // transform: translateY(-64px);
    .navbar{
        .logoBan{
            .logoImg{
                width: 200px;
            }
        }
        .listLine{
            list-style: none;
            color: #FFFFFF;
        }
    }
    .bannerImg{
        width: 100%;
    }
    .navbar{
        // border: 1px solid yellow;
        position: absolute;
        width: 100%;
        height: 64px;
    }
}
</style>
