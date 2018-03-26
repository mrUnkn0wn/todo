import { Component } from '@angular/core';

import { TaskApiService } from '../tasks.api.service';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  constructor (private service: TaskApiService) {}

  onEnter (description) {
    this.service.addTask(description);
  }
}
