import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileRoutingModule } from './user-profile.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    UserProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UserProfileModule {}
