import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth/auth.store';
import tasks from './tasks/tasks.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, tasks }
})
