<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div>
        <div class="forumtop ma-auto">
          <div
            class="forumblack d-flex flex-column justify-center align-center pt-10 pb-15"
            style="width:100%;height:100%"
          >
            <div class="d-flex justify-end mb-10" style="width:80%">
              <router-link style="text-decoration:none;" to="/issuePage"
                ><button-news buttonName="我要發文"></button-news
              ></router-link>
            </div>
            <div
              class="d-flex align-center justify-sm-space-around"
              style="width:1200px;height:100%"
            >
              <v-card class="mr-15" max-width="650" height="600">
                <v-img
                  class="white--text align-end"
                  height="450px"
                  src="../assets/forum/TDI SUV.png"
                >
                  <v-card-title>Top 10 Australian car</v-card-title>
                </v-img>
                <v-card-text class="text--primary">
                  <div class="d-flex justify-center">
                    <h2 class="text-h6 font-weight-bold">
                      VW Arteon Shooting Brake v.s Peugeot 508 SW ｜ 200
                      萬級美型 Wagon 對決！
                    </h2>
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                  <v-btn color="orange" text>
                    <router-link
                      to="/ForumPage"
                      style="text-decoration:none;width:100%;color:#F34841"
                    >
                      閱覽文章
                    </router-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <div class="d-flex flex-column mt-8">
                <v-card
                  class="mx-auto mb-8"
                  max-width="350"
                  height="285"
                  v-for="item in news"
                  :key="item.id"
                >
                  <v-img
                    class="white--text align-end"
                    height="150px"
                    :src="item.image"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div class="-text-subtitle-1 font-weight-bold">
                      {{ item.content }}
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn color="#F34841" text>
                      閱覽文章
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-15" style="max-width:100%;">
          <div class="d-flex flex-column align-center" style="max-width:100%">
            <h1 class="align-self-center ma-auto mb-2 mt-10" style="width:70%;">
              今日最新消息
            </h1>
            <div class="newtitle" style="width:80%;height:5px;"></div>
          </div>
          <div
            class="d-flex justify-space-around mt-10 ma-auto"
            style="width:70%"
          >
            <div class="d-none d-sm-flex">
              <img :src="goimg" style="width:500px;height:330px" />
            </div>
            <div
              class="d-flex flex-column justify-space-around"
              style="width:500px"
            >
              <div v-for="(title, index) in titles" :key="title.id">
                <h2
                  @click="gogo(index)"
                  :class="{ yellow: index == count }"
                  class="text-h6 font-weight-bold"
                >
                  {{ title.title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-start flex-wrap mb-10 ma-auto"
          style="width:1200px;"
        >
          <div v-for="carnew in carnews" :key="carnew" class="mb-10">
            <v-card class="mx-10" max-width="300">
              <v-img
                class="white--text align-end"
                style="height:220px"
                :src="carnew.src"
              >
                <v-card-title>經典新款</v-card-title>
              </v-img>

              <v-card-subtitle class="-h6 font-weight-bold">
                {{ carnew.title }}
              </v-card-subtitle>

              <v-card-text class="text-subtitle-1 font-weight-light">
                <div>
                  {{ carnew.content }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="#F34841" text>
                  閱覽文章
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div
            class="moredata text-center d-flex justify-center"
            style="width:100%"
            ref="moredata"
          >
            <div
              @click="moredata"
              style="border:1px solid #f34841;width:300px;cursor: pointer;"
              class="rounded-pill py-5"
            >
              更多資料
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <button-btn-banner />
        <div class="forumtop ma-auto">
          <div
            class="forumblack d-flex flex-column justify-center align-center pt-10 pb-15"
            style="width:100%;height:100%"
          >
            <div
              class="d-flex flex-column flex-sm-row align-center justify-sm-space-around"
              style="width:300px;height:100%"
            >
              <v-card max-width="330" height="350">
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src="../assets/forum/TDI SUV.png"
                >
                  <v-card-title>Top 10 Australian car</v-card-title>
                </v-img>
                <v-card-text class="text--primary" style="padding:3px">
                  <div class="d-flex justify-center">
                    <div
                      class="text-body-1 font-weight-bold pa-3"
                      style="line-height:1"
                    >
                      VW Arteon Shooting Brake v.s Peugeot 508 SW ｜ 200
                      萬級美型 Wagon 對決！
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                  <v-btn color="orange" text class="pb-5">
                    <router-link
                      to="/ForumPage"
                      style="text-decoration:none;width:100%;color:#F34841"
                    >
                      閱覽文章
                    </router-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <div class="d-flex flex-column mt-8">
                <v-card
                  class="mx-auto mb-8"
                  max-width="330"
                  height="285"
                  v-for="item in news"
                  :key="item.id"
                >
                  <v-img
                    class="white--text align-end"
                    height="150px"
                    :src="item.image"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div class="-text-subtitle-1 font-weight-bold">
                      {{ item.content }}
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn color="#F34841" text>
                      閱覽文章
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-15" style="max-width:100%;">
          <div class="d-flex flex-column align-center" style="max-width:100%">
            <h1 class="align-self-center ma-auto mb-2 mt-10" style="width:70%;">
              今日最新消息
            </h1>
            <div class="newtitle" style="width:80%;height:5px;"></div>
          </div>
          <div
            class="d-flex justify-space-around mt-10 ma-auto"
            style="width:70%"
          >
            <div class="d-none d-sm-flex">
              <img :src="goimg" style="width:500px;height:330px" />
            </div>
            <div
              class="d-flex flex-column justify-space-around"
              style="width:500px"
            >
              <div
                v-for="(title, index) in titles"
                :key="title.id"
                class="mb-5"
              >
                <h2
                  @click="gogo(index)"
                  :class="{ yellow: index == count }"
                  class="text-h6 font-weight-bold"
                >
                  {{ title.title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column align-center justify-space-between flex-wrap mb-10 ma-auto"
          style="width:100%;"
        >
          <div v-for="carnew in carnews" :key="carnew" class="mb-10">
            <v-card class="mx-2" max-width="300">
              <v-img
                class="white--text align-end"
                style="height:150px"
                :src="carnew.src"
              >
                <v-card-title>經典新款</v-card-title>
              </v-img>

              <v-card-subtitle class="-h6 font-weight-bold">
                {{ carnew.title }}
              </v-card-subtitle>

              <v-card-text class="text-subtitle-1 font-weight-light">
                <div>
                  {{ carnew.content }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="#F34841" text>
                  閱覽文章
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="text-center" style="width:100%">
            <v-pagination
              v-model="page"
              :length="10"
              :total-visible="5"
            ></v-pagination>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>
<script>
import Media from 'vue-media'
import ButtonBtnBanner from '../components/layout/RwdBtnBanner.vue'
export default {
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: {
    Media,
    ButtonBtnBanner
  },
  data () {
    return {
      page: 1,
      num1: 0,
      num2: 6,
      newscount: 0,
      goimg: require('../assets/forum/Benz1.png'),
      count: null,
      active: false,
      carnews: [
        {
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 2,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自日本的經典戰車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 4,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自美國的經典名車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 5,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 6,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自瑞士的經典名車',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        }
      ],
      carnewspush: [
        {
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車1',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 2,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自日本的經典戰車2',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車3',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 4,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自美國的經典名車4',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 5,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車5',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 6,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自瑞士的經典名車6',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車7',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 2,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自日本的經典戰車8',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車9',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 4,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自美國的經典名車10',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 5,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車11',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 6,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自瑞士的經典名車12',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車13',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 2,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自日本的經典戰車14',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車15',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 4,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自美國的經典名車16',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 5,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車17',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 6,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自瑞士的經典名車18',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車19',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 2,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自日本的經典戰車20',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車21',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        },
        {
          id: 3,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自德國的經典名車22',
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血駕馭 身手的潮流玩家！'
        }
      ],
      news: [
        {
          id: 1,
          image: require('../assets/forum/Benz1.png'),
          content:
            'Land Rover Range Rover Evoque P250R-Dynamic SE 新年式試駕｜安全、科技一併升級！'
        },
        {
          id: 2,
          image: require('../assets/forum/MINI JCW.jpg'),
          content:
            'MINI JCW Countryman ALL4 試駕，具有高性能與熱血身手的潮流玩家！'
        }
      ],
      titles: [
        {
          id: 0,
          title: 'Audi Q2 35 TFSI S Line試駕 │ 享有個性的價值...',
          src: require('../assets/forum/toyota-supra.jpg')
        },
        {
          id: 1,
          title: 'Audi Q2 35 TFSI S Line試駕 │ 享有個性的價值...',
          src: require('../assets/forum/TDI SUV.png')
        },
        {
          id: 2,
          title: 'Audi Q2 35 TFSI S Line試駕 │ 享有個性的價值...',
          src: require('../assets/forum/Benz1.png')
        }
      ]
    }
  },
  methods: {
    gogo (index) {
      // console.log(this.$refs.gogoro)
      this.count = index
      this.goimg = this.titles[index].src
    },
    moredata () {
      console.log(this.carnews.length)
      console.log(this.carnewspush.length)
      if (this.carnews.length > 5 + this.carnewspush.length) {
        return
      }
      if (this.carnews.length < this.carnews.length + this.carnewspush.length) {
        this.carnews.push(
          ...this.carnewspush.slice(
            this.num1 + 6 * this.newscount,
            this.num2 + 6 * this.newscount
          )
        )
        // this.carnews.push(...this.carnewspush.slice(6, 12))
        this.newscount += 1
        if (this.carnews.length > 5 + this.carnewspush.length) {
          this.$refs.moredata.textContent = '----------資料已全部顯示----------'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.forumtop {
  background-size: cover;
  background-image: url('../assets/forum/toyota-supra.jpg');
  .forumblack {
    background-color: rgba($color: black, $alpha: 0.7);
    .v-card__subtitle,
    .v-card__text,
    .v-card__title {
      padding: 30px 0 0 15px;
    }
    .newscard {
      border-bottom: 5px solid orange;
    }
  }
}
.newtitle {
  border-bottom: 5px solid #f34841;
}
.moredata {
  :hover {
    background-color: #f34841;
    color: #fff;
  }
}
</style>
