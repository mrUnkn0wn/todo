import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { AuthApiService } from './auth/auth.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TODO App';

  @select(['auth', 'authenticated']) authenticated: Observable<boolean>;

  constructor (private router: Router, private service: AuthApiService) {}

  ngOnInit () {
    this.service.auth();

    this.authenticated.subscribe((val) => {
      if (val) {
        this.router.navigateByUrl('/tasks')
      } else {
        this.router.navigateByUrl('auth/login')
      }
    })
  }

  logout () {
    this.service.logout();
  }
}
