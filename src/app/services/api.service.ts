import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  CategoryItems,
  CommentModel,
  ParentCat,
  PostComment,
  PostCommentResponse,
  ProductDetails,
  RootObject,
  RootObjectChild,
  VoucherData,
} from '../models/api-data.model';
import { environment } from 'src/environments/environment';
import { RootObjectProfile, UserDataPostService } from '../models/user.model';
import { tap } from 'rxjs/operators';

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
  userAvatar = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private router: Router) {}

  getHomeScreenData(): Observable<RootObject> {
    return this.http.get<RootObject>(`${baseUrl}/store/${storeId}`);
  }

  getHomeChildCategory(): Observable<RootObjectChild[]> {
    return this.http.get<RootObjectChild[]>(`${baseUrl}/category/${storeId}/0`);
  }

  getUserProfile(): Observable<RootObjectProfile> {
    return this.http
      .get<RootObjectProfile>(`${baseUrl}/profile`)
      .pipe(tap((data) => this.userAvatar.next(data.avatar)));
  }

  toProfileComponent() {
    this.router.navigate(['/profile']);
  }

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

  getHomeItemData(id: number): Observable<ParentCat> {
    return this.http.get<ParentCat>(`${baseUrl}/homeitem/${storeId}/${id}`);
  }

  getCategoryData(productId: number): Observable<CategoryItems[]> {
    return this.http.get<CategoryItems[]>(
      `${baseUrl}/listproducts/${productId}`,
      {
        params: {
          limit: 20,
        },
      }
    );
  }

  getModuleData(
    moduleId: number,
    limitNum: number = 20
  ): Observable<CategoryItems[]> {
    return this.http.get<CategoryItems[]>(`${baseUrl}/module/${moduleId}`, {
      params: {
        limit: limitNum,
      },
    });
  }

  submitGiftCode(giftCode: string): Observable<VoucherData> {
    return this.http.get<VoucherData>(
      `${baseUrl}/voucher/get_voucher/${giftCode}`
    );
  }

  getProductDetail(id: number): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`${baseUrl}/product/${id}`, {
      params: {
        device_os: 'ios',
      },
    });
  }

  getProductComments(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${baseUrl}/comment/${id}`, {
      params: {
        limit: 5,
      },
    });
  }

  getRelatedProducts(id: number): Observable<CategoryItems[]> {
    return this.http.get<CategoryItems[]>(`${baseUrl}/related_products/${id}`);
  }

  postUserComment(
    id: number | undefined,
    commentData: PostComment
  ): Observable<PostCommentResponse> {
    return this.http.post<PostCommentResponse>(
      `${baseUrl}/comment/${id}`,
      commentData
    );
  }
}
