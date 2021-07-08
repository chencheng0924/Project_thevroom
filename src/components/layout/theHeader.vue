<template>
    <v-app dark>
    <div>
      <v-toolbar dense>
        <v-app-bar-nav-icon
          @click.stop="sideNav = !sideNav"
          class='hidden-sm-and-up'
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"
            ><img src="../../../img/logo-transparent.png"></router-link
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            flat
            v-for="item in menuItem"
            :key="item.title"
            :to="item.link"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-icon left class="ml-3">mdi-cart</v-icon>
        <v-icon left class="ml-3">mdi-account-heart</v-icon>
      </v-toolbar>
      <v-navigation-drawer v-model="sideNav" absolute temporary>
        <v-list rounded>
          <v-list-item-group color="primary">
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
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    menuItem: [
      {
        icon: 'mdi-account-tie',
        title: '競標會場',
        link: '/meetups'
      },
      {
        icon: 'mdi-card-text-outline',
        title: '直購車輛',
        link: '/meetup/new'
      },
      { icon: 'mdi-dog', title: '市場行情', link: '/profile' },
      { icon: 'mdi-draw', title: '討論專區', link: '/signup' },
      { icon: 'mdi-login', title: '新手上路', link: '/signin' }
    ]
  })
}
</script>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
</style>
