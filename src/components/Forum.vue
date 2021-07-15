<template>
  <div style="width:100%;height:100%">
    <div class="forumtop">
      <div
        class="forumblack d-flex justify-center align-center pt-10 pb-10"
        style="width:100%;height:100%"
        max-width="600"
        max-height="600"
      >
        <div style="width:50%" class="mr-10 white newscard">
          <img src="../assets/forum/TDI SUV.png" style="width:100%;" />
          <h2 class="text-h5 black--text pl-2">
            <router-link to="/ForumPage" style="text-decoration:none; color:black">
              VW Arteon Shooting Brake v.s Peugeot 508 SW ｜ 200 萬級美型 Wagon
              對決！
            </router-link>
          </h2>
        </div>
        <div style="width:20%;height:50%" class="d-flex flex-column ml-10">
          <div
            v-for="item in news"
            :key="item.id"
            class="newscard white mb-8 mt-3"
          >
            <img :src="item.image" style="width:100%" />
            <h2 class="black--text pl-2 text-sm-body-2 mb-3">
              {{ item.content }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-15">
      <div class="d-flex flex-column justify-center align-center">
        <h1 class="align-self-start ml-16 mb-2 mt-10">今日最新消息</h1>
        <div class="newtitle" style="width:90%;height:5px;"></div>
      </div>
      <div class="d-flex justify-space-around mt-10">
        <div>
          <img :src="goimg" style="width:350px;height:250px" />
        </div>
        <div class="d-flex flex-column justify-space-around">
          <div v-for="(title, index) in titles" :key="title.id">
            <h2 @click="gogo(index)" :class="{ yellow: index == count }">
              {{ title.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-space-between flex-wrap mb-10 pl-10 pr-10"
      style="width:100%"
    >
      <div v-for="carnew in carnews" :key="carnew" class="mb-10">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="carnew.src">
            <v-card-title>經典新款</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0 text-h6">
            {{ carnew.title }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
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
          image: require('../assets/forum/toyota-supra.jpg'),
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
