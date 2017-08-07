import { Component } from '@angular/core';

import { TasksApiService } from '../tasks.api.service';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  constructor (private service: TasksApiService) {}

  onEnter (description) {
    this.service.addTask(description);
  }
}
