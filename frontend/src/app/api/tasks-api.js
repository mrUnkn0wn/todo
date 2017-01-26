import axios from "axios";

import {restUrl} from '../config';
import store from '../store';

import { getTasksSuccess, addTaskSuccess, deleteTaskSuccess, updateTaskSuccess } from '../actions/task-actions';

export function getTasks() {
    axios.get(`${restUrl}/task/`).then((res) => {
        store.dispatch(getTasksSuccess(res.data));
    });
}

export function addTask(task) {
    axios.post(`${restUrl}/task/`, task).then(({data}) => {
        store.dispatch(addTaskSuccess(data));
    });
}

export function deleteTask(taskId) {
    axios.delete(`${restUrl}/task/${taskId}`).then(() => {
        store.dispatch(deleteTaskSuccess(taskId));
    });
}

export function updateTask(newTask) {
    axios.put(`${restUrl}/task/`, newTask).then(({data}) => {
        store.dispatch(updateTaskSuccess(data));
    });
}

