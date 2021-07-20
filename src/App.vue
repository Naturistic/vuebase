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
        "id": "prod_JqxLNmRk2SRVJu",
        "object": "product",
        "active": true,
        "created": 1626297374,
        "description": "Wall mounted  2 meter banner with \"Black Hole\" design  on both sides.  ",
        "images": [
          "https://files.stripe.com/links/MDB8YWNjdF8xSkNUQWFIeGdLM3RMS3JLfGZsX3Rlc3RfOWhhQnZmZVFVeDVsMDVqUmhYZ2t3Wk1i00deZSGfaa"
        ],
        "livemode": false,
        "metadata": {
          "bigImageURL": "https://myAWSs3Bucket/theBlackHoleWall",
          "kind": "mountain,sunset"
        },
        "name": "Tie Dye Banner [wall]  Black Hole",
        "package_dimensions": null,
        "shippable": null,
        "statement_descriptor": null,
        "tax_code": null,
        "unit_label": null,
        "updated": 1626455324,
        "url": null
        },

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
