<template>
  <div>
    <media :query="{minWidth: '401px'}">
        <div class="headerrrr">
          <v-toolbar flat style="background-color: #181818;" height="64">
            <v-app-bar-nav-icon
              @click.stop="sideNav = !sideNav"
              color="#FFFFFF"
              class="ml-2"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer"
                ><img src="../../assets/small_logowhite-transparent.png" class="mt-1"></router-link
              >
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon left class="mr-6" color="#FFFFFF">mdi-cart-outline</v-icon>
            <router-link to="/signin" tag="span" style="cursor: pointer">
              <v-icon left class="mr-6" color="#FFFFFF">mdi-login</v-icon>
            </router-link>
            <router-link to="/memberside" tag="span" style="cursor: pointer">
            <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon>
            </router-link>
            <div v-if="changesign" class="d-flex">
              <router-link to="/memberside" tag="span" style="cursor: pointer" class="mr-5">
                <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon>
              </router-link>
              <div class="white--text mr-3 text-body-1 font-weight-bold" style="margin-top: 2px;">歡迎xxx</div>
              <v-icon left class="mr-4" color="#FFFFFF" @click="logout">mdi-logout</v-icon>
            </div>
            <div v-else>
              <router-link to="/signin" tag="span" style="cursor: pointer">
                <v-icon left class="mr-6" color="#FFFFFF">mdi-login</v-icon>
              </router-link>
            </div>
          </v-toolbar>
          <v-navigation-drawer v-model="sideNav" absolute temporary height="100vh" style="z-index: 20;">
            <v-list rounded>
              <v-list-item-group color="deep-orange accent-3">
                <v-list-item
                  v-for="item in menuItem"
                  :key="item.title"
                  :to="item.link"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
    </media>
    <!-- -----------------mobile------------------ -->
    <media :query="{maxWidth: '400px'}">
      <div class="headerrrr">
          <v-toolbar flat style="background-color: #FFFFFF;" height="64">
            <v-app-bar-nav-icon
              @click.stop="sideNav = !sideNav"
              color="#181818"
              class="ml-1"
            ></v-app-bar-nav-icon>
            <router-link to="/" tag="span" style="cursor: pointer"
              ><img src="../../assets/small_logo-transparent.png" class="mt-1 mobileLo"></router-link
            >
            <v-spacer></v-spacer>
            <v-icon left class="mr-3" color="#181818">mdi-cart-outline</v-icon>
            <router-link to="/signin" tag="span" style="cursor: pointer">
              <v-icon left class="mr-3" color="#181818">mdi-login</v-icon>
            </router-link>
            <router-link to="/memberside" tag="span" style="cursor: pointer">
            <v-icon left class="mr-1" color="#181818">mdi-account-circle-outline</v-icon>
            </router-link>
            <!-- <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon> -->
            <!-- <v-icon left class="mr-4" color="#FFFFFF">mdi-logout</v-icon> -->
          </v-toolbar>
          <v-navigation-drawer v-model="sideNav" absolute temporary height="100vh" style="z-index: 20;">
            <v-list rounded>
              <v-list-item-group color="deep-orange accent-3">
                <v-list-item
                  v-for="item in menuItem"
                  :key="item.title"
                  :to="item.link"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'

export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    menuItem: [
      {
        icon: 'mdi-gavel',
        title: '競標會場',
        link: '/auctionoverview'
      },
      {
        icon: 'mdi-car-sports',
        title: '配件專區',
        link: '/accessories'
      },
      {
        icon: 'mdi-clipboard-list-outline',
        title: '市場行情',
        link: '/comparecard'
      },
      {
        icon: 'mdi-draw',
        title: '討論專區',
        link: '/forum'
      },
      {
        icon: 'mdi-account-question-outline',
        title: '新手上路',
        link: '/newdriver'
      }
    ]
  }),
  components: {
    Media
  },
  computed: {
    changesign () {
      return this.$store.getters.getmember
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('membersign', 0)
    }
  }
}
</script>

<style scoped>
    .headerrrr{
      position: absolute;
      top: 0;
      min-width: 100%;
      z-index: 20;
    }
    img{
        width: 175.9px;
        height: 45px;
    }
    .v-overlay__scrim {
        min-height: 100vh !important;
    }
    .mobileLo{
      width: 100px;
      height: 26px;
    }
</style>
