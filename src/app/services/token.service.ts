import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get token() {
    return localStorage.getItem('token');
  }

  set token(str: string | null) {
    localStorage.setItem('token', str || '');
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }
}
