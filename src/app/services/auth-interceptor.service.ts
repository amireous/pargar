import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.token;

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
          'Accept-Language': 'fa-IR',
        },
      });
    }
    return next.handle(req).pipe(
      tap(
        () => {},
        (error) => {
          console.error(error);
        }
      )
    );
  }
}
