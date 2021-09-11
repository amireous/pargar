import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoginDropdown: boolean = false;
  haveError: boolean = false;
  errorMessage: string | undefined;
  showModal: boolean = true;

  userAvatar: string | undefined;
  profileValid: boolean = false;

  currentMode: string = 'login';
  codeValidation: boolean = true;

  logged: boolean = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.logged = this.authService.isLogged;
    console.log(this.logged);
    console.log(this.authService.isLogged);
  }

  onLoginDropdown() {
    this.isLoginDropdown = true;
    this.showModal = true;
  }

  signupForm: FormGroup = new FormGroup({});
  verificationForm: FormGroup = new FormGroup({});

  initForms() {
    this.signupForm = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
    });

    this.verificationForm = new FormGroup({
      verification: new FormControl(''),
      username: new FormControl(''),
    });
  }

  onSignup() {
    this.authService.signUp(this.signupForm.value.phoneNumber).subscribe(
      (response) => {
        console.log(response);
        this.currentMode = 'verify';
        console.log(this.currentMode);
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

  onVerifyCode() {
    let phoneNumber: string = this.signupForm.value.phoneNumber;
    let code: string = this.verificationForm.value.verification;

    let username: string | '' = this.verificationForm.value.username;

    if (phoneNumber) {
      this.authService
        .verifyLoginCode(code, username || '', phoneNumber)
        .subscribe(
          (res: any) => {
            this.tokenService.token = res.token;
            this.getProfileData();
          },
          () => {
            this.codeValidation = false;
          }
        );
    }
  }

  getProfileData() {
    this.apiService.getUserProfile().subscribe((data) => {
      this.userAvatar = data.avatar;
      this.isLoginDropdown = false;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onProfile() {
    this.apiService.toProfileComponent();
    this.getProfileData();
  }

  onOverlay() {
    this.showModal = false;
  }
}
