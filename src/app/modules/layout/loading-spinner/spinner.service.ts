import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = new Subject<boolean>();
  counter = 0;

  showLoading() {
    ++this.counter;
    if (this.counter > 0) {
      this.isLoading.next(true);
    }
  }

  hideLoading() {
    --this.counter;
    if (this.counter <= 0) {
      this.counter = 0;
      this.isLoading.next(false);
    }
  }

  constructor() {}
}
