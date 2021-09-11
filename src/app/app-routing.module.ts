import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './components/error-view/error-view.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
