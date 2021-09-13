import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildCategoryComponent } from './child-category/child-category.component';
// import { CategoryComponent } from './category/category.component';

// import { ParentCategoryComponent } from './parent-category/parent-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: 'category/:id',
    component: ChildCategoryComponent,
  },
  { path: 'feature-product/:id', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
