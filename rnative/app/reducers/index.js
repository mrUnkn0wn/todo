import { combineReducers } from 'redux';

import taskReducer from './task';
import authReducer from './auth'

const reducers = combineReducers({
  taskState:taskReducer,
  authState:authReducer
});

export default reducers;
