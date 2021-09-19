import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserVerifyPost } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  currentMode: string = 'loginMode';
  errorMessage: string | undefined;
  codeValidation: boolean = true;
  haveError: boolean = false;
  isGiftMode: boolean = false;
  giftErrorMsg: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    private authService: AuthService,
    private apiService: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isLogged.subscribe((data) => {
      if (data) {
        this.currentMode = 'giftMode';
        console.log(this.currentMode);
      }
    });
    this.initForms();
    console.log('test');
  }

  userForm: FormGroup = new FormGroup({});
  verificationForm: FormGroup = new FormGroup({});

  initForms() {
    this.userForm = new FormGroup({
      phoneNumber: new FormControl('', Validators.required),
      verificationCode: new FormControl(''),
      nickname: new FormControl(''),
      giftCode: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.currentMode === 'loginMode') {
      this.onSingup();
    }
    if (this.currentMode === 'verifyMode') {
      this.onVerifyCode();
    }
    if (this.currentMode === 'giftMode') {
      this.onSubmitGiftCode();
    }
  }

  onSingup() {
    const phoneNumber = this.userForm.value.phoneNumber;
    this.authService.signUp(phoneNumber).subscribe(
      (response) => {
        this.currentMode = 'verifyMode';
        this.haveError = false;
        console.log(response);
      },
      (errorMsg) => {
        this.errorMessage = errorMsg;
        this.haveError = true;
      }
    );
  }

  onResendCode() {
    this.currentMode = 'loginMode';
    this.codeValidation = true;
  }

  onVerifyCode() {
    const userData: UserVerifyPost = {
      mobile: this.userForm.value.phoneNumber,
      device_id: 'Desktop',
      verification_code: this.userForm.value.verificationCode,
      nickname: this.userForm.value.nickname,
    };
    this.authService.verifyLoginCode(userData).subscribe(
      (res: any) => {
        this.dialogRef.close();
        this.tokenService.token = res.token;
        this.getProfileData();
        this.router.navigate(['/']);

        this.apiService.loginStatus.subscribe((data) => {
          console.log(data);
        });
      },
      () => {
        this.codeValidation = false;
      }
    );
  }

  getProfileData() {
    this.apiService.getUserProfile().subscribe(() => {});
  }

  onSubmitGiftCode() {
    let giftCode: string = this.userForm.value.giftCode;
    if (giftCode) {
      this.apiService.submitGiftCode(giftCode).subscribe(
        () => {},
        (err) => (this.giftErrorMsg = err.error.message)
      );
    } else {
      this.giftErrorMsg = 'لطفا فیلد را پر نمایید';
    }
  }
}
