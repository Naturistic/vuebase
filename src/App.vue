<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Naturistic Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/favacon.png')"
          transition="scale-transition"
          width="40"
        />
          <v-btn fab color="#0097A7" small v-on:click="redirect_to_login">img(src="./assets/favacon.png")</v-btn>

      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
