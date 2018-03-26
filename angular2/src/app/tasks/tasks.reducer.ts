import { Action } from 'redux';
import {
  TasksAction,
  TaskAction,
  TasksActions,
  TaskActions
} from './tasks.actions';

import { ITaskList } from './tasks.model';

const initState: ITaskList = {
  items : []
};

const defaultAction = {
  type: '',
  tasks: [],
  id: '',
  editMode : false,
  task: { id: ''}
};

export function tasksReducer(state: ITaskList  = initState, a: Action): ITaskList {
  let newTasks, action;
  const type = a.type;

  switch(type){
    case TasksActions.GET_TASKS_SUCCESS:
      action = a as TasksAction;
      return Object.assign({}, state, { items: action.payload });

    case TaskActions.ADD_TASK_SUCCESS:
      action = a as TaskAction;
      newTasks = state.items.concat([action.payload]);

      return Object.assign({}, state, { items: newTasks });

    case TaskActions.DELETE_TASK_SUCCESS:
      action = a as TaskAction;
      newTasks = state.items.filter(({id}) => id !== action.meta.id);

      return Object.assign({}, state, { items: newTasks });

    case TaskActions.UPDATE_TASK_SUCCESS:
      let tasks = state.items.concat([]);
      action = a as TaskAction;
      tasks[tasks.findIndex(task => task.id === action.payload.id)] = action.payload;

      return Object.assign({}, state, { items: tasks });

    case TaskActions.CHANGE_EDIT_MODE:
      action = a as TaskAction;
      newTasks = state.items.concat([]);
      newTasks.forEach(task => {
        if(task.id === action.meta.id){
          task.editMode = action.meta.editMode;
        } else {
          task.editMode = false;
        }
      });

      return Object.assign({}, state, { items: newTasks });
  }

  return state;
}
