import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCategoryComponent } from './child-category/child-category.component';
import { ParentCategoryComponent } from './parent-category/parent-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ParentCategoryComponent,
    children: [
      {
        path: ':id',
        component: ParentCategoryComponent,
      },
    ],
  },
  {
    path: 'child-cat/:id',
    component: ChildCategoryComponent,
  },
  { path: 'feature-product', component: ProductsListComponent },
  { path: 'product', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
