import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
