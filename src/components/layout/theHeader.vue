<template>
    <div>
      <v-toolbar dense flat style="background-color: #181818;">
        <v-app-bar-nav-icon
          @click.stop="sideNav = !sideNav"
          color="#FFFFFF"
          class="ml-2"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"
            ><img src="../../assets/logowhite-transparent.png"></router-link
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon left class="mr-6" color="#FFFFFF">mdi-cart-outline</v-icon>
        <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon>
      </v-toolbar>
      <v-navigation-drawer v-model="sideNav" absolute temporary>
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
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    menuItem: [
      {
        icon: 'mdi-gavel',
        title: '競標會場',
        link: '/meetups'
      },
      {
        icon: 'mdi-car-sports',
        title: '直購車輛',
        link: '/meetup/new'
      },
      {
        icon: 'mdi-clipboard-list-outline',
        title: '市場行情',
        link: '/profile'
      },
      {
        icon: 'mdi-draw',
        title: '討論專區',
        link: '/signup'
      },
      {
        icon: 'mdi-account-question-outline',
        title: '新手上路',
        link: '/signin'
      }
    ]
  })
}
</script>

<style scoped>
    img{
        width: 120px;
        height: 120px;
    }
</style>
