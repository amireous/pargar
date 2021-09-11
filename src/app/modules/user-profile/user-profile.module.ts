import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../shared/shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent],
  imports: [CommonModule, SharedModule],
})
export class UserProfileModule {}
