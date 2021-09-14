import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product, RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import {
  RootObjectProfile,
  UserDataPostService,
  UserVerifyPost,
} from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { FeatureProductsObject } from '../models/products-collection.model';
import { UpdateAvatarData } from '../models/user-profile';

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

  // getFeatureProductCollection: Observable<ProductCollectionObject> | undefined(id: number | undefined) {
  // return  this.http.get<ProductCollectionObject>(`${baseUrl}/product/${id}`)
  // );
  // }
  getFeatureProducts(id: number): Observable<FeatureProductsObject> {
    return this.http.get<FeatureProductsObject>(`${baseUrl}/product/${id}`);
  }

  uploadUserAvatar(file: File): Observable<UpdateAvatarData> {
    const formData = new FormData();
    formData.append('avatar', file, file.name);
    return this.http.post<UpdateAvatarData>(`${baseUrl}/profile`, formData);
  }

  verifyUserChanges(userName: string): Observable<UserDataPostService> {
    return this.http.post<UserDataPostService>(`${baseUrl}/profile`, {
      device_os: 'angularJS',
      device_id: 'Desktop',
      device_model: 'browser',
      nickname: userName,
    });
  }
}
