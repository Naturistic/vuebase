<template>
  <div class="about">
     <v-card
     max-width= "1000"
     id="developers"
     elvation="14"
     class="mx-auto"

     >
     <v-card-title p="3" class="text-h5"><strong>The Developers</strong></v-card-title>
     <v-spacer></v-spacer>
     <v-container>
     <v-row dense>
         <v-col cols="12">
     <v-card
     p="7"
     color="cyan darken-4"
     class="white--text"
     >
         <v-card-title class="text-h6">Daniel Urias</v-card-title>
         <div class="profile-section">
             <v-card-subtitle class="about-developer" color="#006064">
                 Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 <br>
                 <br>
                 <v-btn fab color="#0097A7" class="mr-icon" small><a href="https://www.linkedin.com/in/daniel-urias-aa89451b2" class="link" target="_blank"><v-icon style="color: white;">mdi-linkedin</v-icon></a></v-btn>
                 <v-btn fab color="#0097A7" small><a href="#" class="link" target="_blank"><v-icon style="color: white;">mdi-github</v-icon></a></v-btn>
             </v-card-subtitle>
             <v-card-subtitle><v-img contain src="../assets/Doug.png" width="300"></v-img></v-card-subtitle>

         </div>
         </v-card>
     </v-col>
     <v-spacer></v-spacer>
     <v-col cols="12">
     <v-card
     p="7"
     color="#006064"
     class="white--text">

         <v-card-title class="text-h6">Kalicia Adams</v-card-title>
         <div class="profile-section">
             <v-card-subtitle> <v-img contain src="../assets/Doug.png" width="300"></v-img></v-card-subtitle>
             <v-card-subtitle class="about-developer">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 <v-spacer></v-spacer>
                 <br>
                 <v-btn fab color="#0097A7" class="mr-icon" small><a href="https://www.linkedin.com/in/kalicia-adams-2b489a207" class="link" target="_blank"><v-icon style="color: white;">mdi-linkedin</v-icon></a></v-btn>
                 <v-btn fab color="#0097A7" small><a href="https://github.com/kally1009" class="link" target="_blank"><v-icon style="color: white;">mdi-github</v-icon></a></v-btn>
             </v-card-subtitle>

         </div>
       </v-card>
     </v-col>

     <v-col col="12">
     <v-card
     p="7"
     color="#006064"
     class="white--text"
     >
         <v-card-title class="text-h6">Doug Osborn</v-card-title>
         <div class="profile-section">
         <v-card-subtitle class="about-developer">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br>
              <br>
              <v-btn fab color="#0097A7" class="mr-icon" small><a href="https://www.linkedin.com/in/opensimian" class="link" target="_blank"><v-icon style="color: white;">mdi-linkedin</v-icon></a></v-btn>
              <v-btn fab color="#0097A7" small><a href="#" class="link" target="_blank"><v-icon style="color: white;">mdi-github</v-icon></a></v-btn>
             </v-card-subtitle>
              <v-card-subtitle><v-img contain src="../assets/Doug.png" width="300"></v-img></v-card-subtitle>
         </div>
     </v-card>
 </v-col>
</v-row>
</v-container>
</v-card>

  </div>
</template>

<style>
/* About */

#developers {
    grid-column-start: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    text-align: left;

}

.profile-section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 5px;
}

.about-developer {
    padding: 20px;
    margin: 0px;

}


.name {
    padding-left: 20px;
}
.white {
    color: white;
}
.primary-color {
    background-color: #006064;
}

.link {
    text-decoration: none;
    color: black;
}
a {
    text-decoration: none;
    color: black;
}
.mr-icon {
    margin-right: 10px;
}
</style>
