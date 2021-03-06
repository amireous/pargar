import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCategoryComponent } from '../category/components/child-category/child-category.component';
import { HomeScreenComponent } from './home-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },

  { path: 'parent_cat/:id', component: HomeScreenComponent },
  { path: 'module/:id', component: ChildCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeScreenRoutingModule {}
