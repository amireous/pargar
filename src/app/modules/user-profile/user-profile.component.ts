import { Component, OnDestroy, OnInit } from '@angular/core';
import { RootObjectProfile } from '../../models/user.model';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onChangeMode() {
    this.isBookmark = !this.isBookmark;
  }

  ngOnInit(): void {
    this.initial();

    // this.apiService.getUserProfile().subscribe((data) => {
    //    this.userData = data;

    // });
  }

  initial() {
    this.route.data.subscribe((data) => {
      this.userData = data[0];
      this.authService.isLogged.subscribe((data) => {
        if (data) {
          this.subscription = this.apiService.userAvatar.subscribe((data) => {
            this.userAvatar = data;
          });
        }
      });
    });
  }

  toEditProfile() {
    this.router.navigate(['/profile/edit-profile']);
  }

  onLogout() {
    this.authService.logout();
    this.apiService.userAvatar.next('');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
