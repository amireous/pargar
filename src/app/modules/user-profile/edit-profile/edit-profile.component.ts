import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootObjectProfile } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  userData: RootObjectProfile | undefined;
  userAvatar: string | undefined;
  selectedFile: any;
  showVerifyBtn: boolean = false;
  subscription: Subscription | undefined;
  informationForm = new FormGroup({});

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initial();
  }

  initial() {
    this.route.data.subscribe((data) => {
      this.userData = data[0];
      this.subscription = this.apiService.userAvatar.subscribe((data) => {
        this.userAvatar = data;
        this.initForms();
      });
    });
  }

  initForms() {
    this.informationForm = new FormGroup({
      nickname: new FormControl(
        `${this.userData?.nickname}`,
        Validators.required
      ),
      phoneNumber: new FormControl(`${this.userData?.mobile}`, [
        Validators.required,
      ]),
    });
  }

  onChange(event: any) {
    this.showVerifyBtn = true;
    this.selectedFile = event.target.files[0];
  }

  onUploadAvatar() {
    this.apiService.uploadUserAvatar(this.selectedFile).subscribe((res) => {
      this.apiService.userAvatar.next(res.data.avatar);
      this.router.navigate(['/profile']);
    });
  }
  onSaveChanges() {
    let nickname = this.informationForm.value.nickname;

    this.apiService.verifyUserChanges(nickname).subscribe((data) => {
      if (data) {
        this.router.navigate(['/profile']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
