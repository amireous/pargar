import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '../modules/shared/loading-spinner/spinner.service';
import { ApiService } from './api.service';

import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private spinnerService: SpinnerService,
    private apiService: ApiService
  ) {}

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
      this.apiService.isLogged = true;
      this.apiService.loginStatus.next(this.apiService.isLogged);
    }
    this.spinnerService.showLoading();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.hideLoading()),
      tap(
        () => {},
        (error) => {
          console.error(error);
        }
      )
    );
  }
}
