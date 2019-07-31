import { Injectable } from '@angular/core'
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { FluxStandardAction } from 'flux-standard-action';

import { ITask } from './tasks.model';

type TasksPayload = ITask[]
export type TasksAction = FluxStandardAction<string, TasksPayload, any>;

type TaskPayload = ITask;
interface TaskMetaData {
  id: number,
  editMode?: boolean
}
  export type TaskAction = FluxStandardAction<string, TaskPayload, TaskMetaData>;

@Injectable()
export class TasksActions {
  static readonly GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';

  @dispatch()
  getTasksSuccess = (tasks): TasksAction => ({
      type: TasksActions.GET_TASKS_SUCCESS,
      payload: tasks,
      meta: null
  })
}

@Injectable()
export class TaskActions {
  static readonly ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
  static readonly DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
  static readonly UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
  static readonly CHANGE_EDIT_MODE = 'GET_TASKS_SUCCESS';

  @dispatch()
  addTaskSuccess = (task): TaskAction => ({
      type: TaskActions.ADD_TASK_SUCCESS,
      payload: task,
      meta: null
  })

  @dispatch()
  deleteTaskSuccess = (id): TaskAction => ({
      type: TaskActions.DELETE_TASK_SUCCESS,
      payload: null,
      meta: {id}
  })

  @dispatch()
  updateTaskSuccess = (task): TaskAction => ({
      type: TaskActions.UPDATE_TASK_SUCCESS,
      payload: task,
      meta: null
  })

  @dispatch()
  changeEditMode = (id, editMode): TaskAction => ({
      type: TaskActions.CHANGE_EDIT_MODE,
      payload: null,
      meta: {id, editMode}
  })
}
