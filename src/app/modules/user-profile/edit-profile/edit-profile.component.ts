import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootObjectProfile } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  userData: RootObjectProfile | undefined;
  userAvatar: string | undefined;
  selectedFile: any;
  showVerifyBtn: boolean = false;

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((data) => {
      console.log(data);
      this.userData = data;
      this.userAvatar = data.avatar;
      console.log(this.userData);
      this.initForms();
    });
  }

  informationForm = new FormGroup({});

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
      this.apiService.userAvatar.subscribe((data) => (this.userAvatar = data));
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
}
