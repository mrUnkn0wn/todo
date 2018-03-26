import * as types from './types';

export function getTasksSuccess (tasks) {
  return {
    type: types.GET_TASKS_SUCCESS,
    tasks
  }
}

export function addTaskSuccess (task) {
  return {
    type: types.ADD_TASK_SUCCESS,
    task
  }
}

export function deleteTaskSuccess (id) {
  return {
    type: types.DELETE_TASK_SUCCESS,
    id
  }
}

export function updateTaskSuccess (task) {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    task
  }
}

export function changeEditMode (taskId, editMode) {
  return {
    type: types.CHANGE_EDIT_MODE,
    taskId,
    editMode
  }
}
