import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Request } from 'express';

import { REQUEST } from '@nguniversal/express-engine/tokens';


@Injectable()

export class UniversalInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) protected request: Request) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;

    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;

      newUrl += req.url;
      req.headers.set('Set-Cookie', this.request.headers.cookie)
      serverReq = req.clone({
        url: newUrl,
        headers: req.headers,
        withCredentials: true
      });

      console.log(serverReq.headers.get('Set-Cookie'));
    }

    return next.handle(serverReq);
  }
}
