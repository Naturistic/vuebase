<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">

          <v-btn fab color="#0097A7" small>
            <a href="#" class="link" target="_blank">
              <v-icon style="color: white;">mdi-home</v-icon>
            </a>
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

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
