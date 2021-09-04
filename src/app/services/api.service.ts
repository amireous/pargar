import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import { UserDataPostService, UserVerifyCodePost } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  token: string | undefined;

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
    username: string,
    phoneNumber: string | undefined
  ) {
    return this.http
      .post<UserVerifyCodePost>(`${baseUrl}/mobile_login_step2/7`, {
        mobile: phoneNumber,
        device_id: 'Desktop',
        verification_code: code,
        nickname: '',
      })
      .pipe(
        tap((res: any) => {
          console.log(res);
          localStorage.getItem('token');
        })
      );
  }

  // userAuthenticate(token: string) {
  //   if (token) {
  //     this.http.post('https:api.vasapi.click/profile', token).subscribe(
  //       (data) => {
  //         console.log(data);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else return;
  // }

  // getHeaderItemChilds(): Observable<RootObjectChild> {
  //   return this.http.get<RootObjectChild>(`${baseUrl}/category/7/0`);
  // }
}
