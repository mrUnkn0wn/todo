import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthActions } from './auth.actions';
import { AuthApiService } from './auth.api.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [ AuthActions, AuthApiService ]
})
export class AuthModule { }
