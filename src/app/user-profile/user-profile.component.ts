import { Component, OnInit } from '@angular/core';
import { RootObjectProfile } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userData: RootObjectProfile | undefined;

  isBookmark: boolean = true;

  constructor(private apiService: ApiService, private router: Router) {}

  onChangeMode() {
    this.isBookmark = !this.isBookmark;
  }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((data) => {
      this.userData = data;
    });
  }

  onLogout() {
    this.apiService.logout();
  }
}
