import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userNumber: string | undefined;
  verificationCode: string | undefined;
  isLoginDropdown: boolean = false;
  haveError: boolean = false;
  errorMessage: string | undefined;
  verifyMode = false;
  currentMode: string = 'login';
  codeValidation: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onLoginDropdown() {
    this.isLoginDropdown = true;
  }

  onSignup(phoneNumber: string) {
    if (phoneNumber.length === 11 && phoneNumber.startsWith('0')) {
      this.apiService.signUp(phoneNumber).subscribe((response) => {
        console.log(response);
        this.haveError = false;
        this.currentMode = 'verify';
        console.log(this.currentMode);
        this.verifyMode = true;
        this.userNumber = phoneNumber;
      });
    }

    if (phoneNumber.startsWith('') && phoneNumber.length === 0) {
      console.log('empty');
      this.haveError = true;
      this.errorMessage = 'پر کردن تمامی قسمت ها الزامی است.';
    } else if (
      phoneNumber.length < 11 ||
      (phoneNumber.length > 11 && !phoneNumber.startsWith(''))
    ) {
      console.log('too low');
      this.errorMessage = 'لطفا شماره موبایل خود را با فرمت صحیح وارد نمایید.';
    }
  }

  onResendCode() {
    this.currentMode = 'login';
    this.codeValidation = false;
  }

  onVerifyCode(code: string, username: string) {
    this.apiService.verifyLoginCode(code, username, this.userNumber).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.codeValidation = false;
      }
    );

    console.log(username, code);
  }
}
