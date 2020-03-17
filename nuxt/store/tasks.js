export const state = () => ({
  data: []
})

export const getters = {
  tasks (state) {
    return state.data;
  }
}

export const mutations = {
  load (state, tasks) {
    state.data = tasks;
  },
  add (state, task) {
    state.data.push(task);
  },
  delete (state, task) {
    state.data = state.data.filter((el) => el.id !== task.id);
  },
  update (state, newTask) {
    let task = state.data.find((el) => el.id === newTask.id);

    task.description = newTask.description;
  }
}

export const actions = {
  load (store) {
    return this.$axios.$get('/api/task/').then((data) => {
      store.commit('load', data)
    });
  },
  add (store, task) {
    return this.$axios.$post('/api/task/', task).then((data) => {
      store.commit('add', data);
    });
  },
  delete (store, { id }) {
    return this.$axios.$delete(`/api/task/${id}`).then(() => {
      store.commit('delete', { id })
    });
  },
  update (store, newTask) {
    return this.$axios.$put('/api/task', newTask).then((data) => {
      store.commit('update', data);
    });
  }
}
