import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../../services/api.service';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoginDropdown: boolean = false;
  haveError: boolean = false;
  errorMessage: string | undefined;
  showModal: boolean = true;

  userAvatar: string | undefined;
  profileValid: boolean = false;

  currentMode: string = 'login';
  codeValidation: boolean = true;

  loggin: boolean = false;

  isLogged: boolean = false;
  subscription: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initial();
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

  initial() {
    this.initForms();

    this.apiService.getHomeChildCategory().subscribe((data) => {
      console.log(data);
    });

    if (this.apiService.isLogged) {
      this.getProfileData();
    }
  }

  onSignup() {
    this.authService.signUp(this.signupForm.value.phoneNumber).subscribe(
      (response) => {
        this.currentMode = 'verify';
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
            this.router.navigate(['/']);
          },
          () => {
            this.codeValidation = false;
          }
        );
    }
  }

  getProfileData() {
    this.isLogged = true;
    this.apiService.getUserProfile().subscribe(() => {
      this.subscription.push(
        this.apiService.userAvatar.subscribe((data) => {
          this.userAvatar = data;
        })
      );
    });
    this.isLoginDropdown = false;
  }

  onLogout() {
    this.authService.logout();
    this.subscription.push(
      this.authService.isLogged.subscribe((status) => {
        this.userAvatar = undefined;
        this.currentMode = 'login';
      })
    );

    this.initForms();
  }

  onProfile() {
    this.apiService.toProfileComponent();
  }

  onOverlay() {
    this.showModal = false;
  }

  // onGiftCode() {
  //   if (this.isLogged) {
  //   }
  // }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
