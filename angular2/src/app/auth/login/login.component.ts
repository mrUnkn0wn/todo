import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthApiService } from '../auth.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthApiService]
})
export class LoginComponent {
  public loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public fb: FormBuilder, private service: AuthApiService) {}

  doLogin(event) {
    this.service.login(this.loginForm.value);
  }
}
