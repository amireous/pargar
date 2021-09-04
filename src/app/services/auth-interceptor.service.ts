import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private apiService: ApiService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token11 = this.tokenService.getToken();

    this.apiService.getHomeScreenData();

    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`,
          'Accept-Language': 'fa-IR',
        },
      })
    );
    // .pipe(
    // tap(
    //   (event) => {
    //     console.log(event);

    //     console.log(token);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
    // );
  }
}
