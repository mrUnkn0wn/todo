import { axios } from '@bundled-es-modules/axios';

export default new class AuthService {
  getTasks () {
    return axios.get(`${AppGlobals.restUrl}/task`)
  }

  addTask (description) {
    return axios.post(`${AppGlobals.restUrl}/task/`, { description });
  }

  deleteTask (taskId) {
    return axios.delete(`${AppGlobals.restUrl}/task/${taskId}`);
  }

  updateTask (newTask) {
    return axios.put(`${AppGlobals.restUrl}/task/`, newTask);
  }
};
