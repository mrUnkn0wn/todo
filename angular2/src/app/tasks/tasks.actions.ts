import { Injectable } from '@angular/core'
import { dispatch } from '@angular-redux/store';

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE';

@Injectable()
export class TasksActions {

  @dispatch()
  getTasksSuccess(tasks) {
    return {
      type: GET_TASKS_SUCCESS,
      tasks
    }
  }

  @dispatch()
  addTaskSuccess(task) {
    return {
      type: ADD_TASK_SUCCESS,
      task
    }
  }

  @dispatch()
  deleteTaskSuccess(id) {
    return {
      type: DELETE_TASK_SUCCESS,
      id
    }
  }

  @dispatch()
  updateTaskSuccess(task) {
    return {
      type: UPDATE_TASK_SUCCESS,
      task
    }
  }

  @dispatch()
  changeEditMode(id, editMode) {
    return {
      type: CHANGE_EDIT_MODE,
      id,
      editMode
    }
  }
}
