import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { authReducer } from '../auth/auth.reducer';
import { tasksReducer } from '../tasks/tasks.reducer';


@NgModule({
  imports: [
    NgReduxModule
  ]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(combineReducers({auth: authReducer, tasks: tasksReducer}), {});
  }
}
