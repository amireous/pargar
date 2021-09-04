import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';

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

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLoginDropdown() {
    this.isLoginDropdown = true;
  }

  tokenH: any;

  onSignup(phoneNumber: string) {
    this.apiService.signUp(phoneNumber).subscribe(
      (response) => {
        this.haveError = false;
        console.log(response);
        this.currentMode = 'verify';
        console.log(this.currentMode);
        this.verifyMode = true;
        this.userNumber = phoneNumber;
      },
      (errorMsg) => {
        this.errorMessage = errorMsg;
        this.haveError = true;
      }
    );
  }

  onResendCode() {
    this.currentMode = 'login';
    this.codeValidation = true;
  }

  onVerifyCode(code: string, username: string) {
    this.apiService
      .verifyLoginCode(code, username, this.userNumber)
      .subscribe((res: any) => {
        this.tokenService.setToken(res.token);
      });
  }

  refreshPage() {
    window.location.reload();
  }
}
