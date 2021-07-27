<template>
    <div>
        <media :query="{ minWidth: '401px' }">
            <div class="indexBan d-flex flex-column">
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
                <div class="banContent">
                    <div class="banleft ml-16 d-flex flex-column justify-space-around">
                        <div>
                            <div class="text-h2 font-weight-bold indexTitle">TheVroom</div>
                            <div class="indexline mt-6"></div>
                        </div>
                        <div class="banBtn">
                            <v-btn rounded outlined color="#F34841" class="inbtn" to="/auctionoverview">
                            競標場入口
                            </v-btn>
                        </div>
                    </div>
                    <div class="banright">
                        <div></div>
                    </div>
                </div>
            </div>
        </media>
        <!-- --------------mobile--------------- -->
        <media :query="{ maxWidth: '400px' }">
            <div>
                <rwd-index-banner/>
            </div>
        </media>
    </div>
</template>

<script>
import Media from 'vue-media'
import RwdIndexBanner from '../components/RwdIndexBanner.vue'

export default {
  components: {
    Media,
    RwdIndexBanner
  }
}
</script>

<style lang="scss">
.indexBan{
    border: 1px solid orange;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #181818;
    // transform: translateY(-64px);
    .navbar{
        border: 1px solid yellow;
        position: absolute;
        width: 100%;
        height: 64px;
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
    .banContent{
        width: 100%;
        height: 700px;
        border: 1px solid blue;
        margin: 70px auto 0 auto;
        .banleft{
            width: 500px;
            height: 700px;
            border: 1px solid green;
            .indexTitle{
                color: #FFFFFF;
            }
            .indexline{
                width: 400px;
                height: 5px;
                background-color: #F34841;
            }
        }
    }
}
</style>
