<template>
  <v-app>
    <v-app-bar app color='primary' dark >
      <div class="d-flex align-center">
          <v-btn fab color='secondary' small>
            <router-link  style="text-decoration: none; color: inherit;" to= '/' >
              <v-icon style="color: white;">mdi-home</v-icon>
            </router-link>
          </v-btn>
          <v-btn v-if= $vuetify.theme.dark
           @click="$vuetify.theme.dark  = false">Light
           v-else
           @click="$vuetify.theme.dark = true">Dark
          </v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  import globalStore from './store/'

  console.log(globalStore.productList);

  export default {
    name: 'App',
  }






</script>
