import { restUrl } from '../config';
import store from '../store';

import {
  getTasksSuccess,
  addTaskSuccess,
  deleteTaskSuccess,
  updateTaskSuccess
} from '../actions/task';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function getTasks() {
    fetch(`${restUrl}/task/`).then((res) => {
      return res.json();
    }).then((tasks) => {
      store.dispatch(getTasksSuccess(tasks));
    });
}

export function addTask(task) {
    const body = JSON.stringify(task);

    fetch(`${restUrl}/task/`,{ method: 'POST', body, headers }).then((res) => {
      return res.json();
    }).then((task) => {
      store.dispatch(addTaskSuccess(task));
    });
}

export function deleteTask(taskId) {
    fetch(`${restUrl}/task/${taskId}`, { method: 'DELETE' }).then(() => {
      store.dispatch(deleteTaskSuccess(taskId));
    });
}

export function updateTask(newTask) {
    fetch(`${restUrl}/task/`, { method: 'PUT', body: newTask }).then((res) => {
      return res.json();
    }).then(({data}) => {
      store.dispatch(updateTaskSuccess(data));
    });
}
