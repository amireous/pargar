import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { RootObjectChild } from 'src/app/models/api-data.model';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../../../services/api.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

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
  ParentCategory: RootObjectChild[] = [];
  showNavCategory: boolean = false;
  showSideBar: boolean = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      panelClass: 'dialog',
    });
  }

  ngOnInit(): void {
    this.initial();
  }

  initial() {
    this.apiService.getHomeChildCategory().subscribe((data) => {
      this.ParentCategory = data;
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
      this.authService.isLogged.subscribe(() => {
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

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 10) {
      this.showNavCategory = false;
    }
  }

  onCategoryDropDown() {
    this.showNavCategory = !this.showNavCategory;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  onOverlay() {
    this.showSideBar = false;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
