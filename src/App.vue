<template>

  <v-app>

    <v-app-bar app color='primary' dark >

      <div class="d-flex align-center">

          <div v-if=$vuetify.theme.dark>

            <v-btn fab color='secondary' small>
              <router-link  style="text-decoration: none;" to= '/' >
                <v-icon style="color: black;">mdi-home</v-icon>
              </router-link>
            </v-btn>

            <v-btn fab color='secondary' small @click="$vuetify.theme.dark = false">
              <v-icon style="color: black;">mdi-brightness-5</v-icon>
            </v-btn>

            <v-btn fab color='secondary' small @click="$vuetify.theme.dark = false">
              <v-icon style="color: black;">mdi-cartOutline</v-icon>
            </v-btn>

          </div>

          <div v-else>

            <v-btn fab color='secondary' small>
              <router-link  style="text-decoration: none;" to= '/' >
                <v-icon style="color: white;">mdi-home</v-icon>
              </router-link>
            </v-btn>

            <v-btn fab color='secondary' small @click="$vuetify.theme.dark = true">
              <v-icon style="color: white;">mdi-brightness-3</v-icon>
            </v-btn>

            <v-btn fab color='secondary' small @click="$vuetify.theme.dark = false">
              <v-icon style="color: white;">mdi-cartOutline</v-icon>
            </v-btn>

          </div>

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
