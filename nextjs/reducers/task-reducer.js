import * as types from '../actions/action-types';

const initialState = {
    tasks : []
};

const taskReducer = function(state = initialState, action = {}) {
    let newTasks;

    switch(action.type){
        case types.GET_TASKS_SUCCESS:
            return Object.assign({}, state, { tasks:action.tasks });

        case types.ADD_TASK_SUCCESS:
            newTasks = state.tasks.concat([action.task]);
            return Object.assign({}, state, { tasks:newTasks });

        case types.DELETE_TASK_SUCCESS:
            newTasks = state.tasks.filter(({id}) => id !== action.id);
            return Object.assign({}, state, { tasks: newTasks });

        case types.UPDATE_TASK_SUCCESS:
            let tasks = state.tasks.concat([]);
            tasks[tasks.findIndex(task => task.id === action.task.id)] = action.task;

            return Object.assign({}, state, { tasks });

        case types.CHANGE_EDIT_MODE:
            newTasks = state.tasks.concat([]);
            newTasks.forEach(task => {
                if(task.id === action.taskId){
                    task.editMode = action.editMode;
                } else {
                    task.editMode = false;
                }
            });

            return Object.assign({}, state, { tasks: newTasks });

    }

    return state;
}

export default taskReducer;
