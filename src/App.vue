<template>

  <v-app>



      <div class="d-flex align-center" v-if=$vuetify.theme.dark>

        <v-app-bar app color='primary' dark >

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/' >
            <v-icon style="color: black;">mdi-home-outline</v-icon>
          </router-link>
        </v-btn>

        <v-toolbar-title>Naturistic</v-toolbar-title>

        <v-btn fab color='secondary' small @click="$vuetify.theme.dark = false">
          <v-icon style="color: black;">mdi-brightness-5</v-icon>
        </v-btn>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/about' >
            <v-icon style="color: black;">mdi-help</v-icon>
          </router-link>
        </v-btn>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/gallery' >
            <v-icon style="color: black;">mdi-image-multiple</v-icon>
          </router-link>
        </v-btn>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/cart' >
            <v-icon style="color: black;">mdi-cart-outline</v-icon>
          </router-link>
        </v-btn>

      </div>

      <div class="d-flex align-center" v-else>

        <v-app-bar app color='primary' light >

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/' >
            <v-icon style="color: white;">mdi-home-outline</v-icon>
          </router-link>
        </v-btn>

        <v-toolbar-title>Naturistic</v-toolbar-title>

        <v-btn fab color='secondary' small @click="$vuetify.theme.dark = true">
          <v-icon style="color: white;">mdi-brightness-3</v-icon>
        </v-btn>

        <v-btn fab color='secondary' small>
        <router-link  style="text-decoration: none;" to= '/about' >
          <v-icon style="color: white;">mdi-help</v-icon>
        </router-link>
        </v-btn>

        <v-btn fab color='secondary' small>
          <router-link  style="text-decoration: none;" to= '/gallery' >
            <v-icon style="color: white;">mdi-image-multiple</v-icon>
          </router-link>
        </v-btn>

        <v-btn fab color='secondary' small>
        <router-link  style="text-decoration: none;" to= '/cart' >
          <v-icon style="color: white;">mdi-cart-outline</v-icon>
        </router-link>
        </v-btn>

      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  import globalStore from './store/';

  console.log(globalStore.productList);

  export default {
    name: 'App',

  };





</script>
