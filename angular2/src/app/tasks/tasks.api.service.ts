import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TasksActions } from './tasks.actions';

@Injectable()
export class TasksApiService {

  constructor (private http: Http, private actions: TasksActions) {}

  getTasks () {
    this.http.get('/api/task').subscribe((res) => {
      this.actions.getTasksSuccess(res.json());
    });
  }

  addTask (description) {
    this.http.post('api/task', {description}).subscribe((res) => {
      this.actions.addTaskSuccess(res.json());
    });
  }

  deleteTask (id) {
    this.http.delete(`api/task/${id}`).subscribe(() => {
      this.actions.deleteTaskSuccess(id);
    });
  }

  updateTask (task) {
    this.http.put('api/task', task).subscribe((res) => {
      this.actions.updateTaskSuccess(res.json());
    });
  }
}
