<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">

          <v-btn fab color="#0097A7" small>
            <router-link :to="{ name: 'Home' }">
              <v-icon style="color: white;">mdi-home</v-icon>
            </router-link>
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
    cart:[
        {
            "title":"California Waves",
            "image":"../images/wave.jpg",
            "price": 1.00
        },
        {
            "title":"Desert Mountain",
            "image":"../images/wave.jpg",
            "price": 1.00
        }
    ],
    products: [
        {
            _id: "fgfhghs",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/wave.jpg",
            description:"Desert Mountain"
        },
        {
            _id: "ghgfhsg",
            title:"California Waves",
            url:"",
            image:"../images/lake.jpg",
            descriptioin:"Ocean Waves in California USA"
        },
        {
            _id: "fdfadsfds",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/waterfall.jpg",
            description:"Desert Mountain"
        },
        {
            _id: "dfdsfadsaf",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/desert_mountain.jpg",
            description:"Desert Mountain"
        },
        {
            _id: "sfadsfa",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/sun_mountain.jpg",
            description:"Desert Mountain"
        },
        {
            _id: "fdsafdsaf",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/snow_mountain1.jpg",
            description:"Desert Mountain"
        },
        {
            _id: "sdafsdfasd",
            title:"Single Desert Mountain",
            url:"",
            image:"../images/splashing.jpg",
            description:"Desert Mountain"
        },
    ],
    categories:[
        "Highlights",
        "Water",
        "Mountains",
        "Space",
        "Trees",
        "Plains",
        "Desert",
        "Sunsets",
        "Flowers"
    ]

    }),
  };
</script>
