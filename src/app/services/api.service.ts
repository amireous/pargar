import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import { UserDataPostService, UserVerifyCodePost } from '../models/user.model';

const baseUrl: string = environment.baseUrl;
let username: string | undefined;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHomeScreenData(): Observable<RootObject> {
    return this.http.get<RootObject>(`${baseUrl}/store/7`);
  }

  signUp(phoneNumber: string): Observable<UserDataPostService> {
    return this.http.post<UserDataPostService>(
      `${baseUrl}/mobile_login_step1/7`,
      {
        mobile: phoneNumber,
        device_os: 'angularJS',
        device_id: 'Desktop',
        device_model: 'browser',
      }
    );
  }

  verifyLoginCode(
    code: string,
    username: string,
    phoneNumber: string | undefined
  ) {
    return this.http.post<UserVerifyCodePost>(
      `${baseUrl}/mobile_login_step2/7`,
      {
        mobile: phoneNumber,
        device_id: 'Desktop',
        verification_code: code,
        nickname: '',
      }
    );
  }

  // getHeaderItemChilds(): Observable<RootObjectChild> {
  //   return this.http.get<RootObjectChild>(`${baseUrl}/category/7/0`);
  // }
}
