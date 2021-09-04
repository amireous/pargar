import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public setToken(tokenValue: string) {
    return localStorage.setItem('token', tokenValue);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
