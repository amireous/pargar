import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserDataPostService, UserVerifyCodePost } from '../models/user.model';

const baseUrl = environment.baseUrl;
const storeId: number = environment.storeId;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signUp(phoneNumber: string): Observable<UserDataPostService> {
    return this.http
      .post<UserDataPostService>(`${baseUrl}/mobile_login_step1/${storeId}`, {
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
      .post<UserVerifyCodePost>(`${baseUrl}/mobile_login_step2/${storeId}`, {
        mobile: phoneNumber,
        device_id: 'Desktop',
        verification_code: code,
        nickname: username,
      })
      .pipe(tap((eve) => {}));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
