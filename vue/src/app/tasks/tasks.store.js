import axios from 'axios';

export default {
  state: {
    data: []
  },
  getters: {
    tasks (state) {
      return state.data;
    }
  },
  mutations: {
    loadTasks (state, tasks) {
      state.data = tasks;
    },
    addTask (state, task) {
      state.data.push(task);
    },
    deleteTask (state, task) {
      state.data = state.data.filter((el) => el.id !== task.id);
    },
    updateTask (state, newTask) {
      let task = state.data.find((el) => el.id === newTask.id);

      task.description = newTask.description;
    }
  },
  actions: {
    loadTasks (store) {
      return axios.get('/api/task/').then(({ data }) => {
        store.commit('loadTasks', data)
      });
    },
    addTask (store, task) {
      return axios.post('/api/task/', task).then(({ data }) => {
        store.commit('addTask', data);
      });
    },
    deleteTask (store, { id }) {
      return axios.delete(`/api/task/${id}`).then(() => {
        store.commit('deleteTask', { id })
      });
    },
    updateTask (store, newTask) {
      return axios.put('/api/task', newTask).then(({ data }) => {
        store.commit('updateTask', data);
      });
    }
  }
}
