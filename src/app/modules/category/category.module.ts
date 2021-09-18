import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category.routing.module';
import { RouterModule } from '@angular/router';
import { ChildCategoryComponent } from './child-category/child-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeScreenModule } from '../home-screen/home-screen.module';

@NgModule({
  declarations: [
    ChildCategoryComponent,
    ProductDetailComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule,
    HomeScreenModule,
  ],
})
export class CategoryModule {}
