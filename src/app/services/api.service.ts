import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import { UserDataPostService, UserVerifyCodePost } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getHomeScreenData(): Observable<RootObject> {
    return this.http.get<RootObject>(`${baseUrl}/store/7`);
  }

  signUp(phoneNumber: string): Observable<UserDataPostService> {
    return this.http
      .post<UserDataPostService>(`${baseUrl}/mobile_login_step1/7`, {
        mobile: phoneNumber,
        device_os: 'angularJS',
        device_id: 'Desktop',
        device_model: 'browser',
      })
      .pipe(
        tap((event) => {
          console.log(event);
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          let errorMessage = 'اروری رخ داده است لطفا رفرش کنید';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }
          switch (errorResponse.error.message) {
            case 'incomplete parameters':
              errorMessage = 'پر کردن تمامی قسمت ها الزامی است.';
              break;
            case 'Mobile is not valid':
              errorMessage =
                'لطفا شماره موبایل خود را با فرمت صحیح وارد نمایید.';
          }

          return throwError(errorMessage);
        })
      );
  }

  verifyLoginCode(
    code: string,
    username: string | '',
    phoneNumber: string | undefined
  ) {
    return this.http
      .post<UserVerifyCodePost>(`${baseUrl}/mobile_login_step2/7`, {
        mobile: phoneNumber,
        device_id: 'Desktop',
        verification_code: code,
        nickname: username,
      })
      .pipe(tap((eve) => {}));
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${baseUrl}/profile`);
  }

  disableScrolling() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }

  enableScrolling() {
    window.onscroll = function () {};
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  toProfileComponent() {
    this.router.navigate(['/profile']).then(() => {});
  }
}
