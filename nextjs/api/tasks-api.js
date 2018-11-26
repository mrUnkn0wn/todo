import axios from "axios";
import getConfig from 'next/config'
import store from '../store';

import { getTasksSuccess, addTaskSuccess, deleteTaskSuccess, updateTaskSuccess } from '../actions/task-actions';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const restUrl = serverRuntimeConfig && serverRuntimeConfig.restUrl || publicRuntimeConfig.restUrl;

export function getTasks(headers) {
    let options;

    if (headers) {
        options = { headers };
    }

    axios.get(`${restUrl}/task/`, options).then((res) => {
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
