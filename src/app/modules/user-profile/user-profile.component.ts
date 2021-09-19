import { Component, OnDestroy, OnInit } from '@angular/core';
import { RootObjectProfile } from '../../models/user.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userData: RootObjectProfile | undefined;
  userAvatar: string | undefined;
  subscription: Subscription | undefined;

  isBookmark: boolean = true;
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router
  ) {}

  onChangeMode() {
    this.isBookmark = !this.isBookmark;
  }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((data) => {
      this.userData = data;
      if (this.authService.isLogged) {
        this.subscription = this.apiService.userAvatar.subscribe((data) => {
          this.userAvatar = data;
        });
      }
    });
  }

  toEditProfile() {
    this.router.navigate(['/profile/edit-profile']);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
