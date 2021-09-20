import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../../services/api.service';
import { TokenService } from '../../../services/token.service';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userAvatar: string | undefined;
  profileValid: boolean = false;
  isLogged: boolean = false;
  subscription: Subscription[] = [];
  showBanner: boolean = true;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '450px',
    });

    this.authService.isLogged.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.initial();
  }

  initial() {
    this.apiService.getHomeChildCategory().subscribe((data) => {
      console.log(data);
    });

    if (this.apiService.isLogged) {
      this.getProfileData();
    }
    this.apiService.userAvatar.subscribe((data) => {
      this.userAvatar = data;
    });
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
  }

  onLogout() {
    this.authService.logout();
    this.subscription.push(
      this.authService.isLogged.subscribe((status) => {
        this.userAvatar = undefined;
      })
    );
  }

  onProfile() {
    this.apiService.toProfileComponent();
  }

  onCloseBanner() {
    this.showBanner = false;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
