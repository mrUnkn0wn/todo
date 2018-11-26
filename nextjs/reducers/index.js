import { combineReducers } from 'redux';

import taskReducer from './task-reducer';
import authReducer from './auth-reducer'

let reducers = combineReducers({
    taskState:taskReducer,
    authState:authReducer
});

export default reducers;