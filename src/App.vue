<template>
  <v-app>
    <v-navigation-drawer
      app
      color="white-black"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
      <v-list nav shaped dense> 
        <v-list-item two-line>
          <v-list-item-avatar>
            <img v-bind:src=" `https://randomuser.me/api/portraits/men/3.jpg` ">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{title}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{$store.state.userData.name}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Главная
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/news">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            Новости
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <!-- комментарий -->

    <v-content class="px-12 py-3" app>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    nav: true,
    title: 'Online_Social'
  }),
};
</script>
