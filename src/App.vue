<template>
  <v-app>
    <v-app-bar app color='primary' dark >
      <div class="d-flex align-center">
          <v-btn fab color='secondary' small>
            <router-link  style="text-decoration: none; color: inherit;" to= '/' >
              <v-icon style="color: white;">mdi-home</v-icon>
            </router-link>
          </v-btn>

          <div v-if="$vuetify.theme.dark = true">
            <v-btn @click="swap">
              <v-icon class="mr-1 title">
                mdi-brightness-5
              </v-icon>
              Light
            </v-btn>
          </div>

          <div v-if="$vuetify.theme.dark = false">
          <v-btn @click="swap">
            <v-icon class="mr-1 title">
              mdi-brightness-3
            </v-icon>
            Dark
          </v-btn>
          </div>


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

  swap () {
    this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark

    // necessary to reset colors after changing the theme, perhaps a Vuetify.js bug
    this.touchAll(1)
  }

  touchAll () {
    const value = this.$vuetify.theme.themes[this.theme]
    this.$vuetify.theme.themes[this.theme] = {}
    this.$vuetify.theme.themes[this.theme] = value
  },







</script>
