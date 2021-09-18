import { not } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeScreenComponent } from './components/home-screen/home-screen.component';
// import { UserProfileComponent } from './modules/user-profile/user-profile.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./modules/home-screen/home-screen.module'),
  },

  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
