import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TasksApiService } from './tasks.api.service';
import { TasksActions } from './tasks.actions';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TasksComponent,
    TaskInputComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  providers: [
    TasksApiService,
    TasksActions
  ]
})
export class TasksModule { }
