import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject, RootObjectChild } from '../models/api-data.model';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getHomeScreenData(): Observable<RootObject> {
    return this.http.get<RootObject>(`${baseUrl}/store/7`);
  }

  // getHeaderItemChilds(): Observable<RootObjectChild> {
  //   return this.http.get<RootObjectChild>(`${baseUrl}/category/7/0`);
  // }
}
