import axios from "axios";

export default {
  namespaced: true,
  state: {
    authenticated: false
  },
  getters: {
    isAuth (state) {
      return state.authenticated;
    }
  },
  mutations: {
    changeAuth (state, value) {
      state.authenticated = value;
    }
  },
  actions: {
    check (store) {
      return axios.get('/api/auth').then(() => {
        store.commit('changeAuth', true);
      }).catch(() => {
        store.commit('changeAuth', false);
      })
    },
    login (store, params) {
      return axios.get('/api/auth/login', { params }).then(() => {
        store.commit('changeAuth', true);
      }).catch(() => {
        store.commit('changeAuth', false);
      })
    },
    logout () {

    }
  }

}
