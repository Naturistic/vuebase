import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#006064',
        secondary: '#0097a7',
        anchor: '#8c9eff',
      },
      dark: {
        primary: '#0097a7',
        secondary: '#006064',
        anchor: '#8c9eff',
      },
    },
  },
});
