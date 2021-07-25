<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/naturstic.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
      <h2 class="headline font-weight-bold mb-3">
        Welcome to Naturistic, your online source of high quality nature photographs
      </h2>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          About the application
        </h2>


        <h3>
        <v-row justify="center">
          Naturistic is a Single Page Application (SPA) storefront for Digital Content Delivery.
          <br>
          It uses web technologies including HTML, CSS, JavaScript, JSON, Vue, Vuetify, Node, and Express.
          <br>
          It implements REST APIs to STRIPE for payment processing and  AWS s3 buckets for content delivery.
          <br>
          We use  <strong>GIT - GITHUB - HEROKU</strong>  for Source Code Control and automated deployment stack.
        </v-row>
        </h3>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          About the team
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in teamMembers"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      teamMembers: [
        {
          text: 'Kalicia Adams',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Daniel',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Doug Osborn',
          href: 'https://madewithvuejs.com/vuetify',
        },

      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
