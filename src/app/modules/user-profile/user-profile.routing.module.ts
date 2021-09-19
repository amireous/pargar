import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileResolverService } from './services/profile-resolver.service';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    resolve: [ProfileResolverService],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    resolve: [ProfileResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
