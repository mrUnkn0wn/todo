import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { TasksComponent } from './tasks/tasks.component';

const routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
