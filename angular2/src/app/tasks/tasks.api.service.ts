import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TasksActions, TaskActions } from './tasks.actions';

@Injectable()
export class TasksApiService {

  constructor (private http: HttpClient, private actions: TasksActions) {}

  getTasks () {
    this.http.get('/api/task').subscribe((res) => {
      this.actions.getTasksSuccess(res);
    });
  }
}

@Injectable()
export class TaskApiService {
  constructor (private http: HttpClient, private actions: TaskActions) {}

  addTask (description) {
    this.http.post('api/task', {description}).subscribe((res) => {
      this.actions.addTaskSuccess(res);
    });
  }

  deleteTask (id) {
    this.http.delete(`api/task/${id}`).subscribe(() => {
      this.actions.deleteTaskSuccess(id);
    });
  }

  updateTask (task) {
    this.http.put('api/task', task).subscribe((res) => {
      this.actions.updateTaskSuccess(res);
    });
  }
}
