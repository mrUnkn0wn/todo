import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import { TasksApiService } from '../tasks.api.service';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  @select(['tasks', 'items']) tasks$: Observable<any>

  constructor( private service: TasksApiService) { }

  ngOnInit () {
    this.service.getTasks();
  }
}
