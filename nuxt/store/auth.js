export const state = () => ({
  authenticated: false
})

export const getters = {
  isAuth (state) {
    return state.authenticated;
  }
}

export const mutations = {
  changeAuth (state, value) {
    state.authenticated = value;
  }
}

export const actions = {
  check (store) {
    return this.$axios.$get('/api/auth').then(() => {
      store.commit('changeAuth', true);
    }).catch(() => {
      store.commit('changeAuth', false);
    })
  },
  login (store, params) {
    return this.$axios.$get('/api/auth/login', { params }).then(() => {
      store.commit('changeAuth', true);
    }).catch(() => {
      store.commit('changeAuth', false);
    })
  }
}