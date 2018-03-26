import Vue from 'vue';
import App from './app/app.vue';

import router from './app/router';
import store from './app/store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
