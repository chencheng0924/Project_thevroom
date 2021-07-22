<template>
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
          class="d-flex justify-center ma-auto"
          style="max-width:1200px;height:540px"
        >
          <v-card class="mx-auto mr-15" max-width="650">
            <v-img
              class="white--text align-end"
              height="420px"
              src="../assets/forum/TDI SUV.png"
            >
              <v-card-title>Top 10 Australian car</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div class="d-flex justify-center">
                <h2 class="text-h6 font-weight-bold">
                  VW Arteon Shooting Brake v.s Peugeot 508 SW ｜ 200 萬級美型
                  Wagon 對決！
                </h2>
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn color="orange" text>
                <router-link
                  to="/ForumPage"
                  style="text-decoration:none;width:100%;color:orange"
                >
                  閱覽文章
                </router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
          <div class="d-flex flex-column">
          <v-card
            class="mx-auto mb-10"
            max-width="350"
            v-for="item in news"
            :key="item.id"
          >
            <v-img
              class="white--text align-end"
              height="140px"
              :src="item.image"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div class="-text-subtitle-1 font-weight-bold">{{ item.content }}</div>
            </v-card-text>
            <v-card-actions class="d-flex justify-end">
              <v-btn color="orange" text>
                閱覽文章
              </v-btn>
            </v-card-actions>
          </v-card>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-15">
      <div class="d-flex flex-column justify-center align-center">
        <h1 class="align-self-start ma-auto mb-2 mt-10" style="width:85%;">
          今日最新消息
        </h1>
        <div class="newtitle" style="width:85%;height:5px;"></div>
      </div>
      <div class="d-flex justify-space-around mt-10 ma-auto" style="width:70%">
        <div>
          <img :src="goimg" style="width:450px;height:300px" />
        </div>
        <div class="d-flex flex-column justify-space-around">
          <div v-for="(title, index) in titles" :key="title.id">
            <h2 @click="gogo(index)" :class="{ yellow: index == count }" class="text-h6 font-weight-bold">
              {{ title.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-space-between flex-wrap mb-10 ma-auto"
      style="width:1200px;"
    >
      <div v-for="carnew in carnews" :key="carnew" class="mb-10">
        <v-card class="mx-10" max-width="300">
          <v-img class="white--text align-end" style="height:250px" :src="carnew.src">
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
            <v-btn color="orange" text>
              閱覽文章
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
          id: 1,
          src: require('../assets/forum/toyota-supra.jpg'),
          title: '來自瑞士的經典名車',
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
      console.log(this.$refs.gogoro)
      this.count = index
      this.goimg = this.titles[index].src
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
    .v-card__subtitle, .v-card__text, .v-card__title{
      padding-bottom:0;
    }
    .v-card__actions > .v-btn.v-btn{
      // margin-bottom: 20px;
    }
    .newscard {
      border-bottom: 5px solid orange;
    }
  }
}
.newtitle {
  border-bottom: 5px solid orange;
}
.yellow {
  background-color: yellow;
}
</style>
