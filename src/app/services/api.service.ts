import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import {
  RootObjectProfile,
  UserDataPostService,
  UserVerifyCodePost,
} from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl: string = environment.baseUrl;
const storeId: number = environment.storeId;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  loginStatus = new Subject<boolean>();
  isLogged: boolean | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  getHomeScreenData(): Observable<RootObject> {
    return this.http.get<RootObject>(`${baseUrl}/store/${storeId}`);
  }

  getHomeChildCategory(): Observable<RootObjectChild[]> {
    return this.http.get<RootObjectChild[]>(`${baseUrl}/category/${storeId}/0`);
  }

  getUserProfile(): Observable<RootObjectProfile> {
    return this.http.get<RootObjectProfile>(`${baseUrl}/profile`);
  }

  disableScrolling() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }

  enableScrolling() {
    window.onscroll = function () {};
  }

  toProfileComponent() {
    this.router.navigate(['/profile']);
  }
}
