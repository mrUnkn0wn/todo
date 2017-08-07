import { Injectable } from '@angular/core'
import { dispatch } from '@angular-redux/store';

export const AUTHENTICATION_SUCCEED = 'AUTHENTICATION_SUCCEED';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';


@Injectable()
export class AuthActions {
  @dispatch()
  public authSucceed() {
    return {
      type: AUTHENTICATION_SUCCEED
    }
  }

  @dispatch()
  public authFailed() {
    return {
      type: AUTHENTICATION_FAILED
    }
  }

}
