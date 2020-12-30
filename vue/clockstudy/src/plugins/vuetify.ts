import Vue from 'vue';

// import Vuetify from 'vuetify/lib/framework';
// To solve the following error (ref. https://github.com/vuetifyjs/vuetify/issues/5944#issuecomment-520027576 )
// Try `npm install @types/vuetify` if it exists or add a new declaration (.d.ts) file containing `declare module 'vuetify/lib/framework';`
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
});
