import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, SharedModule],
})
export class UserProfileModule {}
