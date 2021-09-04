import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  onSubmit(phoneNumber: string) {
    if (phoneNumber) {
      this.http
        .post('https://api.vasapi.click/mobile_login_step1/7', {
          mobile: phoneNumber,
          device_os: 'angularJS',
          device_id: 'Desktop',
          device_model: 'browser',
        })
        .subscribe((response) => {});
    }
  }

  //   {
  //     "mobile": "09388854679",
  //     "device_id": "Desktop",
  //     "verification_code": "20311",
  //     "nickname": ""
  // }

  onVerCode(code: string) {
    this.http
      .post('https:api.vasapi.click/mobile_login_step2/7', {
        mobile: '09388854679',
        device_id: 'Desktop',
        verification_code: code,
        nickname: '',
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
