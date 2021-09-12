import { Component, OnInit } from '@angular/core';
import { RootObjectProfile } from '../../models/user.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userData: RootObjectProfile | undefined;

  isBookmark: boolean = true;
  editMode: boolean = false;
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  onChangeMode() {
    this.isBookmark = !this.isBookmark;
  }

  ngOnInit(): void {
    // this.apiService.getUserProfile().subscribe((data) => {
    //   this.userData = data;
    // });
  }

  editProfile() {
    this.router.navigate(['/profile/edit-profile']);
    this.editMode = true;
  }

  onLogout() {
    this.authService.logout();
  }
}
