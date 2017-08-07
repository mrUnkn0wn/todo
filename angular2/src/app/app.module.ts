import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';
import { TasksModule } from './tasks/tasks.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    StoreModule,
    AuthModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
