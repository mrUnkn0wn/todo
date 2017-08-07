import {
  GET_TASKS_SUCCESS,
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  CHANGE_EDIT_MODE
} from './tasks.actions';

const initState = {
  items : []
};

const defaultAction = {
  type: '',
  tasks: [],
  id: '',
  editMode : false,
  task: { id: ''}
};

export function tasksReducer(state = initState, action = defaultAction) {
  let newTasks;

  switch(action.type){
    case GET_TASKS_SUCCESS:
      return Object.assign({}, state, { items: action.tasks });

    case ADD_TASK_SUCCESS:
      newTasks = state.items.concat([action.task]);

      return Object.assign({}, state, { items: newTasks });

    case DELETE_TASK_SUCCESS:
      newTasks = state.items.filter(({id}) => id !== action.id);

      return Object.assign({}, state, { items: newTasks });

    case UPDATE_TASK_SUCCESS:
      let tasks = state.items.concat([]);
      tasks[tasks.findIndex(task => task.id === action.task.id)] = action.task;

      return Object.assign({}, state, { items: tasks });

    case CHANGE_EDIT_MODE:
      newTasks = state.items.concat([]);
      newTasks.forEach(task => {
        if(task.id === action.id){
          task.editMode = action.editMode;
        } else {
          task.editMode = false;
        }
      });

      return Object.assign({}, state, { items: newTasks });
  }

  return state;
}


