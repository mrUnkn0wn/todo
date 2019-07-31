import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthActions } from './auth.actions';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient, private actions: AuthActions) {}

  login ({username, password}) {
    this.http.get(`/api/auth/login?username=${username}&password=${password}`).subscribe(
      this.actions.authSucceed,
      this.actions.authFailed
    );
  }

  auth () {
    this.http.get('/api/auth').subscribe(
      this.actions.authSucceed,
      this.actions.authFailed
    );
  }

  logout () {
    this.http.get('/api/auth/logout').subscribe(
      this.actions.authFailed
    );
  }
}
