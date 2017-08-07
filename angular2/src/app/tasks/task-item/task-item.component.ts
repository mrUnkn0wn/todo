import { Component, Input } from '@angular/core';

import { TasksApiService } from '../tasks.api.service';
import { TasksActions } from '../tasks.actions';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Object

  constructor (private service: TasksApiService, private actions: TasksActions) {}

  deleteTask (id) {
    this.service.deleteTask(id);
  }

  changeStatus (task) {
    task.active = !task.active;

    this.service.updateTask(task);
  }

  editTask (task, input) {
    this.actions.changeEditMode(task.id, true);

    input.value = task.description;

    setTimeout(() => {
      input.focus();
    }) ;
  }

  updateDescription (task, description) {
    task.editMode = false;
    task.description = description;
    this.service.updateTask(task);
  }
}
